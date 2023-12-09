import {Panel} from "../../profileComponents/Panel.jsx";
import {useState} from "react";
import {WorkExperience} from "./WorkExperience.jsx";
import {Education} from "./Education.jsx";
import {Skills} from "./Skills.jsx";
import {Licenses} from "./Licenses.jsx";
import {Certifications} from "./Certifications.jsx";
import {Languages} from "./Languages.jsx";

export const Qualification = ({userData}) => {
    const [page, setPage] = useState("workExperience")

    let icon1 = "https://cdn.builder.io/api/v1/image/assets/TEMP/f5172a27-1a8b-4df7-8986-f48ab6489ff4?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"
    let icon2 = "https://cdn.builder.io/api/v1/image/assets/TEMP/2f2a1bb7-a595-41d7-bbcb-449d79e3cf29?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"
    let icon3 = "https://cdn.builder.io/api/v1/image/assets/TEMP/bc50a5b2-b491-485a-b314-de4a5a0e2281?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"
    let icon4 = "https://cdn.builder.io/api/v1/image/assets/TEMP/12237c20-970b-479c-a43a-f6f1fb0ac765?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"
    let icon5 = "https://cdn.builder.io/api/v1/image/assets/TEMP/39af4e7c-d120-47ac-9126-bacf46c442ea?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"
    let icon6 = "https://cdn.builder.io/api/v1/image/assets/TEMP/cf34036f-28bc-4b99-8a04-6d0550a986c6?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"
    let icon7 = "https://cdn.builder.io/api/v1/image/assets/TEMP/eeb3d478-7721-4554-828d-71a20fe64dad?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"
    let icon8 = "https://cdn.builder.io/api/v1/image/assets/TEMP/02172615-0ec1-4e03-8f3e-42fbc4f7a7dd?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"
    let icon9 = "https://cdn.builder.io/api/v1/image/assets/TEMP/0685ba42-c92b-46ff-b536-f1575337131f?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"
    let icon10 = "https://cdn.builder.io/api/v1/image/assets/TEMP/fc458a41-e41c-46f7-81b3-02331d7ba0dd?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"
    let icon11 = "https://cdn.builder.io/api/v1/image/assets/TEMP/f17c07f4-5eac-46f5-8d6b-926808c20abd?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"
    let icon12 = "https://cdn.builder.io/api/v1/image/assets/TEMP/0b454484-3585-4a1e-8393-b94f52640385?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"


    return (
        <div>
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0">
                    <div className="items-stretch flex flex-col px-2 py-1 max-md:mt-10">
                        <Panel
                            btnName="Work Experience"
                            handleClick={() => {setPage("workExperience")}}
                            fontColor={ page === "workExperience" ? "text-blue-500" : "text-black-500" }
                            imgDis={ page === "workExperience" ? icon2 : icon1}
                        />

                        <hr className="max-w-[322px] my-2"/>

                        <Panel
                            btnName="Education"
                            handleClick={() => {setPage("education")}}
                            fontColor={ page === "education" ? "text-blue-500" : "text-black-500"}
                            imgDis={ page === "education" ? icon4 : icon3}
                        />

                        <hr className="max-w-[322px] my-2"/>

                        <Panel
                            btnName="Skills"
                            handleClick={() => {setPage("skills")}}
                            fontColor={ page === "skills" ? "text-blue-500" : "text-black-500"}
                            imgDis={ page === "skills" ? icon6 : icon5}
                        />

                        <hr className="max-w-[322px] my-2"/>

                        <Panel
                            btnName="Licenses"
                            handleClick={() => {setPage("licenses")}}
                            fontColor={ page === "licenses" ? "text-blue-500" : "text-black-500"}
                            imgDis={ page === "licenses" ? icon8 : icon7}
                        />

                        <hr className="max-w-[322px] my-2"/>

                        <Panel
                            btnName="Certifications"
                            handleClick={() => {setPage("certifications")}}
                            fontColor={ page === "certifications" ? "text-blue-500" : "text-black-500"}
                            imgDis={ page === "certifications" ? icon10 : icon9}
                        />

                        <hr className="max-w-[322px] my-2"/>

                        <Panel
                            btnName="Languages"
                            handleClick={() => {setPage("languages")}}
                            fontColor={ page === "languages" ? "text-blue-500" : "text-black-500"}
                            imgDis={ page === "languages" ? icon12 : icon11}
                        />
                    </div>
                </div>

                { page === "workExperience" && <WorkExperience userData={userData} /> }
                { page === "education" && <Education userData={userData} /> }
                { page === "skills" && <Skills userData={userData} /> }
                { page === "licenses" && <Licenses userData={userData} /> }
                { page === "certifications" && <Certifications userData={userData} /> }
                { page === "languages" && <Languages userData={userData} /> }

            </div>
        </div>
    )
}