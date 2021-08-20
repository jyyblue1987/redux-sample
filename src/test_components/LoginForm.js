import React, { useState } from "react";

function LoginForm({ onSubmit }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
        <h2>Login</h2>
        <form onSubmit={onSubmit}>
            <label>
            Email
            <input
                type="email"
                placeholder="user@test.com"
                value={email}
                onChange={({ target: { value } }) => setEmail(value)}
            />
            </label>
            <label>
            Password
            <input
                type="password"
                value={password}
                onChange={({ target: { value } }) => setPassword(value)}
            />
            </label>
            <button disabled={!email || !password}>Login Button</button>
        </form>
        </>
    );
}

export default LoginForm;