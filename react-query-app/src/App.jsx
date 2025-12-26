import { useState } from 'react'
import { fetchUsers } from './api/users'
import { useQuery } from '@tanstack/react-query'
import './App.css'

function App() {
  const [search, setSearch] = useState('');

  const { data: users, isLoading, isError, } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const filteredUsers = users?.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  )

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Something went wrong</h1>;
  return (
    <>

      <h1>React Query Users App</h1>
      <input
        type="text"
        placeholder="Search user"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h2>Total users: {filteredUsers.length}</h2>

      <ul>
        {filteredUsers.map((u) => (
          <li key={u.id}>{u.name} - {u.email}</li>
        ))}
      </ul>
    </>
  )
}

export default App
