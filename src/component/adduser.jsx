import React, { useState } from 'react';


const AddUser = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle the form submission here
        console.log(user);
    };

    return (
        <div>
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={user.name} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" value={user.email} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" value={user.password} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;