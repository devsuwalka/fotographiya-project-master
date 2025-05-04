import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderCopy from '../layouts/HeaderCopy';
import headerlogo from '../assets/images/headerlogo.png';
import wedding from '../assets/images/Wedding-Photography-Poses.webp';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [pin, setPin] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    // if (!username.trim()) {
    //   alert('Please enter your username.');
    //   return;
    // }

    if (!pin.trim()) {
      alert('Please enter your PIN.');
      return;
    }

    if (!isChecked) {
      alert('Please accept the Terms of Use.');
      return;
    }

    // Store username in localStorage
    localStorage.setItem('username', username);

    // console.log('Username:', username);
    console.log('PIN entered:', pin);

    alert('Login successfully...');
    navigate('/HomePage');
  };

  return (
    <div>
      {/* Pass username to HeaderCopy or wherever the username is displayed */}
      {/* <HeaderCopy username={username} /> */}

      <div className="container w-75 my-5">
        <div className="row login">
          {/* Logo Section */}
          <div className="col-xl-6 col-lg-6 col-md-12">
            <img src={headerlogo} alt="Header Logo" className="img-fluid" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12">
            <h4 className="my-2">Welcome!</h4>
          </div>

          {/* Main Content */}
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="w-img">
                <img src={wedding} alt="Wedding Photography" className="img-fluid my-5" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 continue">
              <h6 className="my-5 mx-5">Login to continue</h6>
              <form onSubmit={handleSubmit}>
                {/* Username Input */}
                {/* <div className="input-f mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div> */}

                {/* PIN Input */}
                <div className="input-f mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your PIN"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                  />
                </div>

                {/* Terms of Use checkbox */}
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckChecked"
                    onChange={(e) => setIsChecked(e.target.checked)}
                    checked={isChecked}
                  />
                  <label className="form-check-label" htmlFor="flexCheckChecked">
                    I accept and agree to the <a href="#">Terms Of Use</a>
                  </label>
                </div>

                {/* Submit Button */}
                <button className="btn btn-dark w-50 my-5 ms-1" type="submit">
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
