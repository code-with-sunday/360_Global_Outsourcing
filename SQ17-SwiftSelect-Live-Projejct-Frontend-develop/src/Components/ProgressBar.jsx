import * as React from "react";

export const ProgressBar = () => {
    return(
        <>
            <div className="justify-center items-center flex flex-col">


                <div className="justify-between items-stretch bg-white self-stretch flex w-full gap-5 px-12 py-4 max-md:max-w-full max-md:flex-wrap max-md:px-5">
                <div className="text-blue-500 text-xl leading-7 tracking-normal self-center grow whitespace-nowrap my-auto">
                SwiftSelect
                </div>
                <div className="items-stretch self-center flex w-fit gap-2 mr-96">
                <div className="text-gray-900 text-base leading-6 tracking-normal whitespace-nowrap cursor-pointer">
                Find Candidates
                </div>
                <div className="text-black text-base leading-6 tracking-normal whitespace-nowrap cursor-pointer">
                Profile
                </div>
                </div>
                <div className="items-stretch flex justify-between gap-5 max-md:justify-center">
                <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/97de1c1c-8dd7-41c3-8012-fadd45ee9f28?apiKey=f9ba415858cf46368ca603b39703e5c7&"
                className="aspect-square object-contain object-center w-8 overflow-hidden self-center shrink-0 max-w-full my-auto cursor-pointer"
                />
                <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9c68bd5-0b1c-4d88-acf7-6f9b9f973b43?apiKey=f9ba415858cf46368ca603b39703e5c7&"
                className="aspect-square object-contain object-center w-8 overflow-hidden self-center shrink-0 max-w-full my-auto cursor-pointer"
                />
                <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/aa5cf5a1-7486-4992-beff-3fd93ac9a8c0?apiKey=f9ba415858cf46368ca603b39703e5c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa5cf5a1-7486-4992-beff-3fd93ac9a8c0?apiKey=f9ba415858cf46368ca603b39703e5c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa5cf5a1-7486-4992-beff-3fd93ac9a8c0?apiKey=f9ba415858cf46368ca603b39703e5c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa5cf5a1-7486-4992-beff-3fd93ac9a8c0?apiKey=f9ba415858cf46368ca603b39703e5c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa5cf5a1-7486-4992-beff-3fd93ac9a8c0?apiKey=f9ba415858cf46368ca603b39703e5c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa5cf5a1-7486-4992-beff-3fd93ac9a8c0?apiKey=f9ba415858cf46368ca603b39703e5c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa5cf5a1-7486-4992-beff-3fd93ac9a8c0?apiKey=f9ba415858cf46368ca603b39703e5c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa5cf5a1-7486-4992-beff-3fd93ac9a8c0?apiKey=f9ba415858cf46368ca603b39703e5c7&"
                className="aspect-square object-contain object-center w-[50px] overflow-hidden shrink-0 max-w-full cursor-pointer"
                />
                </div>
                </div>

                <div className="items-stretch flex w-full max-w-[404px] justify-between gap-5 px-5 max-md:justify-center">
                    <div className="justify-center text-gray-600 text-center text-base leading-6 tracking-normal whitespace-nowrap aspect-square items-stretch px-3.5 py-2.5 rounded-[50%] cursor-pointer">
                        1
                     </div>
             <div className="justify-center text-gray-600 text-center text-base leading-6 tracking-normal whitespace-nowrap stroke-[1px] aspect-square px-3.5 py-2.5 rounded-[50%] items-start mr-4 cursor-pointer">
                 2
            </div>
            <div className="justify-center text-gray-600 text-center text-base leading-6 tracking-normal whitespace-nowrap stroke-[1px] aspect-square items-stretch scroll-px-3.5 py-2.5 rounded-[50%] cursor-pointer">
                3
            </div>
            </div>
            <div className="flex w-fit gap-2.5 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <div className="text-blue-500 text-center text-base leading-6 tracking-normal whitespace-nowrap">
            Job Information
            </div>
            <div className="text-blue-500 text-base leading-6 grow shrink basis-auto">
            Qualifications and Requirements
            </div>
            <div className="text-blue-500 text-base leading-6 whitespace-nowrap">
            Contact Details
            </div>
            </div>
            </div>


            {/*<div className="items-stretch self-center flex w-[400px] max-w-full justify-between gap-5 mt-20 px-5 max-md:justify-center max-md:mt-10">*/}
            {/*    <div className="justify-center text-gray-600 text-center text-base leading-6 tracking-normal whitespace-nowrap aspect-square items-stretch px-3.5 py-2.5 rounded-[50%] max-md:pr-px">*/}
            {/*        1*/}
            {/*    </div>*/}

            {/*    <div className="justify-center text-gray-600 text-center text-base leading-6 tracking-normal whitespace-nowrap stroke-[1px] aspect-square px-3.5 py-2.5 rounded-[50%]">*/}
            {/*        2*/}
            {/*    </div>*/}
            {/*    <div className="justify-center text-gray-600 text-center text-base leading-6 tracking-normal whitespace-nowrap stroke-[1px] aspect-square items-stretch px-3 py-2.5 rounded-[50%]">*/}
            {/*        3*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="justify-between items-stretch self-center flex w-[500px] max-w-full gap-5 px-5 max-md:flex-wrap max-md:justify-center">*/}
            {/*    <div className="text-blue-500 text-center text-base leading-6 tracking-normal cursor-pointer">*/}
            {/*        Job Information*/}
            {/*    </div>*/}
            {/*    <div className="text-blue-500 text-base leading-6 grow shrink basis-auto cursor-pointer">*/}
            {/*        Qualifications and Requirements*/}
            {/*    </div>*/}
            {/*    <div className="text-blue-500 text-base leading-6 whitespace-nowrap cursor-pointer">*/}
            {/*        Contact Details*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}