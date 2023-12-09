export const JobPostFullRequirements = ({jobTitle, priceRange, jobDescription, jobType, state, country, responsibilities, qualifications, niceToHave}) => {
    return (
        <div className="items-center bg-white flex flex-col">
            <div className="items-stretch border-[color:var(--Gray-3,#828282)] self-center flex w-full max-w-[1002px] flex-col mt-6 p-6 rounded-xl border-[0.5px] border-solid max-md:max-w-full max-md:px-5">
                <div className="justify-between items-stretch flex gap-5 max-md:max-w-full max-md:flex-wrap">
                    <div className="text-black text-xl font-semibold leading-7 tracking-normal grow shrink basis-auto">
                        {jobTitle}
                        Junior Full-Stack Engineer
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6913ade5-a09e-4eb5-b7ab-68d7d53c7067?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                </div>
                <div className="text-gray-900 text-lg font-medium leading-6 tracking-normal whitespace-nowrap mt-2 max-md:max-w-full">
                    {priceRange}
                    ₦ 500,000 - ₦ 700,000/ per month
                </div>
                <div className="justify-between items-center flex gap-5 mt-2 max-md:max-w-full max-md:flex-wrap">
                    <div className="text-black text-base leading-6 tracking-normal my-auto">
                        {/*{`${state}, ${country}`}*/}
                        Lagos, Nigeria
                    </div>
                    <div className="text-blue-500 text-sm font-medium leading-5 tracking-normal uppercase whitespace-nowrap justify-center items-stretch bg-cyan-300 self-stretch px-2 py-1 rounded-xl">
                        {jobType}
                        Remote
                    </div>
                </div>
            </div>
            <div className="text-black text-lg font-medium leading-6 tracking-normal uppercase self-start whitespace-nowrap mt-2.5 max-md:max-w-full">
                {jobDescription}
                Job Description{" "}
            </div>
            <div className="text-black text-base font-medium leading-6 tracking-normal mt-3.5 max-md:max-w-full">
                We are seeking a talented and motivated Junior Full-Stack Engineer to
                join our dynamic team. As a Junior Full-Stack Engineer, you will work
                closely with our development team to create, maintain, and optimize web
                applications. This is an excellent opportunity for someone looking to
                kick-start their career in full-stack development and gain hands-on
                experience with modern technologies.
            </div>
            <div className="text-black text-lg font-medium leading-6 tracking-normal uppercase self-start whitespace-nowrap mt-3.5 max-md:max-w-full">
                {responsibilities}
                Responsibilities
            </div>
            <div className="text-black text-base self-start font-medium leading-6 tracking-normal mt-3.5 max-md:max-w-full">
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
            <div className="text-black text-lg font-medium leading-6 tracking-normal uppercase self-start whitespace-nowrap mt-3.5 max-md:max-w-full">
                {qualifications}
                Qualifications
            </div>
            <div className="text-black text-lg font-medium leading-6 tracking-normal mt-3.5 max-md:max-w-full">
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
            </div>{" "}
            <div className="text-black text-lg font-medium leading-6 tracking-normal uppercase self-start whitespace-nowrap mt-3.5 max-md:max-w-full">
                {niceToHave}
                Nice-to-Have
            </div>{" "}
            <div className="text-black text-lg font-medium self-start leading-6 tracking-normal mt-3.5 mb-24 max-md:max-w-full max-md:mb-10">
                <ul>
                    <li>Experience with version control systems (e.g., Git).</li>
                    <li>
                        Previous internship or projects showcasing full-stack development
                        skills.
                    </li>
                    <li>Knowledge of cloud services (e.g., AWS, Azure, or GCP).</li>
                </ul>
            </div>
        </div>
    );
}

