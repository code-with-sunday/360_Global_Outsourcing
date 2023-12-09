import {Panel} from "../../profileComponents/Panel.jsx";
import {JobTitle} from "./JobTitle.jsx";
import {useState} from "react";
import "../../../../App.css"

export const JobPreference = () => {
    const [page, setPage] = useState("jobTitle")

    let icon1 = "https://cdn.builder.io/api/v1/image/assets/TEMP/23be1973-452f-4c5b-9d8b-6cdf9d0850f0?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"
    let icon2 = "https://cdn.builder.io/api/v1/image/assets/TEMP/bb11b098-a728-4350-8412-2beaf69cf273?"

    return (
        <div>
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0">
                    <div className="items-stretch flex flex-col px-2 py-1 max-md:mt-10">
                        <Panel
                            btnName="Job Title"
                            handleClick={() => {setPage("jobTitle")}}
                            fontColor={ page === "jobTitle" ? "text-blue-500" : "text-black-500" }
                            imgDis={ page === "jobTitle" ? icon2 : icon1}
                        />

                        <hr className="max-w-[322px] my-2"/>
                    </div>
                </div>

                { page === "jobTitle" && <JobTitle/> }

            </div>
        </div>
    )
}