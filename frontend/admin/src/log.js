import './App.css';
import Sidebar from './component/Sidebar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import React, { useState } from 'react';
import LoginForm from './component/LogIn/Login';
function App() {
  const adminUser = {
    email: 'dorjoo',
    password: 'dorjoo'
  }
  const [user, setUser] = useState({ name: '', email: '' });
  const [error, setError] = useState('');

  const Login = details => {
    console.log(details);
    console.log(adminUser.email)

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log('Logged in')
      setUser({
        name: details.name,
        email: details.email
      })
    } else {
      console.log('Details do no match');
      setError('Нэр нууц үг буруу байна');
    }

  }
  const Logout = () => {
    setUser({ name: '', email: '' });
  }
  return (
    <Router>
      {(user.email != '') ? (
        <div className="welcome">
          <h2>Welcome,<span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}

    </Router>
  );
}