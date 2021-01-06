import {Link} from 'react-router-dom'



const Error = () => {
    return <div>
        <h2>404</h2>
        <p>The page you are looking for can not be found</p>
        <Link to="/">
            Back Home
        </Link>
    </div>
}
export default Error