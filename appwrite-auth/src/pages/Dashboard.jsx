import { account } from "../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


function Dashboard() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        account.get()
            .then((res) => setUser(res))
            .catch(() => navigate("/login"));
    }, [])

    const logout = async () => {
        await account.deleteSession("current");
        navigate("/login");
    };

    if (!user) return <p>Loading user...</p>
    return (
        <div>
            <h1>Dashboard </h1>
            <h3>User info</h3>
            <p><b>Id: </b> {user.$id}</p>
            <p><b>Email: </b>{user.name || "No name set"}</p>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Dashboard