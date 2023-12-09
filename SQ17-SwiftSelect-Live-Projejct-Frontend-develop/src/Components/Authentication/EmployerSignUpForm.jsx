import * as React from "react";
import "../../App.css"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {useEffect, useState} from "react";
import axios from "../../api/axios.jsx";
import {Link, useNavigate} from "react-router-dom";
import {ClipLoader} from "react-spinners";
import {SweetAlert} from "../utils/SweetAlert.jsx";

export const EmployerSignUpForm = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        // Fetch countries from the endpoint
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {

                // Extract country names from the response
                const countryNames = data.map(country => country.name.common);

                setCountries(countryNames.sort());
            })
            .catch(error => console.error('Error fetching countries:', error));
    }, []);

    const [clip, setClip] = useState(false);

    const [blur, setBlur] = useState("");

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        companyDescription: '',
        industry:'',
        companyType:'',
        address:'',
        country: '',
        city:'',
        state:'',
        companyName:''
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

    const chatReg = async (e) => {
        e.preventDefault()

        await axios.post("/chat/signup", formData)
            .then(result => console.log({...result.data}))
            .catch(e => console.log(JSON.stringify(e.response.data)))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setClip(true);
            setBlur("opacity-[0.2]");

            // Make API call to your Java backend to handle user registration
            await axios.post('/auth/employer/register', formData)
                .then(result => {
                    SweetAlert('success', 'Registration Successful', 'Your Registration is Successful, Please proceed to confirm your Email', 3000);

                    setTimeout(() => {
                        setClip(false);

                        setBlur("");
                        navigate("/login")
                    }, 3000)

                    chatReg(e)

                    // Handle success (redirect, show message, etc.)
                    console.log(result.data);
                });

        } catch (error) {
            setClip(false);

            SweetAlert('error', 'Oops!', 'Something went wrong, Please check your inputs and try again', 3000);

            setTimeout(() => {
                setBlur("");
            }, 3000)


            // Handle error (display error message, log, etc.)
            console.error('Registration failed:', error.message);
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

            { clip &&
                <ClipLoader color="#36D7B7" loading={true} size={100} className="absolute right-[46.5vw] top-[44vh]" />
            }

            <div className={`register-cont ${blur}`}>

                <form  onSubmit={handleSubmit} className="register-form py-[2rem] my-[3rem]">
                    <div>
                        <div className="top">
                            <div className="logo">
                                <img src="https://res.cloudinary.com/dpfqbb9pl/image/upload/v1699463224/SS1_jyhel9.png" alt="" />
                            </div>
                            <h1 className="text-center font-semibold text-4xl" style={{color: "#044194"}}>SwiftSelect</h1>
                        </div>
                        <h2 className="text-center font-semibold text-2xl">Employer Register</h2>
                    </div>

                    <div className="gateway sm:col-span-full">
                        <img src={googleImg} alt="" />
                        <h4>Sign up with Google</h4>
                    </div>
                    <div className="divider">
                        <h3 style={{color: "#98A2B3"}}>OR</h3>
                    </div>

                    <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-6 w-[80vh]">
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                First name
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Last name
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    id="last-name"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>



                        <div className="sm:col-span-3">
                            <label htmlFor="company-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Company name
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    id="company-name"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
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

                        <div className="sm:col-span-3">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                                Confirm Password
                            </label>
                            <div className="mt-1 pass-input">
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <span className="password-toggle" onClick={handleToggleConfirmPassword}>
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="company-description" className="block text-sm font-medium leading-6 text-gray-900">
                                Company Description
                            </label>
                            <div className="mt-1">
                                <textarea
                                    name="companyDescription"
                                    id="company-description"
                                    value={formData.companyDescription}
                                    onChange={handleChange}
                                    autoComplete="street-address"
                                    className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                ></textarea>
                            </div>
                        </div>




                        <div className="sm:col-span-2 sm:col-start-1">
                            <label htmlFor="tel" className="block text-sm font-medium leading-6 text-gray-900">
                                Phone Number
                            </label>
                            <div className="mt-1">
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    id="tel"
                                    autoComplete="address-level2"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="industry" className="block text-sm font-medium leading-6 text-gray-900">
                                Industry
                            </label>

                            <div className="mt-1">
                                <select
                                    id="industry"
                                    name="industry"
                                    value={formData.industry}
                                    onChange={handleChange}
                                    className="select-tab block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option value="" selected disabled></option>
                                    <option value="ACCOUNTING">ACCOUNTING</option>
                                    <option value="ADMIN">ADMIN</option>
                                    <option value="BUILDING_AND_ARCHITECTURE">BUILDING & ARCHITECTURE</option>
                                </select>
                            </div>

                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="company-type" className="block text-sm font-medium leading-6 text-gray-900">
                                Company Type
                            </label>
                            <div className="mt-1">
                                <select
                                    id="company-type"
                                    name="companyType"
                                    value={formData.companyType}
                                    onChange={handleChange}
                                    className="select-tab block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >

                                    <option selected disabled></option>
                                    <option value="PRIVATE">PRIVATE</option>
                                    <option value="PUBLIC">PUBLIC</option>
                                    <option value="NON_PROFIT">NON_PROFIT</option>
                                </select>
                            </div>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Country
                            </label>
                            <div className="mt-1">
                                <select
                                    id="country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    autoComplete="country-name"
                                    required
                                    className="select-tab block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option value="" disabled> Select a country </option>

                                    { countries.map( country => (
                                        <option key={ country } value={ country } style={{backgroundColor: "white"}}>
                                            { country }
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                City
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    id="city"
                                    autoComplete="address-level2"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                State
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    id="state"
                                    autoComplete="address-level1"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                                Address
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    id="address"
                                    autoComplete="street-address"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <div className="mt-5">
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
                            <h3>Already have an account? <a href="#" style={{color: "#2F80ED"}}> Log in here</a></h3>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}