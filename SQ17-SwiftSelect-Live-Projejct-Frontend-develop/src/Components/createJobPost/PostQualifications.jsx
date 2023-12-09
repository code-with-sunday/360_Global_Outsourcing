import * as React from "react";

export const PostQualifications = ({formData, handleChange, handleStep3, handleQualificationChange, qualifications, addQualification}) => {
    return (

        <div className="w-fit mb-[4rem] mx-auto flex flex-col items-stretch">
            <div className="justify-between self-center max-w-full">
                <div className="mx-auto items-start flex flex-col max-w-[500px]">
                    <div className="relative top-2.5 w-fit text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-white max-w-full ml-4 p-1 self-start max-md:ml-2.5">
                        Experience Level
                    </div>
                    <div className="flex justify-end items-stretch rounded border border-[color:var(--Blue-1,#2F80ED)] self-center w-[500px] gap-5 border-solid max-md:max-w-full max-md:flex-wrap">
                        <select
                            name="experienceLevel"
                            value={formData.experienceLevel}
                            onChange={handleChange}
                            required
                            className="flex justify-end items-stretch rounded self-center w-[500px] max-w-full px-4 py-3 max-md: flex-wrap pr-5 text-black text-base leading-6 tracking-normal"
                        >
                            <option value="" selected disabled></option>
                            <option value="ENTRY_LEVEL">Entry Level</option>
                            <option value="JUNIOR_LEVEL">Junior Level</option>
                            <option value="MID_LEVEL">Mid Level</option>
                            <option value="SENIOR_LEVEL">Senior Level</option>
                            <option value="EXPERT_LEVEL">Expert Level</option>
                        </select>
                    </div>

                    <div className="relative top-2.5 w-fit text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-white max-w-full ml-4 mt-4 p-1 self-start max-md:ml-2.5">
                        Years of experience
                    </div>
                    <div className="flex justify-end items-stretch rounded border border-[color:var(--Blue-1,#2F80ED)] self-center w-[500px] gap-5 border-solid max-md:max-w-full max-md:flex-wrap">
                        <select
                            name="yearsOfExp"
                            value={formData.yearsOfExp}
                            onChange={handleChange}
                            required
                            className="flex justify-end items-stretch rounded self-center w-[500px] max-w-full px-4 py-3 max-md: flex-wrap pr-5 text-black text-base leading-6 tracking-normal"
                        >
                            <option value="" selected disabled></option>
                            <option value="NO_EXPERIENCE">No Experience</option>
                            <option value="LESS_THAN_ONE_YEAR">Less Than One Year</option>
                            <option value="ONE_TO_THREE_YEARS">One To Three Years</option>
                            <option value="FOUR_TO_SIX_YEARS">Four To Six Years</option>
                            <option value="SEVEN_TO_NINE_YEARS">Seven To Nine Years</option>
                            <option value="MORE_THAN_TEN_YEARS">More Than Ten Years</option>
                        </select>
                    </div>

                    <img
                        onClick={addQualification}
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbb23062-1ed7-4071-af07-a566632039f9?"
                        className="cursor-pointer aspect-[1.09] object-contain object-center w-[35px] overflow-hidden max-w-full mt-[3rem] self-end"
                    />

                    <div className="relative top-6 px-1 w-fit text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-white max-w-full ml-4 self-start max-md:ml-2.5">
                        Qualifications
                    </div>
                    <div className="mt-4 px-4 pb-4 rounded border border-[color:var(--Blue-1,#2F80ED)]">
                        <input
                            type="text"
                            name="qualifications"
                            value={qualifications}
                            onChange={handleQualificationChange}
                            className="mt-4 text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-center w-[465px] max-w-full px-4 py-2.5 border-solid"
                            placeholder="Qualification"
                        />

                        { formData.qualifications.map(
                            qualification => (
                                <div className="mt-4 text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-center w-[465px] max-w-full px-4 py-2.5 border-solid">
                                    {qualification}
                                </div>
                            )
                        ) }

                    </div>

                    <button onClick={handleStep3} className="text-white text-base font-semibold leading-6 tracking-normal whitespace-nowrap justify-center items-stretch bg-blue-500 w-[104px] max-w-full mt-8 px-4 py-2 rounded-xl self-end">
                        Continue
                    </button>
                </div>

            </div>
        </div>



    );
}