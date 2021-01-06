import React from "react";
import { useGlobalContext } from "../context/context";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";

const UserInfo = () => {
  const { githubUser } = useGlobalContext();
  const { public_repos, public_gist, following, followers } = githubUser;

  const items = [
    {
      id: 1,
      icon: <GoRepo />,
      label: "repos",
      value: public_repos,
      color: "pink",
    },
    {
      id: 2,
      icon: <FiUsers />,
      label: "followers",
      value: followers,
      color: "green",
    },
    {
      id: 3,
      icon: <FiUserPlus />,
      label: "following",
      value: following,
      color: "purple",
    },
    {
      id: 4,
      icon: <GoGist />,
      label: "gist",
      value: public_gist,
      color: "yellow",
    },
  ];
  return <section>
      <div className="info-container"> 
          {items.map(item =>{
              return <Item key={item.id} {...item} />
          })}
      </div>
  </section>;
};

const Item = ({icon, label, value, color}) => {
    return (
        <article className="item">
            <span className={color}>{icon}</span>
            <div>
                <h3>{value}</h3>
                <p>{label}</p>
            </div>
        </article>
    )
}
export default UserInfo;
