import * as React from "react";
import axios from "../../api/axios.jsx";
import {useState} from "react";
import {SweetAlert} from "./SweetAlert.jsx";
import {ClipLoader} from "react-spinners";

export const ReportDetails = ({handleReportDetails, selectedJobPost}) => {
    const [formData, setFormData] = useState({
        jobId: `${selectedJobPost.id}`,
        comment: '',
        reportCategory: ''
    })

    const [isVisible, setIsVisible] = useState(false);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleReport = async (e) => {
        e.preventDefault()
        console.log(formData)
        setIsVisible(true);

        try {
            await axios.post("/job-seeker/report", formData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }).then(
                response => {
                    setIsVisible(false);
                    SweetAlert('success', 'Report Made', 'Report submitted successfully');
                    console.log(response.data.message)
                }
            )
        } catch (error) {
            setIsVisible(false);
            SweetAlert('error', 'Oops!', 'Something went wrong please try again', 2000);
            console.log(error.message)
        }

        handleReportDetails();
    }

    return(
        <form onSubmit={handleReport} className="shadow-lg" style={{zIndex: 5}}>

            <div className="absolute right-[17.5vw] flex justify-center">
                <div className="absolute justify-center items-center bg-gray-200 flex flex-col gap-3 px-8 rounded-2xl max-md:px-5 max-w-[33rem] max-h-[26rem]">
                    <div className="text-blue-500 text-center text-2xl font-medium leading-8 w-[380px] max-w-[380px] mt-8">
                        Report Details
                    </div>

                    <div className="relative top-5 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4 mt-5">
                        Comment
                    </div>
                    <input
                        type="text"
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                        placeholder="Report Comment"
                        className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                    />

                    <div className="relative top-5 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4">
                        Report Category
                    </div>
                    <select
                        name="reportCategory"
                        value={formData.reportCategory}
                        onChange={handleChange}
                        required
                        className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                    >
                        <option value="" selected disabled></option>
                        <option value="FRAUDULENT">Fraudulent</option>
                        <option value="OFFENSIVE">Offensive</option>
                        <option value="JOB_IS_NO_LONGER_AVAILABLE">Job is no longer available</option>
                        <option value="ADVERTISER_ASKED_FOR_MONEY">Advertiser asked for money</option>
                    </select>


                    <div className="flex justify-between w-full">
                        <button onClick={handleReportDetails} className="h-fit text-gray-50 text-base font-semibold leading-4 whitespace-nowrap justify-center items-center bg-blue-500 self-stretch my-8 px-5 py-3 rounded-xl max-md:max-w-full">
                            Cancel
                        </button>
                        <div className="flex gap-2 h-fit">
                            <button type={"submit"}
                                    className="relative flex my-8 gap-3 items-center text-white text-base font-semibold leading-6 tracking-normal whitespace-nowrap mx-auto justify-center items-stretch bg-blue-500 w-fit max-w-full px-8 py-2 rounded-xl self-end cursor-pointer"
                            >
                                Submit Report

                                { isVisible &&
                                    <ClipLoader color="#36D7B7" loading={true} size={23}/>
                                }

                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </form>
    )
}