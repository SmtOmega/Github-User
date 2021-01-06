import Card from './Card'
import Followers from './Followers'


const User = () => {
    return (
        <section>
            <div className="user-container">
                <Card />
                <Followers />
            </div>
        </section>
    )
}

export default User