export const AppliedCandidateCredentials = ({selectedCandidate, setPage}) => {
    return (
        <div className="bg-white flex flex-col pb-12 w-[80vw]">
            <div onClick={setPage} className="sticky top-[7.5rem] cursor-pointer justify-between rounded bg-emerald-100 flex gap-2 px-2.5 py-4 items-start">
                <div className="text-green-500 text-xs leading-4 tracking-normal self-stretch grow whitespace-nowrap">
                    Go Back to Main Page
                </div>
            </div>
            <div className="items-stretch shadow-lg bg-white self-center flex w-full w-[80vw] flex-col mt-14 px-6 py-4 rounded-xl max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div className="justify-between items-stretch flex gap-5 max-md:max-w-full max-md:flex-wrap">
                    <img
                        loading="lazy"
                        src={`${selectedCandidate.profilePicture}`}
                        className="aspect-square object-contain object-center w-[100px] overflow-hidden shrink-0 max-w-full"
                        style={{borderRadius: "50%"}}
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/147eda17-e2f2-405a-be48-03d0a9c34711?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                </div>
                <div className="text-black text-2xl font-medium leading-9 tracking-normal whitespace-nowrap mt-3 self-start">
                    {`${selectedCandidate.firstName} ${selectedCandidate.lastName}`}
                </div>
                <div className="items-center flex w-[248px] max-w-full gap-1 mt-2 self-start">
                    <div className="text-black text-lg font-light leading-6 tracking-normal grow whitespace-nowrap my-auto">
                        <span className="text-gray-500"><b>{selectedCandidate.gender}</b></span>
                    </div>
                    <div className="ml-[9rem] text-black text-lg font-light leading-6 tracking-normal grow whitespace-nowrap my-auto">
                        <span className="text-gray-500"><b>{selectedCandidate.country}</b></span>
                    </div>
                </div>
                <div className="justify-between items-stretch flex w-full gap-5 mt-4 max-md:max-w-full max-md:flex-wrap">
                    <div className="items-stretch flex justify-between gap-5 w-[50vw] max-md:max-w-full max-md:flex-wrap">
                        <a href={`${selectedCandidate.resume}`} className="items-stretch rounded bg-gray-100 flex grow basis-[0%] flex-col justify-center px-2 py-2">
                            <div className="flex gap-1 items-start max-md:justify-center">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ba7eacb-60ba-4c89-980d-866f55fcf786?"
                                    className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
                                />
                                <div className="text-blue-500 text-base font-medium leading-6 tracking-normal grow shrink basis-auto">
                                    {`Resume - ${selectedCandidate.firstName}.pdf`}
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7935d99c-50d5-4815-a0f7-ea924d6726e2?"
                                    className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
                                />
                            </div>
                        </a>
                        <a href={`${selectedCandidate.coverLetter}`} className="items-stretch rounded bg-gray-100 flex grow basis-[0%] flex-col justify-center px-2 py-2">
                            <div className="flex gap-1 items-start max-md:justify-center">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c979c26-6fac-4d13-9ddf-de307df90d2d?"
                                    className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
                                />
                                <div className="text-blue-500 text-base font-medium leading-6 tracking-normal grow shrink basis-auto">
                                    {`Cover Letter - ${selectedCandidate.firstName}.pdf`}
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/44f17217-af68-4c33-9946-22e81373e2b9?"
                                    className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
                                />
                            </div>
                        </a>
                    </div>
                    <div className="items-stretch self-center flex gap-1.5 my-auto max-md:justify-center">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f5dc188-7624-4f80-b8ba-60b59239ffa0?"
                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/38a6f3f6-948d-4876-b575-539b27f862cf?"
                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9af3992e-a560-48f6-a008-94d38267c31a?"
                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        />
                    </div>
                </div>
                <div className="justify-between items-stretch flex w-[219px] max-w-full gap-3.5 mt-6 px-px self-start">
                    <a href={`mailto:${selectedCandidate.email}`} className="justify-between rounded bg-blue-100 flex gap-2 px-2.5 py-2 items-start">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0915df1d-65aa-4c06-97bd-b9adaec6d2a8?"
                            className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="text-blue-500 text-xs leading-4 tracking-normal self-stretch grow whitespace-nowrap">
                            Send Email
                        </div>
                    </a>
                </div>
            </div>
            <div className="text-blue-500 mt-8 text-black text-lg font-medium leading-6 tracking-normal uppercase self-start whitespace-nowrap mt-2.5 max-md:max-w-full">
                <b>Education</b>
            </div>

            { selectedCandidate.education.length !== 0 ?
                selectedCandidate.education.map(
                    edu => (
                        <div className="text-black text-base font-medium leading-6 tracking-normal mt-3.5 max-md:max-w-full">
                            <br />
                            <span className="text-blue-500"><b>{edu.educationLevel}</b></span> in {edu.fieldOfStudy}
                            <br />
                            <span className="text-gray-500">{edu.yearOfGraduation}</span>
                        </div>
                    )
                ) : <div className="text-black text-base font-medium leading-6 tracking-normal max-md:max-w-full">No Education History to display</div>
            }

            <div className="text-blue-500 text-lg font-medium leading-6 tracking-normal uppercase self-start whitespace-nowrap mt-3.5 max-md:max-w-full">
                <b>WORK EXPERIENCE</b>
            </div>

            { selectedCandidate.workExperiences.length !== 0 ?
                selectedCandidate.workExperiences.map(
                    workExp => (
                        <div className="text-black text-base font-medium leading-6 tracking-normal max-md:max-w-full">
                            <span className="font-semibold">{workExp.companyName}</span>
                            <span className="font-medium">
                              {" "}
                                            <br />
                                {workExp.jobTitle} <br />
                                <span className="text-gray-500">{workExp.startDate} - {workExp.stopDate}</span>
                            </span>
                        </div>
                    )
                ) :
                <div className="text-black text-base font-medium leading-6 tracking-normal mt-3.5 max-md:max-w-full">No Work Experience History to display</div>
            }

            <div className="text-blue-500 text-black text-lg font-medium leading-6 tracking-normal uppercase mt-3.5 max-md:max-w-full">
                <b>SKILLS</b>
            </div>
            <ul className="ml-4">
                { selectedCandidate.skills.length !== 0 ?
                    selectedCandidate.skills.map(
                        skill => (
                            <li>
                                {skill.skill} - {
                                    
                                    skill.yearsOfExperience === "NO_EXPERIENCE" ? <span className="text-gray-500">No Experience</span> :
                                        skill.yearsOfExperience === "LESS_THAN_ONE_YEAR" ? <span className="text-gray-500">Less than One year</span> :
                                            skill.yearsOfExperience === "ONE_TO_THREE_YEARS" ? <span className="text-gray-500">One to Three years</span> :
                                                skill.yearsOfExperience === "FOUR_TO_SIX_YEARS" ? <span className="text-gray-500">Four to Six Years</span> :
                                                    skill.yearsOfExperience === "SEVEN_TO_NINE_YEARS" ? <span className="text-gray-500">Seven to Nine years</span> :
                                                        skill.yearsOfExperience === "MORE_THAN_TEN_YEARS" ? <span className="text-gray-500">More than Ten Years</span> : ""


                            }
                            </li>
                        )
                    ) :
                    <div className="text-black text-base font-medium leading-6 tracking-normal mt-3.5 max-md:max-w-full">No Skills to display</div>
                }
            </ul>
            <div className="text-blue-500 text-black text-lg font-medium leading-6 tracking-normal uppercase self-start whitespace-nowrap mt-3.5 max-md:max-w-full">
                <b>CERTIFICATIONS</b>
            </div>
            <ul className="ml-4">
                { selectedCandidate.certifications.length !== 0 ?
                    selectedCandidate.certifications.map(
                        certification => (
                            <li>
                                {certification.name} - <span className="text-gray-500">{certification.expiration}</span>
                            </li>
                        )
                    ) :
                    <div className="text-black text-base font-medium leading-6 tracking-normal mt-3.5 max-md:max-w-full">No Certification to display</div>
                }
            </ul>
        </div>
    );
}


