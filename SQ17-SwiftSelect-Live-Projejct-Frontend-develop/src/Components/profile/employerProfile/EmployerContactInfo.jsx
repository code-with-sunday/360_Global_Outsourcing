import * as React from "react";
import {useState} from "react";
import axios from "../../../api/axios.jsx";
import {SweetAlert} from "../../utils/SweetAlert.jsx";
import {ClipLoader} from "react-spinners";

export const EmployerContactInfo = ({userData, setDep}) => {
    const [isVisible, setIsVisible] = useState(false);

    const [contactInfo, setContactInfo] = useState({
        firstName: `${userData.firstName}`,
        lastName: `${userData.lastName}`,
        phoneNumber: `${userData.phoneNumber}`,
        postalCode: `${userData.postalCode}`
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        const submitForm = async () => {

            try {
                setIsVisible(true);

                await axios.put("/employer/update-profile-contact-info", contactInfo, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    }
                }).then(
                    response => {
                        setIsVisible(false);

                        SweetAlert('success', 'Update Successful', 'Contact Info updated successfully', 1500);

                        console.log(response.data.message)
                        setDep();
                    }
                )
            } catch (error) {
                setIsVisible(false);

                SweetAlert('error', 'Oops!', 'Something went wrong please try again', 2000);

                console.error('Error uploading resume:', error);
            }
        }

        submitForm();
    }

    const handleChange = (e) => {
        setContactInfo({ ...contactInfo, [e.target.name]: e.target.value })
    }

    return(
        <form onSubmit={handleSubmit} className="flex flex-col items-stretch w-[61%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-end flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4">
                    Full Name
                </div>
                <input
                    type="text"
                    name="firstName"
                    placeholder=""
                    value={contactInfo.firstName}
                    onChange={handleChange}
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                />

                <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4 mt-5">
                    Last Name
                </div>
                <input
                    type="text"
                    name="lastName"
                    placeholder=""
                    value={contactInfo.lastName}
                    onChange={handleChange}
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                />

                <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4 mt-5">
                    Phone Number
                </div>
                <input
                    type="tel"
                    name="phoneNumber"
                    placeholder=""
                    value={contactInfo.phoneNumber}
                    onChange={handleChange}
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                />

                <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4 mt-5">
                    Postal Code
                </div>
                <input
                    type="tel"
                    name="postalCode"
                    placeholder=""
                    value={contactInfo.postalCode}
                    onChange={handleChange}
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                />

                <button type="submit"
                        className="text-white text-base font-semibold leading-6 tracking-normal whitespace-nowrap justify-center items-stretch bg-blue-500 w-fit max-w-full mt-8 px-4 py-2 rounded-xl self-end cursor-pointer"
                >
                    Upload Profile

                    { isVisible &&
                        <ClipLoader color="#36D7B7" loading={true} size={23}/>
                    }

                </button>
            </div>
        </form>
    );
}