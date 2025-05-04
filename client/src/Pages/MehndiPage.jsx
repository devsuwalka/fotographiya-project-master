import React from 'react';
import usericon from '../assets/images/usericon.png';
import lock from '../assets/images/lock.png';
import { FaUnlockAlt } from 'react-icons/fa';
import images from '../layouts/HaldiData';

const MehndiPage = ({ haldiImagesSelected }) => {
    
    return (
        <div>
            <div className={`mahendi container my-5 ${haldiImagesSelected >= 5 ? 'unlocked' : 'locked'}`}>
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12">
                        <h4 className="ms-4 mt-2 p-2 display-1">Mahendi</h4>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-5">
                        <div className="buttons">
                            <button
                                type="button"
                                className="btn shadow mt-2"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                            >
                                <img src={usericon} alt="User Icon" />
                            </button>
                            <button className="btn mx-3 shadow mt-2">
                                Select pic {/* Add logic to show selected images count */}
                            </button>
                            <button className="btn mx-3 shadow mt-2">Replace</button>
                        </div>
                    </div>
                </div>

                {/* Lock or Unlock the Mahendi Section */}
                {/* <div className={`lock-img ${haldiImagesSelected >= 5 ? 'hidden' : 'visible'}`}>
                    <img src={lock} alt="Locked" />
                </div> */}

                <div className="image-container">
                    <div className="row">

                        {images.map((image) => (

                            <div className="col-lg-2" key={image.id}>
                                <div className="image-item">
                                    <img src={image.src} alt={image.alt} className="image" />
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MehndiPage;
