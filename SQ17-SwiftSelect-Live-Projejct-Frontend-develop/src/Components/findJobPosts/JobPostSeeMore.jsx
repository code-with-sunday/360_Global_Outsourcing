import {JobPostSearch} from "./JobPostSearch.jsx";
import {JobSeekerTopHeader} from "../profile/profileComponents/JobSeekerTopHeader.jsx";

export const JobPostSeeMore = ({companyName, jobTitle, logo, priceRange, jobDescription, state, country, handleFindJobsOneCompany}) => {
    return (
        <div>
            <div className="gap-5 flex justify-center max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[58%] ml-5 max-md:w-full max-md:ml-0">

                    <div className="items-start flex flex-col mt-5 px-5 max-md:max-w-full max-md:mt-10">
                        <div className="items-stretch border-[color:var(--Gray-3,#828282)] flex flex-col px-6 rounded-xl border-[0.5px] border-solid max-md:px-5 w-full">
                            <div className="justify-between items-stretch flex gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
                                <img
                                    loading="lazy"
                                    // src={logo}
                                    src="https://res.cloudinary.com/dpfqbb9pl/image/upload/v1700142255/gtfd2nbof5pqblvyrfa7.svg"
                                    className="aspect-square object-contain object-center w-[58px] overflow-hidden shrink-0 max-w-full"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a60c6e3b-64bf-4905-b04d-885a3ce01029?"
                                    className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                                />
                            </div>
                            <div className="justify-between items-stretch flex gap-5 mt-2 max-md:max-w-full max-md:flex-wrap">
                                <div className="items-stretch flex grow basis-[0%] flex-col">
                                    <div onClick={handleFindJobsOneCompany} className="cursor-pointer hover:text-decoration-underline text-blue-500 text-base leading-6 tracking-normal underline whitespace-nowrap">
                                        {companyName}
                                        Decagon
                                    </div>
                                    <div className="text-black text-xl font-semibold leading-7 tracking-normal whitespace-nowrap mt-2">
                                        {jobTitle}
                                        Software Engineer
                                    </div>
                                </div>
                                <button className="text-white text-base font-semibold leading-6 tracking-normal whitespace-nowrap bg-blue-500 w-[115px] max-w-full mt-3 px-4 py-2 rounded-xl self-start">
                                    Apply now
                                </button>
                            </div>
                            <div className="text-gray-900 text-lg font-medium leading-6 tracking-normal whitespace-nowrap mt-2 max-md:max-w-full">
                                {priceRange}
                                ₦ 500,000 - ₦ 700,000/ per month
                            </div>
                            <div className="text-black text-base leading-6 tracking-normal whitespace-nowrap mt-2 mb-6 max-md:max-w-full">
                                Edo, Nigeria
                            </div>
                        </div>

                        <div className="items-stretch flex flex-col mt-5">
                            <div className="text-black text-lg font-medium leading-6 tracking-normal uppercase w-full max-md:max-w-full">
                                Job Description{" "}
                            </div>
                            <div className="text-black text-base font-medium leading-6 tracking-normal w-full mt-3.5 max-md:max-w-full">
                                {jobDescription}
                                We are seeking a talented and motivated Junior Full-Stack Engineer to
                                join our dynamic team. As a Junior Full-Stack Engineer, you will work
                                closely with our development team to create, maintain, and optimize web
                                applications. This is an excellent opportunity for someone looking to
                                kick-start their career in full-stack development and gain hands-on
                                experience with modern technologies.
                            </div>

                            <div className="text-black text-lg font-medium leading-6 tracking-normal uppercase mt-5 w-full max-md:max-w-full">
                                Responsibilities
                            </div>
                            <div className="text-black text-base font-medium leading-6 tracking-normal w-full mt-3.5 max-md:max-w-full">
                                <ul>
                                    <li>
                                        Collaborate with cross-functional teams to design, develop, and
                                        maintain web applications.
                                    </li>
                                    <li>
                                        Work on both front-end and back-end development tasks, contributing
                                        to the full software development lifecycle.
                                    </li>
                                    <li>
                                        Participate in code reviews, troubleshoot issues, and optimize
                                        application performance.
                                    </li>
                                    <li>
                                        Stay up-to-date with emerging technologies and industry trends,
                                        applying them to your work as appropriate.
                                    </li>
                                    <li>
                                        Communicate effectively within the team, sharing ideas and insights
                                        to help improve our products.
                                    </li>
                                </ul>
                            </div>

                            <div className="text-black text-lg font-medium leading-6 tracking-normal uppercase mt-5 w-full max-md:max-w-full">
                                Qualifications
                            </div>
                            <div className="text-black text-lg font-medium leading-6 tracking-normal w-full mt-3.5 max-md:max-w-full">
                                <ul>
                                    <li>
                                        Bachelor's degree in Computer Science or a related field (or
                                        equivalent work experience).
                                    </li>
                                    <li>
                                        Strong knowledge of front-end technologies, including HTML, CSS,
                                        JavaScript, and popular front-end frameworks (e.g., React, Angular,
                                        or Vue.js).
                                    </li>
                                    <li>
                                        Proficiency in back-end development using languages such as Python,
                                        Java, Ruby, or Node.js.
                                    </li>
                                    <li>Familiarity with database systems (SQL and NoSQL databases).</li>
                                    <li>Basic understanding of RESTful APIs and web services.</li>
                                    <li>
                                        Strong problem-solving skills and a passion for learning and
                                        innovation.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


