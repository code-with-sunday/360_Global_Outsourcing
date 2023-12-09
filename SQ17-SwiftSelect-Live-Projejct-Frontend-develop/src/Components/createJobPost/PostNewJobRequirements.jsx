import * as React from "react";
import {ClipLoader} from "react-spinners";
import {useState} from "react";

export const PostNewJobRequirements = ({isVisible, handleChange, formData, responsibilities, niceToHave, handleResponsibilitiesChange, handleNiceToHaveChange, addResponsibilitiesToList, addNiceToHaveToList}) => {

    return (
        <div className="w-[500px] mb-[4rem] mx-auto flex flex-col items-stretch">
            <div className="justify-between self-center max-w-full">
                <div className="mx-auto items-start flex flex-col max-w-[500px]">
                    <div className="relative top-2.5 w-fit text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-white max-w-full ml-4 mt-1 p-1 self-start max-md:ml-2.5">
                        Language
                    </div>
                    <input
                        type="text"
                        name="language"
                        value={formData.language}
                        onChange={handleChange}
                        required
                        placeholder="language"
                        className="w-[500px] text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                    />

                    <div className="left-3 relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-center items-stretch bg-white w-fit px-1 mx-4 mt-5">
                        Education Level
                    </div>
                    <div className="justify-end items-stretch rounded border self-center flex w-[500px] border-[color:var(--Blue-1,#2F80ED)] max-w-full gap-5 border-solid max-md:flex-wrap">
                        <select
                            name="educationLevel"
                            value={formData.educationLevel}
                            onChange={handleChange}
                            required
                            className="flex justify-end items-stretch rounded self-center w-[500px] max-w-full px-4 py-2.5 max-md:flex-wrap pr-5"
                        >
                            <option value="" selected disabled></option>
                            <option value="DEGREE">Degree</option>
                            <option value="DIPLOMA">Diploma</option>
                            <option value="HIGH_SCHOOL">High School</option>
                            <option value="HND">HND</option>
                            <option value="MSC">MSC</option>
                            <option value="MBA">MBA</option>
                            <option value="MBBS">MBBS</option>
                            <option value="MPHIL">MPHIL</option>
                            <option value="PHD">PHD</option>
                            <option value="OND">OND</option>
                            <option value="VOCATIONAL">VOCATIONAL</option>
                            <option value="OTHERS">OTHERS</option>
                        </select>
                    </div>

                    <img
                        onClick={addResponsibilitiesToList}
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbb23062-1ed7-4071-af07-a566632039f9?"
                        className="cursor-pointer aspect-[1.09] object-contain object-center w-[35px] overflow-hidden max-w-full mt-[3rem] self-end"
                    />

                    <div className="relative top-6 px-1 w-fit text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-white max-w-full ml-4 self-start max-md:ml-2.5">
                        Responsibilities
                    </div>
                    <div className="mt-4 px-4 pb-4 rounded border border-[color:var(--Blue-1,#2F80ED)]">
                        <input
                            type="text"
                            name="responsibilities"
                            value={responsibilities}
                            onChange={handleResponsibilitiesChange}
                            className="mt-4 text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-center w-[465px] max-w-full px-4 py-2.5 border-solid"
                            placeholder="Responsibilities"
                        />

                        { formData.responsibilities.map(
                            responsibility => (
                                <div className="mt-4 text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-center w-[465px] max-w-full px-4 py-2.5 border-solid">
                                    {responsibility}
                                </div>
                            )
                        ) }

                    </div>

                    <img
                        onClick={addNiceToHaveToList}
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbb23062-1ed7-4071-af07-a566632039f9?"
                        className="cursor-pointer aspect-[1.09] object-contain object-center w-[35px] overflow-hidden max-w-full mt-[3rem] self-end"
                    />

                    <div className="relative top-6 px-1 w-fit text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-white max-w-full ml-4 self-start max-md:ml-2.5">
                        Nice To Have
                    </div>
                    <div className="mt-4 px-4 pb-4 rounded border border-[color:var(--Blue-1,#2F80ED)]">
                        <input
                            type="text"
                            name="niceToHave"
                            value={niceToHave}
                            onChange={handleNiceToHaveChange}
                            className="mt-4 text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-center w-[465px] max-w-full px-4 py-2.5 border-solid"
                            placeholder="Nice To Have"
                        />

                        { formData.niceToHave.map(
                            niceToHave => (
                                <div className="mt-4 text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-center w-[465px] max-w-full px-4 py-2.5 border-solid">
                                    {niceToHave}
                                </div>
                            )
                        ) }
                    </div>

                    <div className="flex gap-2">
                        <button type="submit"
                                className="text-white cursor-pointer text-center text-base font-semibold leading-6 tracking-normal whitespace-nowrap justify-center items-stretch bg-blue-500 w-fit max-w-full mt-10 px-4 py-2 rounded-xl self-end"
                        >
                            Create Post

                            { isVisible &&
                                <ClipLoader color="#36D7B7" loading={true} size={20}/>
                            }

                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

