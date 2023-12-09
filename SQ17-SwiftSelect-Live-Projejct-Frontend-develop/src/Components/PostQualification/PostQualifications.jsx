import * as React from "react";

export const PostQualifications = () => {
    return (
        <form className="mx-auto items-start flex flex-col max-w-[500px]">
            <div className="justify-between items-stretch self-stretch flex w-full gap-5 mt-12 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                <div className="text-neutral-800 text-base font-medium leading-6">
                    Are you fluent in?
                </div>
                <div className="items-stretch flex gap-2 self-start">
                    <input
                        type="checkbox"
                        className="aspect-[0.75] object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-neutral-800 text-base font-medium leading-6 tracking-normal grow whitespace-nowrap">
                        Barrier
                    </div>
                </div>
            </div>
            <div className="relative top-2.5 w-fit text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-white w-[110px] max-w-full ml-4 mt-1 p-1 self-start max-md:ml-2.5">
                Do you speak?
            </div>

            <div className="flex justify-end items-stretch rounded border border-[color:var(--Blue-1,#2F80ED)] self-center w-[500px] gap-5  border-solid max-md:max-w-full max-md:flex-wrap">
                <select className="flex justify-end items-stretch rounded self-center w-[500px] max-w-full px-4 py-3 max-md: flex-wrap pr-5 text-black text-base leading-6 tracking-normal">
                    <option>English</option>
                    <option>French</option>
                    <option>Spanish</option>
                    <option>Arabic</option>
                    <option>Hindi</option>
                    <option>Portuguese</option>
                    <option>Bengali</option>
                    <option>Russian</option>
                    <option>Japanese</option>
                    <option>Pungabi</option>
                    <option>German</option>
                    <option>Korean</option>
                    <option>Turkish</option>
                    <option>Italian</option>
                    <option>thai</option>
                    <option>Vietnamese</option>
                    <option>Swahili</option>
                    <option>Dutch</option>
                    <option>Polish</option>
                </select>
            </div>

            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbb23062-1ed7-4071-af07-a566632039f9?"
                className="aspect-[1.09] object-contain object-center w-[35px] overflow-hidden max-w-full mt-6 self-end"
            />
            <div className="justify-between items-stretch self-stretch flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
                <div className="text-neutral-800 text-base font-medium leading-6 grow shrink basis-auto">
                    How many years of experience do you have?
                </div>
                <div className="items-stretch flex justify-between gap-2">
                    <input
                        type="checkbox"
                        className="aspect-[0.75] object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-neutral-800 text-base font-medium leading-6 tracking-normal grow whitespace-nowrap">
                        Barrier
                    </div>
                </div>
            </div>
            <div className="relative top-2.5 w-fit text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-white max-w-full ml-4 p-1 self-start max-md:ml-2.5">
                Experience
            </div>
            <input
                type="text"
                name="experience"
                placeholder="years of experience"
                className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch w-full px-4 py-2.5 border-solid max-md:max-w-full"
            />
            <div className="relative top-2.5 w-fit text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-white max-w-full ml-4 mt-4 p-1 self-start max-md:ml-2.5">
                Least years of experience
            </div>
            {/*<div className="justify-between rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch flex w-full gap-5 px-4 py-2.5 border-solid max-md:max-w-full max-md:flex-wrap">*/}
            {/*    <div className="text-black text-base leading-6 tracking-normal">*/}
            {/*        3 years*/}
            {/*    </div>*/}
            {/*    <img*/}
            {/*        loading="lazy"*/}
            {/*        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1cc3991e-4a9e-4b43-9061-a29d39e9baa8?"*/}
            {/*        className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"*/}
            {/*    />*/}
            {/*</div>*/}
            <div className="flex justify-end items-stretch rounded border border-[color:var(--Blue-1,#2F80ED)] self-center w-[500px] gap-5 border-solid max-md:max-w-full max-md:flex-wrap">
                <select className="flex justify-end items-stretch rounded self-center w-[500px] max-w-full px-4 py-3 max-md: flex-wrap pr-5 text-black text-base leading-6 tracking-normal">
                    <option value="NO_EXPERIENCE">No Experience</option>
                    <option value="LESS_THAN_ONE_YEAR">Less Than One Year</option>
                    <option value="ONE_TO_THREE_YEARS">One To Three Years</option>
                    <option value="FOUR_TO_SIX_YEARS">Four To Six Years</option>
                    <option value="SEVEN_TO_NINE_YEARS">Seven To Nine Years</option>
                    <option value="MORE_THAN_TEN_YEARS">More Than Ten Years</option>
                </select>
            </div>

            <div className="items-stretch self-stretch flex w-full justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
                <div className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-neutral-800 text-base font-medium leading-6 whitespace-nowrap -mr-5">
                        Do you live within Lagos
                    </div>
                    <div className="text-neutral-500 text-sm leading-5 whitespace-nowrap -mr-5">
                        Applicants should live within Lagos
                    </div>
                </div>
                <div className="items-stretch flex gap-2 self-start">
                    <input
                        type="checkbox"
                        className="aspect-[0.75] object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-neutral-800 text-base font-medium leading-6 tracking-normal grow whitespace-nowrap">
                        Barrier
                    </div>
                </div>
            </div>
            <div className="justify-between items-stretch self-stretch flex w-full gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
                <div className="items-stretch flex grow basis-[0%] flex-col max-w-[21.5rem]">
                    <div className="text-neutral-800 text-base font-medium leading-6 -mr-5">
                        Will you be able to relocate to be within reasonable commuting
                        distance from Lagos?
                    </div>
                    <div className="text-neutral-500 text-sm font-medium leading-5 whitespace-nowrap -mr-5 mt-2">
                        Applicants should be able to
                    </div>
                </div>
                <div className="items-stretch flex gap-2 self-start">
                    <input
                        type="checkbox"
                        className="aspect-[0.75] object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-neutral-800 text-base font-medium leading-6 tracking-normal grow whitespace-nowrap">
                        Barrier
                    </div>
                </div>
            </div>
            <div className="items-stretch self-stretch flex w-full justify-between gap-2 mt-1 max-md:max-w-full max-md:flex-wrap">
                <div className="text-neutral-800 text-base leading-6 tracking-normal grow whitespace-nowrap max-md:max-w-full">
                    Relocate before starting work
                </div>
            </div>
            <div className="items-center self-stretch flex w-full justify-between gap-2 mt-2.5 py-px max-md:max-w-full max-md:flex-wrap">
                <div className="text-neutral-800 text-base leading-6 tracking-normal self-stretch grow whitespace-nowrap max-md:max-w-full">
                    Relocate with an employer provided relocation package
                </div>
            </div>
            <div className="justify-between items-stretch self-stretch flex w-full gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
                <div className="items-stretch flex grow basis-[0%] flex-col max-w-[21.5rem]">
                    <div className="text-neutral-800 text-base font-medium leading-6 -mr-5">
                        What is the highest level of education you’ve completed?
                    </div>
                    <div className="text-neutral-500 text-sm font-medium leading-5 whitespace-nowrap -mr-5 mt-2">
                        Minimum education level
                    </div>
                </div>
                <div className="items-stretch flex gap-2 self-start">
                    <input
                        type="checkbox"
                        className="aspect-[0.75] object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
                    />

                    <div className="text-neutral-800 text-base font-medium leading-6 tracking-normal grow whitespace-nowrap">
                        Barrier
                    </div>
                </div>
            </div>
            <div className="items-stretch self-stretch flex w-full justify-between gap-2 mt-1 max-md:max-w-full max-md:flex-wrap">
                <input
                    type="radio"
                    name="min-edu-level"
                    className="w-4 h-4 text-blue-500 form-radio focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />
                <div className="text-neutral-800 text-base leading-6 tracking-normal grow whitespace-nowrap max-md:max-w-full">
                    Primary Education
                </div>
            </div>
            <div className="items-center self-stretch flex w-full justify-between gap-2 mt-2.5 py-px max-md:max-w-full max-md:flex-wrap">
                <input
                    type="radio"
                    name="min-edu-level"
                    className="w-4 h-4 text-blue-500 form-radio focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />
                <div className="text-neutral-800 text-base leading-6 tracking-normal self-stretch grow whitespace-nowrap max-md:max-w-full">
                    Lower Secondary Education
                </div>
            </div>
            <div className="items-center self-stretch flex w-full justify-between gap-2 mt-2.5 py-px max-md:max-w-full max-md:flex-wrap">
                <input
                    type="radio"
                    name="min-edu-level"
                    className="w-4 h-4 text-blue-500 form-radio focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />
                <div className="text-neutral-800 text-base leading-6 tracking-normal self-stretch grow whitespace-nowrap max-md:max-w-full">
                    Secondary Education
                </div>
            </div>
            <div className="items-center self-stretch flex w-full justify-between gap-2 mt-2.5 py-px max-md:max-w-full max-md:flex-wrap">
                <input
                    type="radio"
                    name="min-edu-level"
                    className="w-4 h-4 text-blue-500 form-radio focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />
                <div className="text-neutral-800 text-base leading-6 tracking-normal self-stretch grow whitespace-nowrap max-md:max-w-full">
                    Post-Secondary or Tertiary Education
                </div>
            </div>
            <div className="items-center self-stretch flex w-full justify-between gap-2 mt-2.5 py-px max-md:max-w-full max-md:flex-wrap">
                <input
                    type="radio"
                    name="min-edu-level"
                    className="w-4 h-4 text-blue-500 form-radio focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />
                <div className="text-neutral-800 text-base leading-6 tracking-normal self-stretch grow whitespace-nowrap max-md:max-w-full">
                    Undergraduate Education
                </div>
            </div>
            <div className="items-center self-stretch flex w-full justify-between gap-2 mt-2.5 py-px max-md:max-w-full max-md:flex-wrap">
                <input
                    type="radio"
                    name="min-edu-level"
                    className="w-4 h-4 text-blue-500 form-radio focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />
                <div className="text-neutral-800 text-base leading-6 tracking-normal self-stretch grow whitespace-nowrap max-md:max-w-full">
                    Graduate Education
                </div>
            </div>
            <div className="justify-between items-stretch self-stretch flex w-full gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
                <div className="items-stretch flex grow basis-[0%] flex-col max-w-[21rem]">
                    <div className="text-neutral-800 text-base font-medium leading-6 -mr-5">
                        What percentage of time are you willing to travel for work?
                    </div>
                    <div className="text-neutral-500 text-sm font-medium leading-5 whitespace-nowrap -mr-5 mt-2">
                        Least percentage of time
                    </div>
                </div>
                <div className="items-stretch flex gap-2 self-start">
                    <input
                        type="checkbox"
                        className="aspect-[0.75] object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-neutral-800 text-base font-medium leading-6 tracking-normal grow whitespace-nowrap">
                        Barrier
                    </div>
                </div>
            </div>
            <div className="items-stretch flex w-[70px] max-w-full gap-2 mt-1 self-start">
                <input
                    type="radio"
                    name="time-percentage"
                    className="w-4 h-4 text-blue-500 form-radio focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />

                <div className="text-neutral-800 text-base leading-6 tracking-normal grow whitespace-nowrap">
                    25%
                </div>
            </div>
            <div className="items-center flex w-[70px] max-w-full gap-2 mt-2.5 py-px self-start">
                <input
                    type="radio"
                    name="time-percentage"
                    className="w-4 h-4 text-blue-500 form-radio focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />

                <div className="text-neutral-800 text-base leading-6 tracking-normal self-stretch grow whitespace-nowrap">
                    50%
                </div>
            </div>
            <div className="items-center flex w-[70px] max-w-full gap-2 mt-2.5 py-px self-start">
                <input
                    type="radio"
                    name="time-percentage"
                    className="w-4 h-4 text-blue-500 form-radio focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />

                <div className="text-neutral-800 text-base leading-6 tracking-normal self-stretch grow whitespace-nowrap">
                    75%
                </div>
            </div>
            <div className="items-center flex w-[70px] max-w-full gap-2 mt-2.5 py-px self-start">
                <input
                    type="radio"
                    name="time-percentage"
                    className="w-4 h-4 text-blue-500 form-radio focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />

                <div className="text-neutral-800 text-base leading-6 tracking-normal self-stretch grow whitespace-nowrap">
                    100%
                </div>
            </div>
            <button className="text-white text-base font-semibold leading-6 tracking-normal whitespace-nowrap justify-center items-stretch bg-blue-500 w-[104px] max-w-full mt-8 px-4 py-2 rounded-xl self-end">
                Continue
            </button>
        </form>
    );
}