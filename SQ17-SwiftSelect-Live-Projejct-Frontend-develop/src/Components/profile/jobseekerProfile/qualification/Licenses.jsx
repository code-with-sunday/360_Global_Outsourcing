import * as React from "react";
import {useState} from "react";
import axios from "../../../../api/axios.jsx";
import {SweetAlert} from "../../../utils/SweetAlert.jsx";

export const Licenses = () => {
    const [formData, setFormData] = useState({
        licenseName: '',
        expirationDate: ''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await axios.post("/job-seeker/create-profile/license", formData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }).then(
                response => {
                    SweetAlert('success', 'Update Successful', 'Your License information has been updated successfully');
                    console.log(response.data.data)
                }
            )
        } catch (error) {
            SweetAlert('error', 'Oops', 'Something went wrong please try again');
            console.log(error.message)
        }
    }

    return(
        <form onSubmit={handleSubmit} className="flex flex-col items-stretch w-[61%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-end flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4">
                    License name
                </div>
                <input
                    type="text"
                    name="licenseName"
                    value={formData.licenseName}
                    onChange={handleChange}
                    placeholder="License Name"
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                />

                <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4 mt-5">
                    Expiration Date
                </div>
                <input
                    type="date"
                    name="expirationDate"
                    value={formData.expirationDate}
                    onChange={handleChange}
                    placeholder="Expiration Date"
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                />

                <input
                    type="submit"
                    name="submit"
                    value="Save Changes"
                    className="text-white text-base font-semibold leading-6 tracking-normal whitespace-nowrap justify-center items-stretch bg-blue-500 w-fit max-w-full mt-8 px-4 py-2 rounded-xl self-end cursor-pointer"
                />
            </div>
        </form>
    );
}