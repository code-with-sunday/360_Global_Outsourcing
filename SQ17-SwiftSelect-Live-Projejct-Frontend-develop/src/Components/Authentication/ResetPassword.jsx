import * as React from "react";
import "../../App.css"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {useState} from "react";
import axios from "../../api/axios";

import {Link, useLocation, useNavigate} from "react-router-dom";
import {SweetAlert} from "../utils/SweetAlert.jsx";
import {ClipLoader} from "react-spinners";
import {SuccessCard} from "../utils/SuccessCard.jsx";

export const ResetPassword = () => {
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);

    const token = queryParams.get('token');



    const [clip, setClip] = useState(false);

    const [blur, setBlur] = useState("");

    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        token: `${token}`,
        newPassword: '',
        confirmNewPassword: '',

    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleToggleConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setClip(true);
            setBlur("opacity-[0.2]");

            // Make API call to your Java backend to handle user registration
            await axios.post('/auth/reset-forgot-password', formData)
                .then(result => {
                    console.log(result.data)

                    setClip(false);

                    SweetAlert('success', 'Password Reset Successful', 'You have successfully reset your password, you can proceed to login', 3000);

                    setTimeout(() => {
                        setBlur("");
                    }, 3000)
                });

            // Handle success (redirect, show message, etc.)
            console.log('Reset password successfully!');
        } catch (error) {
            setClip(false);

            SweetAlert('error', 'Oops!', 'Something went wrong, please try again', 2000);

            setTimeout(() => {
                setBlur("");
            }, 2000);

            // Handle error (display error message, log, etc.)
            console.error('Reset password failed:', error.message);
        }
    };

    let googleImg="src/assets/Google.svg";

    return (
        <div>
            { clip &&
                <ClipLoader color="#36D7B7" loading={true} size={100} className="absolute right-[46.5vw] top-[44vh]" />
            }

            <div className={`register-cont ${blur}`}>

                {success &&
                    <SuccessCard
                        message="Account Registration successful!"
                        bgColor="bg-black"
                        details="Your account has been created successfully, Please visit your email to verify your account"
                        buttonName="Return to Login"
                        handleClick={() => {navigate("/login")}}
                    />
                }

            <form onSubmit={handleSubmit} className="register-form w-[40vw] py-3 px-8">
                <div>
                    <div className="top">
                        <div className="logo">
                            <img src="https://res.cloudinary.com/dpfqbb9pl/image/upload/v1699463224/SS1_jyhel9.png" alt="" />
                        </div>
                        <h1 className="text-center font-semibold text-4xl" style={{color: "#044194"}}>SwiftSelect</h1>
                    </div>
                    <h2 className="text-center font-semibold text-2xl">Reset password</h2>
                </div>

                <div className="gateway sm:col-span-full">
                    <img src={googleImg} alt="" />
                    <h4>Sign up with Google</h4>
                </div>
                <div className="divider">
                    <h3 style={{color: "#98A2B3"}}>OR</h3>
                </div>

                    <div className="sm:col-span-full">
                        <label htmlFor="newPassword" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                        </label>
                        <div className="mt-2 pass-input">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="newPassword"
                                id="newPassword"
                                value={formData.newPassword}
                                onChange={handleChange}
                                required
                                autoComplete="password"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            <span className="password-toggle" onClick={handleTogglePassword}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>

                    <div className="sm:col-span-full">
                        <label htmlFor="confirmNewPassword" className="block text-sm font-medium leading-6 text-gray-900">
                            Confirm Password
                        </label>
                        <div className="mt-2 pass-input">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="confirmNewPassword"
                                id="confirmNewPassword"
                                value={formData.confirmNewPassword}
                                onChange={handleChange}
                                required
                                autoComplete="confirmNewPassword"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            <span className="password-toggle" onClick={handleToggleConfirmPassword}>
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>

                    <div className="col-span-full">
                        <div className="mt-5">
                            <input
                                type="submit"
                                name="submit"
                                id="submit"
                                value="Submit"
                                className="cursor-pointer block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 my-5"
                            />
                        </div>
                    </div>

                <div className="col-span-full text-center my-3" style={{color: "#98A2B3"}}>
                    <h3>Go back to login page? <Link className="cursor-pointer" to="/login" style={{color: "#2F80ED"}}> click here</Link></h3>
                </div>
            </form>
        </div>
        </div>
    );
}