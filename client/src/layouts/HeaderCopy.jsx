import React, { useEffect, useState } from 'react';
import headerlogo from '../assets/images/headerlogo.png';
import { LuBellRing } from 'react-icons/lu';
import axios from 'axios';

const HeaderCopy = () => {
  // const [username, setUsername] = useState('');
  const [countdown, setCountdown] = useState({ months: 0, days: 0, hours: 0, miniutes: 0 });

  // Fetch username from localStorage
  // useEffect(() => {
  //   const storedUsername = localStorage.getItem('username');
  //   if (storedUsername) {
  //     setUsername(storedUsername);
  //   }
  // }, []);

  // Fetch countdown data from API
  const fetchCountdown = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/wedding');
  
      if (response.data && response.data.project && response.data.project.length > 0) {
        console.log(response.data.project);
        setCountdown(response.data.project[0]); // Ensure accessing a valid index
      } else {
        console.warn("No project data found.");
      }
    } catch (error) {
      console.error('Error fetching countdown data:', error);
    }
  };
  
  useEffect(() => {
    fetchCountdown();
  }, []);

  return (
    <div>
      <header>
        <div className="container h-logo">
          <div className="row justify-content-between align-items-center">
            {/* Logo Section */}
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 text-center text-lg-start">
              <img
                src={headerlogo}
                className="w-25 w-sm-20 w-md-15 w-lg-10"
                alt="Header Logo"
              />
            </div>

            {/* Countdown Section */}
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 text-center py-3">
              <div className="countdown mx-auto p-3 d-flex justify-content-center align-items-center flex-wrap">
                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <div className="shadow p-1 rounded">
                    <span className="countdown-box">
                      {countdown.months || 0} <br /> months
                    </span>
                    <span className="countdown-box">
                      {countdown.days || 0} <br /> days
                    </span>
                    <span className="countdown-box">
                      {countdown.hours || 0} <br /> hours
                    </span>
                    <span className="countdown-box">
                      {countdown.miniutes || 0} <br /> minutes
                    </span>

                  </div>
                  <div className="countdown-text text-center">
                    Time Limit <br />
                    <small>terms and conditions</small>
                  </div>
                </button>
              </div>

              {/* Modal */}
              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <div className="container d-flex justify-content-center align-items-center min-vh-75">
                        <div className="timer-container">
                          <div className="timer shadow p-1 rounded">
                            <span className="countdown-box shadow">
                              {countdown.months || 0} <br /> months
                            </span>
                            <span className="countdown-box shadow">
                              {countdown.days || 0} <br /> days
                            </span>
                            <span className="countdown-box shadow">
                              {countdown.hours || 0} <br /> hours
                            </span>
                            <span className="countdown-box shadow">
                              {countdown.miniutes || 0} <br /> minutes
                            </span>
                          </div>
                          <div className="countdown-text fs-4">
                            Time Limit <br />
                          </div>
                          {/* Pricing Options */}
                          <div className="row t-limit mt-3 ms-2">
                            <div className="col-6">
                              <button className="btn w-100">1 Week</button>
                            </div>
                            <div className="col-6">
                              <button className="btn btn-light rounded w-100">199/-</button>
                            </div>
                          </div>
                          <div className="row t-limit mt-3 ms-2">
                            <div className="col-6">
                              <button className="btn w-100">1 Month</button>
                            </div>
                            <div className="col-6">
                              <button className="btn btn-light w-100">299/-</button>
                            </div>
                          </div>
                          <div className="row t-limit mt-3 ms-2">
                            <div className="col-6">
                              <button className="btn w-100">1 Year</button>
                            </div>
                            <div className="col-6">
                              <button className="btn btn-light w-100">699/-</button>
                            </div>
                          </div>
                          <p className="mt-3 text-center">
                            Do you have a time limit? If you exceed <br />
                            the time limit, you'll be charged extra.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* User Section */}
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 text-center text-lg-end py-3">
              <div className="user-section d-flex align-items-center justify-content-center justify-content-lg-end">
                <LuBellRing className="mt-1 me-2 fs-5" />
                <h6 className="mb-0 d-none d-sm-block">{countdown.wedding_name}</h6>
                <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  ▼
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderCopy;
