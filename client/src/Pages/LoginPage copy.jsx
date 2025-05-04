import React, { useState } from 'react';
import headerlogo from '../assets/images/headerlogo.png';
import wedding from '../assets/images/Wedding-Photography-Poses.webp';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [pin, setPin] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isChecked) {
      console.log("PIN entered: ", pin);
      navigate('/HomePage')
      alert("Login successfully....")
    } else {
      console.log("Please accept the Terms of Use.");
    }
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div>
      <div className="container w-75 my-5">
        <div className="row login">
          {/* Logo section */}
          <div className="col-xl-6 col-lg-6 col-md-12">
            <img src={headerlogo} alt="Header Logo" className="img-fluid" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12">
            <h4 className="my-2">Welcome!</h4>
          </div>

          {/* Main content */}
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="w-img">
                <img src={wedding} alt="Wedding Photography" className="img-fluid my-5" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 continue">
              <h6 className="my-5 mx-5">Login to continue</h6>
              <form onSubmit={handleSubmit}>
                <div className="input-f">
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
                    value=""
                    id="flexCheckChecked"
                    onChange={handleCheckboxChange}
                    checked={isChecked}
                  />
                  <label className="form-check-label" htmlFor="flexCheckChecked">
                    I accept and agree to the <a href="#">Terms Of Use</a>
                  </label>
                </div>



                <button
                  className="btn btn-dark w-50 my-5 ms-1"
                  type="submit"
                  disabled={!isChecked}  // Disable button if checkbox is not checked
                >
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
