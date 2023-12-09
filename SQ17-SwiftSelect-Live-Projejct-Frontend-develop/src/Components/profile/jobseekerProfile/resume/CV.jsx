import {Panel} from "../../profileComponents/Panel.jsx";
import {useState} from "react";
import {Resume} from "./Resume.jsx";
import {CoverLetter} from "./CoverLetter.jsx";

export const CV = ({setDep, userData}) => {
    const [page, setPage] = useState("resume")

    let icon1 = "https://cdn.builder.io/api/v1/image/assets/TEMP/1f2e9a1e-af44-4b6b-ba65-ef4e19f2f411?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"
    let icon2 = "https://cdn.builder.io/api/v1/image/assets/TEMP/71c15d98-4b5b-4ce4-9e9c-d616daa08e75?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"
    let icon3 = "https://cdn.builder.io/api/v1/image/assets/TEMP/3365f5ea-4302-4637-a814-f51b2e4a1386?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"
    let icon4 = "https://cdn.builder.io/api/v1/image/assets/TEMP/f75d8121-9951-4b34-90a5-d2bffb6a6968?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"

    return(
        <div>
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0">
                    <div className="items-stretch flex flex-col px-2 py-1 max-md:mt-10">
                        <Panel
                            btnName="Resume"
                            handleClick={() => { setPage("resume") } }
                            fontColor={ page === "resume" ? "text-blue-500" : "text-black-500" }
                            imgDis={ page === "resume" ? icon2 : icon1 }
                        />

                        <hr className="max-w-[322px] my-2"/>

                        <Panel
                            btnName="Cover Letter"
                            handleClick={() => { setPage("coverLetter") } }
                            fontColor={ page === "coverLetter" ? "text-blue-500" : "text-black-500" }
                            imgDis={ page === "coverLetter" ? icon4 : icon3 }
                        />
                    </div>
                </div>

                { page === "resume" && <Resume setDep={setDep} userData={userData} /> }
                { page === "coverLetter" && <CoverLetter setDep={setDep} userData={userData} /> }

            </div>
        </div>
    )
}