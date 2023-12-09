import {JobPostSearch} from "./JobPostSearch.jsx";
import {JobSeekerTopHeader} from "../profile/profileComponents/JobSeekerTopHeader.jsx";
import {OneCompanyJobPostCard} from "./OneCompanyJobPostCard.jsx";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "../../api/axios.jsx";
import {JobPostCard} from "./JobPostCard.jsx";
import * as React from "react";

export const JobPostsForOneCompany = ({companyName}) => {

    const [details, setDetails] = useState([])

    const { id } = useParams();

    useEffect(() => {
        console.log(id)

        const formData = new FormData();
        formData.append('employerId', id);

        const fetchData = async () => {
            await axios.post("/job-seeker/employer", formData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }).then(
                response => {
                    setDetails(response.data.data)
                    console.log(response.data.data[0])
                }
            )
        }
        fetchData();
    }, []);

    return (
        <div className="items-stretch flex flex-col mb-15 max-w-[1000px] mx-auto">

            <Link to={"/jobseeker-page"} className="sticky top-[1rem] cursor-pointer justify-between rounded-xl bg-emerald-100 flex gap-2 px-2.5 py-4 items-start">
                <div className="text-green-500 text-xs leading-4 tracking-normal self-stretch grow whitespace-nowrap">
                    Go Back to Main Page
                </div>
            </Link>

            <div className="items-stretch shadow-xl bg-white sticky top-[4.5rem] self-stretch flex flex-col p-6 rounded-xl border-[0.5px] border-solid max-md:max-w-full max-md:px-5">
                <div className="items-start flex grow basis-[0%] flex-col px-5">
                    <img
                        loading="lazy"
                        src={details[0]?.logo}
                        className="aspect-[2.97] object-contain object-left w-52 overflow-hidden -mr-5"
                    />
                    <div className="text-gray-900 text-2xl font-bold leading-6 tracking-normal self-stretch whitespace-nowrap -mr-5">
                        {details[0]?.companyName}
                    </div>
                </div>
            </div>

            <div className="mt-[7rem] text-zinc-500 text-sm leading-5 tracking-normal w-full mt-6 max-md:max-w-full px-5">
                There are {details?.length} {details[0]?.companyName} jobs available. You can check out other available
                jobs below.
            </div>

            <div className="w-full mt-6 mb-10 max-md:max-w-full max-md:pr-5">
                <div className="mx-auto flex justify-between p-[1.25rem] flex-wrap max-md:flex-col max-md:items-stretch max-md:gap-0">
                    { details.map(
                        jobPost => (

                            <div key={jobPost.id} id={jobPost.id}>
                                <JobPostCard
                                    companyId={jobPost.companyId}
                                    companyName={jobPost.companyName}
                                    jobTitle={jobPost.title}
                                    logo={jobPost.logo}
                                    priceRange={`₦${jobPost.minimumPay} - ₦${jobPost.maximumPay} / 
                                                                        ${jobPost.payRate === "PER_HOUR" ? "Per Hour" :
                                        jobPost.payRate === "PER_WEEK" ? "Per Week" :
                                            jobPost.payRate === "PER_MONTH" ? "Per Month" :
                                                jobPost.payRate === "PER_YEAR" ? "Per Year" : "" } `}
                                    jobDescription={jobPost.description}
                                    jobType={jobPost.jobType}
                                    state={jobPost.state}
                                    country={jobPost.country}
                                />
                            </div>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    );
}


