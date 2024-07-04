import React from 'react';
import './Navbarandvideo.css';

function Navbarandvideo() {
  return (
    <div className="container">
      <div className="videodiv">
        <video autoPlay loop muted>
          <source src="/gymfoot.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"> {/* Added new div */}
          <h2>Welcome to Gymweb Bros</h2>
          <p>A website dedicated to all your fitness needs.</p>
        </div>
      </div>
      <div className="navbar">
        <div className="logo">GYMWEB BROS</div>
        <div className="others">
          <a href="#"><div className="Plans">Plans</div></a>
          <a href="#"><div className="Products">Products</div></a>
          <a href="#"><div className="Login">Login</div></a>
        </div>
      </div>
    </div>
  );
}

export default Navbarandvideo;
