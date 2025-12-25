import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );
        setUser(res.data);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled");
          return;
        }
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();

    return () => controller.abort();
  }, []);

  // 🔍 SEARCH LOGIC
  const filteredUsers = user.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1>API in React</h1>

      <input
        type="text"
        placeholder="Search user"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <h1>Loading...</h1>}
      {error && <h1>Something went wrong</h1>}

      {!loading && !error && (
        <>
          <h2>Number of users: {filteredUsers.length}</h2>
          <ul>
            {filteredUsers.map((u) => (
              <li key={u.id}>{u.name}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default App;
