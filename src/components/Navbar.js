import {useAuth0} from '@auth0/auth0-react'

const Navbar = ()=> {
    const {isAuthenticated, loginWithRedirect, logout, user, isLoading} = useAuth0()
    const isUser= isAuthenticated && user
    return (
        <nav>
            {isUser && user.picture && <img src={user.picture} alt={user.name}/>}
            {isUser && user.name && <h4>welcome, <strong>{user.name.toUpperCase()}</strong></h4>}
            {isUser ?
            <button onClick={()=>{logout({returnTo: window.location.origin})}}>Logout</button>:
            null
            }
        </nav>
    )
}
export default Navbar