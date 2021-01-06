import React, { useContext, useEffect, useState } from "react";
//import mockFollower from "./mockData/mockFollower";
//import mockRepos from "./mockData/mockRepos";
//import mockUser from "./mockData/mockUser";
import axios from "axios";

const rootUrl = "https://api.github.com";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [followers, setFollowers] = useState([]);

  const [request, setRequest] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });

  const searchGithubUser = async (user) => {
    toggleError();
    setLoading(true);
    const response = await axios(`${rootUrl}/users/${user}`).catch((error) =>
      console.log(error)
    );
    if (response) {
      setGithubUser(response.data);
      const { repos_url, followers_url } = response.data;
      //fetch repos
      axios(`${repos_url}?per_page=100`)
        .then((response) => {
          setRepos(response.data);
        })
        .catch((err) => console.log(err));

      // fetch followers
      axios(`${followers_url}?per_page=100`)
        .then((response) => {
          setFollowers(response.data);
        })
        .catch((err) => console.log(err));
        setLoading(false)
    } else {
      toggleError(true, "there is no user with that username");
      setLoading(false)
    }
  };
  const checkRate = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setRequest(remaining);
        if (remaining === 0) {
          toggleError(true, "You have exceeded your daily request limit");
        }
        console.log(remaining);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const toggleError = (show = false, msg = "") => {
    setError({ show, msg });
  };
  useEffect(() => {
    checkRate();
  }, []);

  return (
    <AppContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        request,
        error,
        searchGithubUser,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
