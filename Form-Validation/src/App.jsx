// import { useState } from 'react'
import { useForm } from "react-hook-form"

import './App.css'

function App() {
  // const [formData, setFormData] = useState({ email: "", password: "" });
  // const [errorss, seterrors] = useState({});

  const { register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data: ", data);

  }

  // const handleChange = (e) => {
  //   const { name, value } = e.target;


  //   setFormData(prev => ({
  //     ...prev,
  //     [name]: value
  //   }))
  // };

  // const validate = () => {
  //   const newerrorss = {};


  //   if (!formData.email) {
  //     newerrorss.email = "Email is required";
  //   } else if (!formData.email.includes("@")) {
  //     newerrorss.email = "Invalid email";
  //   }

  //   if (!formData.password) {
  //     newerrorss.password = "Password is required";

  //   } else if (formData.password.length < 6) {
  //     newerrorss.password = "Minimum 6 characters required";
  //   }

  //   seterrors(newerrorss);
  //   return Object.keys(newerrorss).length === 0;

  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (validate()) {
  //     console.log("Form submitted:", formData);

  //   }
  // }
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "300px" }}>
      <input
        type="email"
        placeholder='Email'
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "invalid email format"
          }
        })}

      />
      {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

      <input
        type="password"
        placeholder='Password'
        {...register("password", {
          required: "password is required",
          minLength: {
            value: 6,
            message: "minimum 6 letter required"
          }
        })}
      />
      {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
      <button type='submit'>Login</button>
    </form>
  )
}

export default App
