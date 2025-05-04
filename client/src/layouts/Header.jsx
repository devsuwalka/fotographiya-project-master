// import React from 'react'
// import headerlogo from '../assets/images/headerlogo.png'
// import { LuBellRing } from 'react-icons/lu'

// const Header = () => {
//     return (
//         <div>
//             <header>
//                 <nav className="navbar navbar-expand-lg navbar-light">
//                     <div className="container-fluid">
//                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                             <span className="navbar-toggler-icon"></span>
//                         </button>

//                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                             <div className="d-flex justify-content-start align-items-center">
//                                 <img src={headerlogo} className="w-25 w-sm-20 w-md-15 w-lg-10" alt="Header Logo" />
//                             </div>

//                             <div className="countdown mx-auto p-3 d-flex justify-content-center align-items-center flex-wrap">
//                                 <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
//                                     <div className="shadow p-1 rounded">
//                                         <span className="countdown-box">1 <br /> month</span>
//                                         <span className="countdown-box">19 <br /> days</span>
//                                         <span className="countdown-box">12 <br /> hours</span>
//                                         <span className="countdown-box">56 <br /> min</span>
//                                     </div>
//                                     <div className="countdown-text text-center">
//                                         Time Limit <br />
//                                         <small>terms and conditions</small>
//                                     </div>
//                                 </button>

//                                 <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                                     <div className="modal-dialog">
//                                         <div className="modal-content">
//                                             <div className="modal-header">
//                                                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                                             </div>
//                                             <div className="modal-body">
//                                                 <div className="container d-flex justify-content-center align-items-center min-vh-75">
//                                                     <div className="timer-container">
//                                                         <div className="timer shadow p-1 rounded">
//                                                             <span className="countdown-box shadow">1 <br /> month</span>
//                                                             <span className="countdown-box shadow">19 <br /> days</span>
//                                                             <span className="countdown-box shadow">12 <br /> hours</span>
//                                                             <span className="countdown-box shadow">56 <br /> min</span>
//                                                         </div>
//                                                         <div className="countdown-text fs-4">
//                                                             Time Limit <br />
//                                                         </div>

//                                                         {/* Pricing Options */}
//                                                         <div className="row t-limit mt-3 ms-2">
//                                                             <div className="col-6">
//                                                                 <button className="btn w-100">1 Week</button>
//                                                             </div>
//                                                             <div className="col-6">
//                                                                 <button className="btn btn-light rounded w-100">199/-</button>
//                                                             </div>
//                                                         </div>

//                                                         <div className="row t-limit mt-3 ms-2">
//                                                             <div className="col-6">
//                                                                 <button className="btn w-100">1 Month</button>
//                                                             </div>
//                                                             <div className="col-6">
//                                                                 <button className="btn btn-light w-100">299/-</button>
//                                                             </div>
//                                                         </div>

//                                                         <div className="row t-limit mt-3 ms-2">
//                                                             <div className="col-6">
//                                                                 <button className="btn w-100">1 Year</button>
//                                                             </div>
//                                                             <div className="col-6">
//                                                                 <button className="btn btn-light w-100">699/-</button>
//                                                             </div>
//                                                         </div>

//                                                         <p className="mt-3 text-center">Do you have a time limit? If you exceed <br />
//                                                             the time limit, you'll be charged extra.</p>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="user-section d-flex align-items-center justify-content-end">
//                                 <LuBellRing className='mt-1 me-2 fs-5' />
//                                 <h6 className="mb-0 d-none d-sm-block">Dishant Mewara</h6>
//                                 <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                     ▼
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </nav>
//             </header>
//         </div>
//     )
// }

// export default Header;
