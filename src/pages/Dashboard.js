import {Card, Followers, UserInfo, Navbar, Repos, SearchForm, User} from '../components'
import {useGlobalContext} from '../context/context'


const Dashboard = () => {
    const {loading} = useGlobalContext()
    if(loading){
        return <main>
            <Navbar />
            <SearchForm />
            {/* <img src={} alt="loading"/> */}
        </main>
    }
    return (
        <main>
            <Navbar />
            <SearchForm />
            <UserInfo />
            <User />
            <Repos />
        </main>
    )
}
export default Dashboard