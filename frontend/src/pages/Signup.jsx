import React, { useState } from 'react'

const Signup = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

      </div>
    </div>
  )
}

export default Signup

