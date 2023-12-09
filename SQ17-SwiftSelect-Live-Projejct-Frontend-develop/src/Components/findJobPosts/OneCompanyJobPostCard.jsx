export const OneCompanyJobPostCard = ({jobTitle, logo, date, priceRange, jobDescription, jobType, state, country}) => {

return (
<div className="flex flex-col items-stretch max-w-[26rem] max-md:w-full max-md:ml-0">
    <div className="items-stretch shadow-lg bg-white flex w-full grow flex-col mx-auto p-6 rounded-xl max-md:mt-10 max-md:px-5">
        <div className="justify-between items-stretch flex gap-5">
            <div className="text-black text-xl font-semibold leading-7 tracking-normal grow shrink basis-auto">
                {jobTitle}
            </div>
            <div className="text-zinc-500 text-sm leading-5 tracking-normal self-center whitespace-nowrap my-auto">
                {date}
                5 days ago
            </div>
        </div>
        <div className="text-blue-500 text-lg font-medium leading-6 tracking-normal whitespace-nowrap mt-4">
            {priceRange}
        </div>
        <div className="text-black text-base leading-6 tracking-normal mt-4">
            {jobDescription}
            Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
        </div>
        <div className="justify-between items-stretch flex gap-5 mt-4">
            <div className="text-blue-500 text-sm font-medium leading-5 tracking-normal uppercase whitespace-nowrap justify-center items-stretch bg-cyan-300 px-2 py-1 rounded-xl w-[75px] text-center">
                {jobType}
            </div>
            <div className="text-black text-base leading-6 tracking-normal self-center grow whitespace-nowrap my-auto">
                {`${state}, ${country}`}
            </div>
        </div>
    </div>
</div>
)
}