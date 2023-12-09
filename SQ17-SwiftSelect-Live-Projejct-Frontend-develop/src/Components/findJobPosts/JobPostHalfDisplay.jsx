import {useEffect, useState} from "react";
import {Report} from "../utils/Report.jsx";
import * as React from "react";
import {ReportDetails} from "../utils/ReportDetails.jsx";

export const JobPostHalfDisplay = ({handleSeeMore, handleFindJobsOneCompany, seeMore, selectedJobPost, apply, handleBackDrop}) => {
    const [report, setReport] = useState(false)
    const [reportDetails, setReportDetails] = useState(false)

    const onDotClick = () => {
        setReport(!report);
    }

    const handleReportDetails = () => {
        setReportDetails(!reportDetails)
    }

    return(
        <div className="sticky top-[6rem] min-w-[43vw] items-start flex flex-col max-md:max-w-full max-md:mt-10 max-w-[1000px] mx-auto" style={{width: `${!seeMore ? '43vw' : '70vw'}`}}>
            <div className="items-stretch border-[color:var(--Gray-3,#828282)] self-stretch flex flex-col p-6 rounded-xl border-[0.5px] border-solid max-md:max-w-full max-md:px-5">
                <div className="justify-between items-stretch flex gap-5 max-md:max-w-full max-md:flex-wrap">
                    <img
                        loading="lazy"
                        src={`${selectedJobPost.logo}`}
                        className="aspect-square object-contain object-center w-[58px] overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="relative">
                        <img
                            onClick={onDotClick}
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/aafd5caf-bba5-4f9b-add8-df4c125ab503?"
                            className="cursor-pointer aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                        />

                        { report &&
                            <Report
                            handleReportDetails={handleReportDetails}
                            handleBackDrop={handleBackDrop}
                            />
                        }

                        { reportDetails &&
                            <div style={{zIndex: 10}}>
                                <ReportDetails
                                    bgColor={"bg-black"}
                                    handleReportDetails={handleReportDetails}
                                    selectedJobPost={selectedJobPost}
                                />
                            </div>
                        }

                    </div>
                </div>
                <div onClick={handleFindJobsOneCompany} className="hover:text-blue-500 cursor-pointer text-black text-base leading-6 tracking-normal whitespace-nowrap mt-3 self-start">
                    {selectedJobPost.companyName}
                </div>
                <div className="text-black text-xl font-semibold leading-7 tracking-normal whitespace-nowrap mt-2 self-start">
                    {selectedJobPost.title}
                </div>
                <div className="text-blue-500 text-lg font-medium leading-6 tracking-normal whitespace-nowrap mt-3 max-md:max-w-full">
                    {`₦${selectedJobPost.minimumPay} - ₦${selectedJobPost.maximumPay} / ${selectedJobPost.payRate === "PER_HOUR" ? "Per Hour" :
                        selectedJobPost.payRate === "PER_WEEK" ? "Per Week" :
                            selectedJobPost.payRate === "PER_MONTH" ? "Per Month" :
                                selectedJobPost.payRate === "PER_YEAR" ? "Per Year" : ""}`}
                </div>
                <div className="text-black text-base leading-6 tracking-normal whitespace-nowrap mt-3 max-md:max-w-full">
                    {selectedJobPost.location}
                </div>

                <button onClick={apply} className="text-white text-base font-semibold leading-6 tracking-normal whitespace-nowrap bg-blue-500 w-[115px] max-w-full mt-3 px-4 py-2 rounded-xl self-start">
                    Apply now
                </button>

            </div>
            <div className="mt-4 text-black text-lg font-medium leading-6 tracking-normal uppercase whitespace-nowrap max-md:max-w-full">
                <b>Job Description{" "}</b>
            </div>
            <div className="text-black text-base font-medium leading-6 tracking-normal mt-3.5 max-md:max-w-full">
                {selectedJobPost.description}
            </div>
            <div className="mt-4 text-black text-lg font-medium leading-6 tracking-normal uppercase whitespace-nowrap mt-3.5 max-md:max-w-full">
                <b>Responsibilities</b>
            </div>
            <div className="px-4 text-black text-base font-medium leading-6 tracking-normal mt-3.5 max-md:max-w-full">
                <ul>
                    { selectedJobPost.responsibilities.map(
                        responsibility => (
                            <li key={responsibility.id}>{responsibility.responsibility}</li>
                        )
                    ) }
                </ul>
            </div>
            { seeMore &&
                <>
                    <div className="mt-4 text-black text-lg font-medium leading-6 tracking-normal uppercase mt-5 w-full max-md:max-w-full">
                        <b>Qualifications</b>
                    </div>
                    <div className="px-4 text-black text-lg font-medium leading-6 tracking-normal w-full mt-3.5 max-md:max-w-full">
                        <ul>
                            { selectedJobPost.qualifications.map(
                                qualification => (
                                    <li key={qualification.id}>{qualification.qualifications}</li>
                                )
                            ) }
                        </ul>
                    </div>

                    <div className="mt-4 text-black text-lg font-medium leading-6 tracking-normal uppercase mt-5 w-full max-md:max-w-full">
                        <b>Nice to have</b>
                    </div>
                    <div className="px-4 text-black text-lg font-medium leading-6 tracking-normal w-full mt-3.5 max-md:max-w-full">
                        <ul>
                            { selectedJobPost.niceToHave.map(
                                nice2have => (
                                    <li key={nice2have.id}>{nice2have.niceToHave}</li>
                                )
                            ) }
                        </ul>
                    </div>
                </>
            }

            <div onClick={handleSeeMore} className="cursor-pointer text-blue-500 text-base font-medium leading-6 tracking-normal whitespace-nowrap mt-2 mb-10 self-end">
                {" "}

                { !seeMore ? "See more" : "See less" } &gt;&gt;&gt;

            </div>
        </div>
    )
}