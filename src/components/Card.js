import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";
import { useGlobalContext } from "../context/context";

const Card = () => {
  const { githubUser } = useGlobalContext();
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    twitter_username,
  } = githubUser;
  return (
    <div className="card-container">
      <header className="card-header">
        <img src={avatar_url} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>@{twitter_username || name}</p>
        </div>
        <a href={html_url} className="follow">follow</a>
      </header>
      <p className="bio">{bio}</p>
      <div className="links">
          <p><MdBusiness />{company}</p>
          <p><MdLocationOn />{location || 'earth'}</p>
          <a href={`http://${blog}`} ><MdLink />{blog}</a>
      </div>
    </div>
  );
};
export default Card;
