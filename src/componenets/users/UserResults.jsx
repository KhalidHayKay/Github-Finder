import { useContext } from "react"
import Spinner from "../layout/Spinner";
import UserItems from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

function UserResults() {
    const {users, loading} = useContext(GithubContext);

    if (! loading) {
        return <div className="grid grid-col-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {users.map(user => (
                <UserItems user={user} key={user.id} />
            ))}
        </div>
    } else {
        return <Spinner />
    }
}

export default UserResults