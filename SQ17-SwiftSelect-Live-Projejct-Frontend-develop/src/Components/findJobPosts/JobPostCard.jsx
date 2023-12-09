import {Link} from "react-router-dom";

export const JobPostCard = ({companyName, jobTitle, logo, priceRange, jobDescription, jobType, state, handleFindJobsOneCompany, country, customStyle,companyId}) => {
    const jobTypeBackgroundColor = jobType === "REMOTE" ? "bg-[#56CCF2]" : jobType === "HYBRID" ? "bg-[#D1FADF]" : jobType === "ON_SITE" ? "bg-[#FEF0C7]" : "";
    const jobTypeColor = jobType === "REMOTE" ? "text-[#2F80ED]" : jobType === "HYBRID" ? "text-[#32D583]" : jobType === "ON_SITE" ? "text-[#FEC84B]" : "";

    return(
        <div className="cursor-pointer items-stretch border shadow-lg bg-white flex w-[30vw] flex-col p-6 rounded-xl border-solid max-md:px-5 mb-5" style={customStyle} >
            <div className="justify-between items-stretch flex gap-5">
                <div className="items-stretch flex grow basis-[0%] flex-col">
                    <Link to={`/jobs-one-company/${companyId}`} className="hover:text-blue-500 max-w-fit cursor-pointer text-black text-base leading-6 tracking-normal whitespace-nowrap">
                        {companyName}
                    </Link>
                    <div className="text-black text-xl font-semibold leading-7 tracking-normal whitespace-nowrap mt-2">
                        {jobTitle}
                    </div>
                </div>

                <img
                    loading="lazy"
                    src={logo}
                    className="aspect-square object-contain object-center w-[58px] overflow-hidden shrink-0 max-w-full"
                />
            </div>
            <div className="text-blue-500 text-lg font-medium leading-6 tracking-normal whitespace-nowrap mt-4">
                {priceRange}
            </div>
            <div className="text-black text-base leading-6 tracking-normal mt-4">
                {jobDescription}
            </div>
            <div className="flex justify-between items-stretch gap-5 mt-4">
                <div className={`${jobTypeBackgroundColor} ${jobTypeColor} text-sm font-bold leading-5 tracking-normal uppercase whitespace-nowrap justify-center items-stretch px-2 py-1 rounded-xl w-[75px] text-center`}>
                    {jobType === "ON_SITE" ? "ON SITE" : jobType }
                </div>
                <div className="text-black text-base max-w-fit leading-6 tracking-normal self-end grow whitespace-nowrap my-auto">
                    {`${state}, ${country}`}
                </div>
            </div>
        </div>
    )
}