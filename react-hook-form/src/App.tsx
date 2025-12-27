import { useState } from 'react'
import './App.css'
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Formreact from './Formreact';
function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });


  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const { name, email } = formData;
    mutation.mutate({ name, email });

    if (!formData.name || !formData.email) {
      alert("All fields required");
      return;
    } else {
      alert("succefull");
      return;
    }
    console.log(formData); // data check करण्यासाठी
  }

  const addUser = (data: { name: string; email: string }) =>
    axios.post("https://jsonplaceholder.typicode.com/users", data);

  const mutation = useMutation({ mutationFn: addUser });
  return (
    <>
      <h1>React Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              [e.target.name]: e.target.value
            })
          }
        />

        <br />

        <input
          type="text"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              [e.target.name]: e.target.value
            })
          }
        />

        <br />
        <button type="submit">Submit</button>
        <button disabled={mutation.isPending}>
          {mutation.isPending ? "Saving..." : "Submit"}
        </button>

      </form>
      <Formreact />

    </>
  )
}

export default App
