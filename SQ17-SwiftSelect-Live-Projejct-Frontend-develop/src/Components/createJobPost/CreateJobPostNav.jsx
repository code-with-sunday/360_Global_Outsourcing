
export const CreateJobPostNav = ({p1, p2, p3}) => {

    return(
        <div className="sticky top-[6rem] z-10 bg-white mx-auto items-start py-4 flex flex-col w-[500px]">
            <div className="items-start flex flex-col mx-3 w-[500px]">
                <div className="flex w-full max-w-[500px] justify-between gap-5 px-[3rem] max-md:justify-center">
                    <div onClick={p1} className="cursor-pointer flex items-center justify-center w-[32px] h-[32px] rounded-full bg-blue-500 text-white">
                        1
                    </div>

                    <div onClick={p2} className="cursor-pointer flex items-center justify-center w-[32px] h-[32px] rounded-full bg-blue-500 text-white">
                        2
                    </div>

                    <div onClick={p3} className="cursor-pointer flex items-center justify-center w-[32px] h-[32px] rounded-full bg-blue-500 text-white">
                        3
                    </div>
                </div>

                <div className="pt-2 w-full justify-between items-stretch self-stretch flex gap-2.5 px-3 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                    <div className="text-blue-500 text-center text-base leading-5 tracking-normal whitespace-nowrap">
                        Job Information
                    </div>
                    <div className="text-blue-500 text-base leading-5 shrink basis-auto">
                        Qualifications
                    </div>
                    <div className="text-blue-500 text-base leading-5 whitespace-nowrap mx--4 ">
                        Requirements
                    </div>
                </div>
            </div>
        </div>

    );
}