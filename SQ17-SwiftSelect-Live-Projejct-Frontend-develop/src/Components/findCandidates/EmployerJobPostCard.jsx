export const EmployerJobPostCard = ({jobTitle, date, priceRange, jobDescription, jobType, state, country, handlePage}) => {

    return(
    <div onClick={handlePage} className="flex flex-col items-stretch max-md:w-full max-md:ml-0 mb-5">
        <div className="items-stretch flex grow flex-col max-md:mt-10">
            <div className="items-stretch border border-[color:var(--Blue-1,#2F80ED)] shadow-lg bg-white flex w-full flex-col p-6 rounded-xl border-solid max-md:px-5">
                <div className="justify-between items-stretch flex gap-5">
                    <div className="text-black text-xl font-semibold leading-7 tracking-normal grow shrink basis-auto">
                        {jobTitle}
                    </div>
                    <div className="text-zinc-500 text-sm leading-5 tracking-normal self-center whitespace-nowrap my-auto">
                        {date}
                    </div>
                </div>
                <div className="text-blue-500 text-lg font-medium leading-6 tracking-normal whitespace-nowrap mt-4">
                    {priceRange}
                </div>
                <div className="text-black text-base leading-6 tracking-normal mt-4">
                    {jobDescription}
                </div>
                <div className="flex justify-between items-stretch gap-5 mt-4">
                    <div className="text-blue-500 text-sm font-medium leading-5 tracking-normal uppercase whitespace-nowrap justify-center bg-cyan-300 w-fit px-2 py-1 rounded-xl">
                        {jobType}
                    </div>
                    <div className="text-black text-base leading-6 tracking-normal self-end flex w-fit whitespace-nowrap my-auto">
                        {`${state}, ${country}`}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}