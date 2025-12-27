import { useState } from "react";
import { account } from "../appwrite/config";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        await account.create("unique()", email, password);
        navigate("/login");
    };

    return (
        <form onSubmit={handleSignup}>
            <h2>Signup</h2>
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <button>Signup</button>
        </form>
    );
}

export default Signup;
