import * as React from "react";
import {useState} from "react";
import axios from "../../../../api/axios.jsx";
import {SweetAlert} from "../../../utils/SweetAlert.jsx";

export const Languages = () => {
    const [formData, setFormData] = useState({
        language: '',
        proficiency: ''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await axios.post("/job-seeker/create-profile/language", formData, {
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
                    Language
                </div>
                <input
                    type="text"
                    name="language"
                    id="floating_outlined"
                    value={formData.language}
                    onChange={handleChange}
                    placeholder="Language"
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                />

                <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4 mt-5">
                    Proficiency
                </div>
                <input
                    type="range"
                    name="proficiency"
                    value={formData.proficiency}
                    onChange={handleChange}
                    placeholder="Proficiency"
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                />
                <div className="flex justify-between w-full">
                    <span className="text-[#ED3833]">0%</span>
                    <span className="text-[#ED3833]">10%</span>
                    <span className="text-[#ED4934]">20%</span>
                    <span className="text-[#EF6537]">30%</span>
                    <span className="text-[#F4A240]">40%</span>
                    <span className="text-[#FACE48]">50%</span>
                    <span className="text-[#EFF74F]">60%</span>
                    <span className="text-[#9BF443]">70%</span>
                    <span className="text-[#73F340]">80%</span>
                    <span className="text-[#73F340]">90%</span>
                    <span className="text-[#73F340]">100%</span>
                </div>

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