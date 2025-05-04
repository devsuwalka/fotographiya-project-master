import React, { useState } from 'react';
import usericon from '../assets/images/usericon.png';
import images from '../layouts/HaldiData';
import MehndiPage from './MehndiPage';
import { FaUnlockAlt } from 'react-icons/fa'
import { useEffect } from 'react';
import axios from 'axios';


const HaldiPage = () => {
    const [checkedImages, setCheckedImages] = useState(new Set());
    const [showLimitReachedPopup, setShowLimitReachedPopup] = useState(false);
    const [fase, setFase] = useState([])
    const [haldi, setHaldi] = useState([])
    const MAX_SELECTION = 5;

    const handleCheckboxChange = (id) => {
        setCheckedImages((prevState) => {
            const newCheckedImages = new Set(prevState);

            if (newCheckedImages.has(id)) {
                newCheckedImages.delete(id); // Remove image if already selected
            } else {
                if (newCheckedImages.size >= MAX_SELECTION) {
                    setShowLimitReachedPopup(true); // Show popup when limit is reached
                    return prevState; // Do not add more images
                }
                newCheckedImages.add(id); // Add new image
            }
            if (newCheckedImages.size >= MAX_SELECTION) {
                console.log("Popup triggered!"); // Debug log
                setShowLimitReachedPopup(true);
                return prevState;
            }
            return newCheckedImages;

        });
    };



    const handleClosePopup = () => {
        console.log(showLimitReachedPopup)
        setShowLimitReachedPopup(false); // Close popup
    };

    const handleSubmit = () => {
        console.log(showLimitReachedPopup)
        alert("Selection confirmed! Proceeding...");
        setShowLimitReachedPopup(false); // Close popup after confirmation
    };

    const haldiImagesSelected = checkedImages.size;

    const fetchCountdown = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/wedding');

            if (response.data && response.data.project && response.data.project.length > 0) {
                console.log(response.data.project);
                setFase(response.data.project); // Ensure accessing a valid index
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


    async function haldidata() {
        try {
            const response = await axios.get('http://localhost:8000/api/wedding');
            if (response.data && response.data.project && response.data.project.length > 0) {
                console.log(response.data.project);
                setHaldi(response.data.project); // Ensure accessing a valid index
            } else {
                console.warn("No project data found.");
            }
        } catch (error) {
            console.error('Error fetching countdown data:', error);
        }
    }

    useEffect(() => {
        haldidata()
    }, [])

    return (
        <div>
            <div className="haldi container my-5">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12">
                        <h4 className="ms-4 mt-2 p-2 display-1">Haldi</h4>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-5">
                        <div className="buttons">
                            <button type="button" className="btn  mt-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                <img src={usericon} alt="User Icon" />
                            </button>

                            <div
                                className="modal fade"
                                id="staticBackdrop"
                                data-bs-backdrop="static"
                                data-bs-keyboard="false"
                                tabIndex="-1"
                                aria-labelledby="staticBackdropLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog modal-lg"> {/* Adjust modal size */}
                                    <div className="modal-content">
                                        <div className="modal-header invite-header">
                                            <h5 className="modal-title" id="staticBackdropLabel">
                                                Invite
                                            </h5>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="input-group mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control border-dark"
                                                    placeholder="Add Email"
                                                    aria-label="Text input with dropdown button"
                                                />
                                                <button
                                                    className="btn btn dropdown-toggle"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    Can Add
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                    <li><hr className="dropdown-divider" /></li>
                                                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                                                </ul>
                                                <div className="invite-btn">
                                                    <button className="btn btn-danger">Invite</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-8 d-flex align-items-center">
                                                <FaUnlockAlt className="ms-4 mb-3" />
                                                <h6 className="mb-0 ms-3 mb-3">Only people invited to this file</h6>
                                            </div>
                                            <div className="col-lg-4 d-flex align-items-center">
                                                <h6 className="ms-5 mb-3">Can Access</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className="btn mx-3 shadow mt-2">
                                Select pic {haldiImagesSelected} / {MAX_SELECTION}
                            </button>
                            <button className="btn mx-3 shadow mt-2" data-bs-toggle="modal" data-bs-target="#replaceModal">Replace</button>
                            <div
                                className="modal fade"
                                id="replaceModal"
                                data-bs-backdrop="static"
                                data-bs-keyboard="false"
                                tabIndex="-1"
                                aria-labelledby="replaceModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog modal-xl"> {/* Changed from modal-lg to modal-xl */}
                                    <div className="modal-content">
                                        <div className="modal-header invite-header">
                                            <h5 className="modal-title" id="replaceModalLabel">Replace Images</h5>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="container">
                                                <div className="row">
                                                    {/* <div className="col-lg-3 mb-3">
                                                        <img
                                                            src={haldiimg}
                                                            alt=""
                                                            style={{
                                                                height: '200px',
                                                                width: '200px',
                                                                borderRadius: '100%',
                                                                objectFit: 'cover',
                                                            }}
                                                        />
                                                    </div> */}
                                                    {fase.length > 0 ? (
                                                        fase.map((item, index) => (
                                                            <div className="col-lg-3 mb-3" key={index}>
                                                                <img
                                                                    src={`http://localhost:8000/public/face/${item.wedding_face}`}
                                                                    alt="Wedding Image"
                                                                    style={{
                                                                        height: '200px',
                                                                        width: '200px',
                                                                        borderRadius: '100%',
                                                                        objectFit: 'cover',
                                                                    }}
                                                                    onError={(e) => e.target.src = haldiimg} // Fallback in case of broken images
                                                                />
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <p>No images found</p>
                                                    )}

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>



                {/* <div className="image-container">
                    <div className="row">
                        {images.map((image) => (
                            <div className="col-lg-2" key={image.id}>
                                <div className="image-item">
                                    <img src={image.src} alt={image.alt} className="image" />
                                    <input
                                        type="checkbox"
                                        checked={checkedImages.has(image.id)}
                                        onChange={() => handleCheckboxChange(image.id)}
                                        className="checkbox"
                                        disabled={checkedImages.size >= MAX_SELECTION && !checkedImages.has(image.id)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}

                <div className="image-container">
                    <div className="row">
                        {haldi.map((ele, index) => (
                            <div className="col-lg-2" key={index}>
                                <div className="image-item">
                                    <img
                                        src={`http://localhost:8000/public/haldi/${ele.wedding_img}`}
                                        alt="Haldi Image"
                                        className="image"
                                        onError={(e) => e.target.src = "path/to/fallback-image.jpg"}
                                    />
                                    <input
                                        type="checkbox"
                                        checked={checkedImages.has(ele.wedding_img)}
                                        onChange={() => handleCheckboxChange(ele.wedding_img)}
                                        className="checkbox"
                                        disabled={checkedImages.size >= MAX_SELECTION && !checkedImages.has(ele.wedding_img)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Popup for selection limit */}
            {/* {showLimitReachedPopup ?
                (
                    <div className="popup-overlay">
                        <div className="popup-content">
                            <h3>Please Confirm This !</h3>
                            <div className="popup-buttons">
                                <button className="btn btn-success" onClick={handleClosePopup}>
                                    Hold
                                </button>
                                <button className="btn btn-secondary" onClick={handleSubmit}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                )
                : (<MehndiPage haldiImagesSelected={haldiImagesSelected} />)} */}


        </div>
    );
};

export default HaldiPage;
