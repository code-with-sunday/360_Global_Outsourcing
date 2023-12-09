export const AppliedCandidateCard = ({handlePage, application}) => {
    return (
        <div onClick={handlePage} className=" cursor-pointer flex flex-col items-stretch w-[16rem] max-md:w-full max-md:ml-0">
            <div className="items-stretch shadow-lg bg-white flex w-full grow flex-col mx-auto px-6 py-4 rounded-xl max-md:mt-4 max-md:px-5">
                <div className="justify-between items-stretch flex gap-5">
                    <img
                        loading="lazy"
                        src={`${application.jobSeekerInfo.profilePicture}`}
                        className="aspect-[0.98] object-contain object-center w-[50px] overflow-hidden shrink-0 max-w-full"
                        style={{borderRadius: "50%"}}
                        alt=""/>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2434426d-f5e1-4405-af4f-3a492e8f1aac?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                        alt=""/>
                </div>
                <div className="text-black text-base font-medium leading-6 tracking-normal whitespace-nowrap mt-3">
                    {`${application.jobSeekerInfo.firstName} ${application.jobSeekerInfo.lastName}`}
                </div>
                <div className="text-gray-500 text-sm font-light leading-5 tracking-normal whitespace-nowrap flex justify-between">
                    <div><b>{application.jobSeekerInfo.gender}</b></div>
                    <div><b>{application.jobSeekerInfo.country}</b></div>
                </div>
                <div className="justify-between items-stretch flex w-full gap-5 mt-4">
                    <div className="items-stretch flex justify-between gap-1">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/589bf7c7-cd7f-4890-a9cc-52b623984f44?"
                            className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                            alt=""/>
                        <div className="text-blue-500 text-xs leading-4 tracking-normal grow whitespace-nowrap">
                            {`Resume - ${application.jobSeekerInfo.firstName}.pdf`}
                        </div>
                    </div>
                    <div className="items-stretch flex gap-1 max-md:justify-center">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3076fc34-6e55-4b65-ba83-19743f9bab6e?"
                            className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                            alt=""/>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f35d219-8032-4b7c-9f95-dc8ee51e75e4?"
                            className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                            alt=""/>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/30de0af9-de1d-49cd-8e7c-83c80e17037c?"
                            className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                            alt=""/>
                    </div>
                </div>
                <div className="justify-center items-stretch flex gap-3.5 mt-6 w-full">
                    <div className="justify-center mx-auto rounded bg-blue-100 flex gap-2 px-2.5 py-2 w-full">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/aae9011c-8995-4ff0-b8bd-76050cf48fb8?"
                            className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                            alt=""/>
                        <div className="text-blue-500 text-xs leading-4 tracking-normal whitespace-nowrap">
                            Send Email
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}