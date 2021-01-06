import {useGlobalContext} from '../context/context'


const Followers = () => {
    const {followers} = useGlobalContext()
    return (
        <div className="followers-container">
            <div className="contain">
                {followers.map((follower, index) => {
                    const {avatar_url, html_url, login} = follower
                    return <article key={index} className="follower-info">
                        <img src={avatar_url} alt={login}/>
                        <div className="follower-details">
                            <h4>{login}</h4>
                            <a href={html_url}>{html_url}</a>
                        </div>
                    </article>
                })}
            </div>
        </div>
    )
}
export default Followers