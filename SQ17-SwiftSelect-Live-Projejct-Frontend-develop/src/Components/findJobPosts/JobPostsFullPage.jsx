import {SortJobPosts} from "./SortJobPosts.jsx";
import {JobPostCard} from "./JobPostCard.jsx";
import {useEffect, useState} from "react";
import {JobPostHalfDisplay} from "./JobPostHalfDisplay.jsx";
import {JobPostSearch} from "./JobPostSearch.jsx";
import axios from "../../api/axios.jsx";
import {ReviewApplication} from "../JobApplication/ReviewApplication.jsx";
import {ReportDetails} from "../utils/ReportDetails.jsx";
import * as React from "react";

export const JobPostsFullPage = ({handleFindJobsOneCompany, userData}) => {
    const activeStyle = {
        border: "1px solid var(--Blue-1, #2F80ED)",
        boxShadow: "0px 6px 16px 0px rgba(0, 0, 0, 0.16)"
    }

    const [seeMore, setSeeMore] = useState(false)

    const [apply, setApply] = useState(false)

    const [jobPosts, setJobPosts] = useState([])

    const [blackBackDrop, setBlackBackDrop] = useState(false)

    const [initialPost, setInitialPost] = useState(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/job-post", {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    }
                });

                return response.data.data.content[0];
            } catch (error) {
                console.error('Error fetching data:', error);
                return null;
            }
        };

        // Call the fetch function and return the Promise
        return fetchData();
    });


    useEffect(() => {
        const fetchJobPosts = async () => {
            await axios.get("/job-post", {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }).then(
                response => {
                    const fetchedData = response.data.data.content;

                    setJobPosts(fetchedData);
                    setInitialPost(fetchedData[0])
                    console.log(response.data.data)
                }
            )
        }

        fetchJobPosts();

    }, []);

    const handleApplyCard = () => {
        setApply(!apply)
    }

    const handleSeeMore = () => {
        setSeeMore(!seeMore);
    }

    const handleBlackBackDrop = () => {
        setBlackBackDrop(!blackBackDrop)
    }
    return (
        <div>

            { apply &&
                <div className="w-[100vw] h-[100vh] flex justify-center items-center absolute z-[3]">
                    <ReviewApplication
                        userData={userData}
                        selectedJobPost={initialPost}
                        apply={handleApplyCard}
                    />
                </div>
            }

            { apply &&
                <div className="bg-black flex justify-center w-[100vw] h-[100%] items-center absolute z-[2] opacity-[0.8]">
                </div>
            }

            <div className="bg-white flex flex-col items-stretch mb-15"
                 style={ apply ? {inset: 0, overflow: "hidden", height: "100vh"} : {}}
            >

                <div className="self-center flex w-[781px] max-w-full flex-col mt-6 px-5">

                    <JobPostSearch />

                    {!seeMore &&
                        <div className="text-black text-xl font-medium leading-7 tracking-normal self-stretch whitespace-nowrap -mr-5 mt-5 max-md:max-w-full">
                            Suggested employment opportunities
                        </div>
                    }

                </div>
                <div className="self-center flex w-full max-w-[1277px] justify-between gap-5 mt-3.5 max-md:max-w-full max-md:flex-wrap">

                    {!seeMore &&
                        <SortJobPosts />
                    }

                    <div className="self-stretch max-md:max-w-full mx-auto">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">

                            {!seeMore &&
                                <div className="flex flex-col items-stretch w-[60%] max-md:w-full max-md:ml-0">
                                    <div className="items-stretch flex grow flex-col max-md:mt-10">
                                        { jobPosts.map(
                                            jobPost => (
                                                <div key={jobPost.id} id={jobPost.id} onClick={() => (setInitialPost(jobPost)) }>
                                                    <JobPostCard
                                                        companyId={jobPost.companyId}
                                                        customStyle={initialPost.id === jobPost.id ? activeStyle : {}}
                                                        handleFindJobsOneCompany={handleFindJobsOneCompany}
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
                            }

                            <>
                                {jobPosts.length !== 0 &&
                                    <div className="sticky top-[6rem] flex flex-col items-stretch ml-5 max-md:w-full max-md:ml-0">
                                        <JobPostHalfDisplay
                                            selectedJobPost={initialPost}
                                            handleFindJobsOneCompany={handleFindJobsOneCompany}
                                            handleSeeMore={handleSeeMore}
                                            seeMore={seeMore}
                                            apply={handleApplyCard}
                                            handleBackDrop={handleBlackBackDrop}
                                        />
                                    </div>
                                }
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


