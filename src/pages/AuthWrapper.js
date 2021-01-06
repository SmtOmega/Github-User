import { useAuth0 } from "@auth0/auth0-react"


function AuthWrapper({children}){
    const {isLoading, error} = useAuth0()
    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(error){
        return <h1>{error.message}</h1>
    }
    return <>{children}</>
}
export default AuthWrapper