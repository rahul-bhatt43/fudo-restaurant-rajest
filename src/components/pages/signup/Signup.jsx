// signup.jsx

import React, { useState } from "react";
import { auth } from "../../firbase/Firebase"; // Adjust the import path as necessary
// import { createUser WithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSignup = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            setSuccess("Signup successful! Welcome " + userCredential.user.email);
            console.log("User  created:", userCredential.user);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "100px auto", textAlign: "center" }}>
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
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
                    Signup
                </button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
        </div>
    );
};

export default Signup;