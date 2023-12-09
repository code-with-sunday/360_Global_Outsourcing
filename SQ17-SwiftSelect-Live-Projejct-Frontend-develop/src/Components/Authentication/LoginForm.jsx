import * as React from "react";
import "../../App.css"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {useState} from "react";
import axios from "../../api/axios.jsx";
import {Link, useNavigate} from "react-router-dom";
import {ClipLoader} from "react-spinners";
import {SweetAlert} from "../utils/SweetAlert.jsx";

export const LoginForm = ({onAuth}) => {
    const [verified, setVerified] = useState(true)

    const [resendSuccess, setResendSuccess] = useState(false);

    const [clip, setClip] = useState(false);

    const [blur, setBlur] = useState("");

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!verified && !resendSuccess) {
            return;
        }

        try {
            setClip(true);
            setBlur("opacity-[0.2]");

            // Make API call to your Java backend to handle user registration
            await axios.post('/auth/login', formData)
                .then(result => {


                    if (result.data.message === "notVerified") {
                        setTimeout(() => {
                            setClip(false)
                            setBlur("");
                            setVerified(false);
                        }, 500)

                        return
                    }


                    console.log('User login successful!');

                    localStorage.setItem("token", result.data.data.accessToken);
                    localStorage.setItem("firstname", result.data.data.firstName);
                    localStorage.setItem("lastname", result.data.data.lastName);
                    localStorage.setItem("email", result.data.data.email);
                    localStorage.setItem("profilePicture", result.data.data.profilePicture);
                    localStorage.setItem("role", result.data.data.role);

                    setClip(false);

                    SweetAlert('success', 'Login Success', 'You have logged in successfully');

                    setTimeout(() => {
                        setBlur("");

                        result.data.data.role === "EMPLOYER" ?
                            navigate("/employer-page") :
                            navigate("/jobseeker-page");

                    }, 1000)
                });
        } catch (error) {
            setClip(false);

            SweetAlert('error', 'Incorrect Details', 'Email or password incorrect', 2000);

            setTimeout(() => {
                setBlur("");
            }, 2000)

            // Handle error (display error message, log, etc.)
            console.error('login failed:', error.message);
        }
    };

    const handleResendVerification = async () => {
        try {
            await axios.post('/auth/resend-verification-email', { email: formData.email });
            setResendSuccess(true);
            setVerified(true);

            setTimeout(() => {
                setResendSuccess(false);
            }, 3000);
        } catch (error) {
            console.error('Error resending verification email:', error.message);
        }
    };

    let googleImg="src/assets/Google.svg";

    return (
        <div>
            <Link to="/" className="fixed bg-black top-[3rem] right-[1rem] cursor-pointer hover:bg-blue-500 justify-between items-stretch border-[color:var(--blue-600,#2563EB)] self-stretch flex gap-4 pl-7 pr-3 py-3 rounded-lg border-2 border-solid max-md:pl-5 my-auto max-h-[3rem]">
                <div className="text-white text-base font-medium leading-6 tracking-wide">
                    Back to Home
                </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5062df1f-67ac-469a-801d-d6350c5b260d?"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                />
            </Link>

            <Link to="/employer-signup" className="fixed bg-black top-[7rem] right-[1rem] cursor-pointer hover:bg-blue-500 justify-between items-stretch border-[color:var(--blue-600,#2563EB)] self-stretch flex gap-4 pl-7 pr-3 py-3 rounded-lg border-2 border-solid max-md:pl-5 my-auto max-h-[3rem]">
                <div className="text-white text-base font-medium leading-6 tracking-wide">
                    Employer Register
                </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5062df1f-67ac-469a-801d-d6350c5b260d?"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                />
            </Link>

            <Link to="/jobseeker-signup" className="fixed bg-black top-[11rem] right-[1rem] cursor-pointer hover:bg-blue-500 justify-between items-stretch border-[color:var(--blue-600,#2563EB)] self-stretch flex gap-4 pl-7 pr-3 py-3 rounded-lg border-2 border-solid max-md:pl-5 my-auto max-h-[3rem]">
                <div className="text-white text-base font-medium leading-6 tracking-wide">
                    Job Seeker Register
                </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5062df1f-67ac-469a-801d-d6350c5b260d?"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                />
            </Link>

            { clip &&
                <ClipLoader color="#36D7B7" loading={true} size={100} className="absolute right-[46.5vw] top-[44vh]" />
            }

            <div className={`register-cont ${blur}`}>

                <form onSubmit={handleSubmit} className="register-form w-[40vw] py-3 px-8">
                    <div>
                        <div className="top">
                            <div className="logo">
                                <img src="https://res.cloudinary.com/dpfqbb9pl/image/upload/v1699463224/SS1_jyhel9.png" alt="" />
                            </div>
                            <h1 className="text-center font-semibold text-4xl" style={{color: "#044194"}}>SwiftSelect</h1>
                        </div>
                        <h2 className="text-center font-semibold text-2xl">Welcome back to SwiftSelect</h2>
                    </div>

                    { !verified && !resendSuccess && (
                        <div className="w-full bg-red-500 p-4 rounded text-white mt-2">
                            <p className="text-center">
                                Your Account has not been verified, please visit your email to proceed.
                            </p>
                            <div className="flex justify-between items-center mt-2">
                                <p>Didn't Get the Mail? </p>
                                <button
                                    onClick={handleResendVerification}
                                    className="rounded p-2 bg-blue-800">
                                    Resend Verification Mail
                                </button>
                            </div>
                        </div>
                    )}

                    {resendSuccess && (
                        <div className="w-full bg-green-500 p-4 rounded text-white mt-2">
                            <p className="text-center">Verification mail successfully resent</p>
                        </div>
                    )}

                    <div className="gateway sm:col-span-full">
                        <img src={googleImg} alt="" />
                        <h4>Sign in with Google</h4>
                    </div>
                    <div className="divider">
                        <h3 style={{color: "#98A2B3"}}>OR</h3>
                    </div>

                        <div className="sm:col-span-full">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-full">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="mt-1 pass-input">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <span className="password-toggle" onClick={handleTogglePassword}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>


                        <div className="col-span-full mt-2" style={{color: "#98A2B3"}}>
                            <h3><Link to="/forgot-password" style={{color: "#2F80ED"}}> Forgot password? </Link></h3>
                        </div>

                        <div className="col-span-full">
                            <div className="mt-7">
                                <input
                                    type="submit"
                                    name="submit"
                                    id="submit"
                                    value="Submit"
                                    className="cursor-pointer block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="col-span-full text-center mt-2" style={{color: "#98A2B3"}}>
                            <h3>Don't have an account? <Link to="/jobseeker-signup" style={{color: "#2F80ED"}}> Sign up here</Link></h3>
                        </div>
                </form>
            </div>
        </div>
    );
}