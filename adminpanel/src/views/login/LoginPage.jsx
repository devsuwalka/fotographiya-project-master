import React from 'react';
import { useForm } from 'react-hook-form';
import weddingphoto from '../../assets/img/image.png';
import headerlogo from '../../assets/img/logo2.png';
import '../../assets/css/style.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const onSubmit = (data) => {
        console.log("Submitted PIN:", data.admin_pwd);
        alert("Login Successful!");
        // Handle authentication logic here
        navigate('/Dashboard')
    };

    return (
        <div className="container w-75 my-5">
            <div className="row login">
                {/* Logo Section */}
                <div className="col-lg-6 text-center">
                    <img src={headerlogo} alt="Header Logo" className="img-fluid w-50 h-auto" />
                </div>

                {/* Welcome Text */}
                <div className="col-xl-6 col-lg-6 col-md-12 text-center">
                    <h4 className="my-2">Welcome!</h4>
                </div>

                <div className="row">
                    {/* Left Side - Image */}
                    <div className="col-lg-6">
                        <div className="w-img text-center">
                            <img src={weddingphoto} alt="Wedding Photography" className="img-fluid my-5" />
                        </div>
                    </div>

                    {/* Right Side - Login Form */}
                    <div className="col-lg-6 continue">
                        <h6 className="my-5 mx-5 text-center">Login to continue</h6>
                        <form onSubmit={handleSubmit(onSubmit)} className="px-4">
                            <div className="input-f mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter your PIN"
                                    {...register("admin_pwd", {
                                        required: "PIN is required",
                                        minLength: { value: 4, message: "PIN must be at least 4 digits" }
                                    })}
                                />
                                {errors.admin_pwd && <span className="text-danger">{errors.admin_pwd.message}</span>}
                            </div>

                            {/* Remember Me Checkbox (Commented Out) */}
                            {/* <div className="form-check mt-3">
                                <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    Remember Me
                                </label>
                            </div> */}

                            <div className="text-center">
                                <button className="btn btn-dark w-100 my-4" type="submit">
                                    Continue
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
