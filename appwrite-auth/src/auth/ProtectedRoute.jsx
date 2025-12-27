import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { account } from "../appwrite/config";

function ProtectedRoute({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        account.get()
            .then(setUser)
            .catch(() => setUser(null))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading...</p>;
    return user ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
