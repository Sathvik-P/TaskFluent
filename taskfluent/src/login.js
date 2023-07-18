import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default function Login() {} ;

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault(); // Prevent the default form submission behavior
  try {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    const response = await axios.post('/api/user', formData);
    // Handle the response...
  } catch (error) {
    // Handle the error...
  }
};

  return (
    <div>
       <div>
            <div>
        {/* SWIRLIE 1 */}
      <div className="swirlie swirlie-bg-right swirlie-1" style={{ clipPath: 'url(#swirlie1)' }}></div>
      <svg width="0" height="0">
        <defs>
          <clipPath id="swirlie1" clipPathUnits="objectBoundingBox">
            <path
              d="M 0 1 C 0.4 0.5 0.6 0.8 1 0.6 L 1 -0.1 C 0.7 0 0.8 0.6 0 0.7 Z"
              // Animations go here
            />
          </clipPath>
        </defs>
      </svg>
      {/* Padding and other divs */}
      <div className="container">
        {/* Carousel component */}
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
          <div className="carousel-inner center-block" style={{ width: '400px', height: '500px' }}>
            {/* Carousel items */}
            <div className="carousel-item active">
              <img src="https://as2.ftcdn.net/v2/jpg/01/98/91/55/1000_F_198915533_HILfaaljDkjYt2bktXyF11K3RmhdrPXy.jpg" className="d-block" style={{ width: '350px', height: '500px' }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://cdn.pixabay.com/photo/2017/06/10/07/18/list-2389219_1280.png" className="d-block" style={{ width: '350px', height: '500px' }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://cdn.pixabay.com/photo/2017/06/10/07/18/list-2389219_1280.png" className="d-block" style={{ width: '350px', height: '500px' }} alt="..." />
            </div>
          </div>
        </div>
        <div className="col-lg text-md-left text-center padding2">
          {/* Title, description, and form */}
          <h1 className="klavika-bold-adult title-txt gold">TaskFluent<br /></h1>
          <br />
          <h1 className="good-vibes good-vibes-title gold">The Only App You Need</h1>
          <p

                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                    type="password"
                />
                <button type="submit">Login</button>
            </form>
        </div>
        </div>
      </div>
      <div className="top-right hex-md inertia-lvl-1" style={{ zIndex: 100 }}></div>
      <form method="post" style={{ textAlign: 'center' }}>
        <button type="submit" className="btn gradient-btn museo-bold" name="signup">Sign up here!</button>
      </form>
      </div>
    </div>
  );
}

ReactDOM.render(<LoginForm />, document.getElementById('login'));
