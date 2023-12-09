import * as React from "react";
import {useState} from "react";
import axios from "../../../../api/axios.jsx";
import {SweetAlert} from "../../../utils/SweetAlert.jsx";

export const Skills = () => {
    const [formData, setFormData] = useState({
        skill: '',
        yearsOfExperience: ''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await axios.post("/job-seeker/create-profile/skill", formData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }).then(
                response => {
                    SweetAlert('success', 'Update Successful', 'Your Skills information has been updated successfully');
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
                    Skill
                </div>
                <input
                    type="text"
                    name="skill"
                    value={formData.skill}
                    onChange={handleChange}
                    placeholder="Skill Name"
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                />

                <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4 mt-5">
                    Years of Experience
                </div>
                <select
                    name="yearsOfExperience"
                    value={formData.yearsOfExperience}
                    onChange={handleChange}
                    placeholder="Years of Experience"
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                >
                    <option value="NO_EXPERIENCE">No Experience</option>
                    <option value="LESS_THAN_ONE_YEAR">Less than 1 Year</option>
                    <option value="ONE_TO_THREE_YEARS">1 - 3 Years</option>
                    <option value="FOUR_TO_SIX_YEARS">4 - 6 Years</option>
                    <option value="SEVEN_TO_NINE_YEARS">7 - 9 Years</option>
                    <option value="MORE_THAN_TEN_YEARS">10 + Years</option>
                </select>

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