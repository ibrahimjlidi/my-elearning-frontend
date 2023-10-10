import './NavbarComponent.css'; // Import your custom styles
import React from 'react';


function NavbarComponent() {
  return (
    <div className="nav">
    <div className="nav-header">
      <div className="nav-title">
      E-learning
      </div>
    </div>
    <div className="nav-btn">
      <label htmlFor="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    
    <div className="nav-links">

  
      <a href="/" >Home</a>
      <a href="/login" >Login</a>
      <a href="/register" >Register</a>
    </div>
  </div>
  );
}


export default NavbarComponent;
