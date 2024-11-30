// login.jsx

import React, { useState } from "react";
import { auth } from "../../firbase/Firebase"; // Adjust the import path as necessary
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setSuccess("Login successful! Welcome back " + userCredential.user.email);
            console.log("User  logged in:", userCredential.user);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "100px auto", textAlign: "center" }}>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div style={{ marginBottom: "10px" }}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ padding: "10px", width: "100%" }}
                        required
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ padding: "10px", width: "100%" }}
                        required
                    />
                </div>
                <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
                    Login
                </button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
        </div>
    );
};

export default Login;