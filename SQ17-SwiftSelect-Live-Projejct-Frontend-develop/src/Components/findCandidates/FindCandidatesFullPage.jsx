import {CandidateSearch} from "./CandidateSearch.jsx";
import {AppliedCandidateCard} from "./AppliedCandidateCard.jsx";
import {JobPostFullRequirements} from "./JobPostFullRequirements.jsx";
import {AppliedCandidateCredentials} from "./AppliedCandidateCredentials.jsx";
import {useEffect, useState} from "react";
import axios from "../../api/axios.jsx";
import {JobPostCard} from "../findJobPosts/JobPostCard.jsx";
import * as React from "react";

export const FindCandidatesFullPage = () => {
    const activeStyle = {
        border: "1px solid var(--Blue-1, #2F80ED)",
        boxShadow: "0px 6px 16px 0px rgba(0, 0, 0, 0.16)"
    }

    const [initialPost, setInitialPost] = useState();

    const [selectedCandidate, setSelectedCandidate] = useState();

    const [applications, setApplications] = useState([]);


    const [jobPosts, setJobPosts] = useState([])

    useEffect(() => {
        const fetchJobPosts = async () => {
            await axios.get("/employer/job-posts", {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }).then(
                response => {
                    const fetchedData = response.data.data;

                    setJobPosts(fetchedData);
                    setInitialPost(fetchedData[0])
                    setApplications(response.data.data[0].applications)
                    setSelectedCandidate(response.data.data[0].applications.jobSeekerInfo)
                    console.log(response.data.data)
                }
            )
        }

        fetchJobPosts();

    }, []);



    const [page, setPage] = useState("main-page")

    return (
        <div className="bg-white flex flex-col items-stretch">
            <div className="self-center flex w-full max-w-[1001px] flex-col items-center mt-6 mb-16 px-5 max-md:max-w-full max-md:mb-10">

                { page === "main-page" &&
                    <div className="self-center flex w-full max-w-[1001px] flex-col items-center mt-6 mb-16 px-5 max-md:max-w-full max-md:mb-10">
                        <CandidateSearch />

                        <div className="text-black text-xl font-medium leading-7 tracking-normal self-stretch whitespace-nowrap -mr-5 mt-5 max-md:max-w-full">
                            Company’s employment opportunities
                        </div>

                        <div className="self-stretch ml-0 mr-0 mt-4 max-md:max-w-full">
                            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                <div className="flex w-[50vw] flex-col">
                                    { jobPosts.map(
                                        jobPost => (
                                            <div key={jobPost.id} id={jobPost.id} onClick={() => {
                                                setInitialPost(jobPost)
                                                setApplications(jobPost.applications)
                                            } }>
                                                <JobPostCard
                                                    customStyle={initialPost.id === jobPost.id ? activeStyle : {}}
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

                                <div className="flex flex-col items-stretch ml-5 max-md:w-full max-md:ml-0">
                                    <div className="items-stretch flex flex-col max-md:max-w-full max-md:mt-10">
                                        <div className="max-md:max-w-full">
                                            <div className=" gap-5 flex flex-wrap max-md:flex-col max-md:items-stretch max-md:gap-0 w-[50vw]">
                                                { applications.length !== 0 &&
                                                    applications.map(
                                                        application => (
                                                            <AppliedCandidateCard
                                                                key={application.id}
                                                                application={application}
                                                                handlePage={() => {
                                                                    setPage("applicant")
                                                                    setSelectedCandidate(application.jobSeekerInfo)
                                                                }}
                                                            />
                                                        )
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                { page === "full-job" &&
                    <>
                        <div className="flex flex-col items-stretch ml-5 max-md:w-full max-md:ml-0">
                            <JobPostFullRequirements/>
                        </div>
                    </>
                }

                { page === "applicant" &&
                    <>
                        <div className="flex flex-col items-stretch ml-5 max-md:w-full max-md:ml-0">
                            <AppliedCandidateCredentials
                                setPage={() => (setPage("main-page"))}
                                selectedCandidate={selectedCandidate}
                            />
                        </div>
                    </>
                }

            </div>
        </div>
    );
}


