import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import './LoginPage.css';  // Ensure this path is correct
import leafImage from '../assets/images/leaf_01.png';  
import leafImage2 from '../assets/images/leaf_02.png';  
import leafImage3 from '../assets/images/leaf_03.png';  
import leafImage4 from '../assets/images/leaf_04.png';  
import bg from '../assets/images/bg.jpg';  
import girl from '../assets/images/girl.png';  
import trees from '../assets/images/trees.png';  



const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, isAuthenticated } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <section>
      <div className="leaves">
        {/* You would need to adjust the paths to these images based on your project structure */}
        <div className="set">
        <div><img src={leafImage} alt="leaf" /></div>
        <div><img src={leafImage2} alt="leaf" /></div>
        <div><img src={leafImage3} alt="leaf" /></div>
        <div><img src={leafImage4} alt="leaf" /></div>
        <div><img src={leafImage} alt="leaf" /></div>
        <div><img src={leafImage2} alt="leaf" /></div>
        <div><img src={leafImage3} alt="leaf" /></div>
        <div><img src={leafImage4} alt="leaf" /></div>
        </div>
      </div>
      <img src={bg} className="bg" alt="Background" />
      <img src={girl} className="girl" alt="Girl" />
      <img src={trees} className="trees" alt="Trees" />
      <div className="login">
        <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
          <div className="inputBox">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
         
          <div className="inputBox">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="inputBox">
            <input type="submit" value="Login" id="btn" />
          </div>
        </form>
        
        {/*<div className="group">
          <a href="#">Forget Password</a>
          <a href="#">Signup</a>
  </div>*/}
      </div>
    </section>
  );
};

export default LoginPage;
