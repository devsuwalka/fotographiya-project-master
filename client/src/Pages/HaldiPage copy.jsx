import React, { useState } from 'react'
import usericon from '../assets/images/usericon.png'
import haldi1 from '../assets/images/haldi1.jpeg'
import checked from '../assets/images/checked.png'
import { FaUnlockAlt } from 'react-icons/fa'
import images from '../layouts/HaldiData'

const HaldiPage = () => {

    const [checkedImages, setCheckedImages] = useState(new Set());
    const MAX_SELECTION = 5

    // Function to toggle the checkbox state
    const handleCheckboxChange = (id) => {
        setCheckedImages((prevState) => {
            const newCheckedImages = new Set(prevState);

            // If the checkbox is already checked, uncheck it
            if (newCheckedImages.has(id)) {
                newCheckedImages.delete(id);
                setErrorMessage(""); // Clear the error message when checkbox is unchecked
            } else {
                // If the limit is reached, display an error message and don't add the new checkbox
                if (newCheckedImages.size >= MAX_SELECTION) {
                    return prevState; // Prevent updating the state if the limit is reached
                }
                newCheckedImages.add(id);
            }
            return newCheckedImages;
        });
    };


    return (
        <div>
            <div className="haldi container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12">
                        <h4 className="ms-4 mt-2 p-2 display-1">Haldi</h4>
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
                                Select pic {checkedImages.size} / 5
                            </button>
                            <button className="btn mx-3 shadow mt-2">Replace</button>
                        </div>
                    </div>
                </div>

                {/* Modal */}
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

                {/* Haldi img */}
                <div className="App">
                    {/* <h1>Select Images</h1> */}
                    <div className="image-container">
                        <div className="row">
                            {images.map((image) => (
                                <div className="col-lg-2">
                                    <div key={image.id} className="image-item">
                                        <img src={image.src} alt={image.alt} className="image" />
                                        <input
                                            type="checkbox"
                                            checked={checkedImages.has(image.id)}
                                            onChange={() => handleCheckboxChange(image.id)}
                                            className="checkbox"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HaldiPage
