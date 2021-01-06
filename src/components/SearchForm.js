import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { useGlobalContext } from "../context/context";
const SearchForm = () => {
    const {request, error, searchGithubUser} = useGlobalContext()
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      searchGithubUser(user)
    }
  };
  return (
    <section>
        {error.show && <p>{error.msg}</p>}
      <div className="search-container">
        <form onSubmit={handleSubmit}>
          <div className="search-form">
            <MdSearch className="search-icon"/>
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="Enter Github user"
            />
            {request > 0 && <button type="submit">Search</button>}
          </div>
        </form>
        <h3>Requests: {request} / 60 </h3>
      </div>
    </section>
  );
};

export default SearchForm;
