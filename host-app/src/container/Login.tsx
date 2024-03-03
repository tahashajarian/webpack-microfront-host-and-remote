import React, { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Simulate authentication (replace with actual authentication logic)
    if (username === "demo" && password === "password") {
      // Successful login
      setError("");
      alert("Login successful!");
    } else {
      // Failed login
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 to-indigo-500">
    <div className="bg-white p-6 rounded shadow-md w-64">
      <h2 className="text-lg font-bold text-center mb-4 text-gray-800">Login</h2>

      {error && <div className="text-red-500 text-sm mb-4 text-center">{error}</div>}

      <div className="mb-2">
        <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="border text-black rounded w-full py-2 px-3 text-sm focus:outline-none focus:shadow-outline-blue"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="mb-2">
        <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="border rounded w-full text-black py-2 px-3 text-sm focus:outline-none focus:shadow-outline-blue"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue text-sm"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  </div>
  );
};

export default LoginPage;
