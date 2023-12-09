import * as React from "react";
import {ProgressBar} from "./ProgressBar.jsx";

export const JobInformation = () => {

    return (
        <form className="bg-white flex flex-col">
            <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-center w-fit px-1 mx-4 mt-7 mr-96">
                Job Title
            </div>
            <input
                type="text"
                name="Job Title"
                className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-center w-[500px] max-w-full px-4 py-2.5 border-solid"
                placeholder="Job Title"
            />

            <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-center w-fit px-1 mx-4 mt-5 mr-60">
                Number of people to hire for this job
            </div>
            <input
                type="number"
                name="Number of people to hire for this job"
                className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-center w-[500px] max-w-full px-4 py-2.5 border-solid"
                placeholder="Number of people to hire for this job"
            />
            <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-center items-stretch bg-white self-center w-fit px-1 mx-4 mt-5 mr-80">
                Location to post this job
            </div>

            <input
                type="text"
                name="Location to post this job"
                className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-center w-[500px] max-w-full px-4 py-2.5 border-solid"
                placeholder="State/Country"
            />


            <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-center items-stretch bg-white self-center w-fit px-1 mx-4 mt-5 mr-96">
                Job Type
            </div>

            <div className="justify-end items-stretch rounded border self-center flex w-[500px] border-[color:var(--Blue-1,#2F80ED)] max-w-full gap-5 border-solid max-md:flex-wrap">
                <select className="flex justify-end items-stretch rounded self-center w-[500px] max-w-full px-4 py-2.5 max-md:flex-wrap pr-5">
                    <option value="REMOTE">REMOTE</option>
                    <option value="HYBRID">HYBRID</option>
                    <option value="ON_SITE">ON SITE</option>
                </select>
            </div>

            <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-center items-stretch bg-white self-center w-fit px-1 mx-4 mt-5 mr-96">
                Job Category
            </div>
            <div className="justify-end items-stretch rounded border self-center flex w-[500px] border-[color:var(--Blue-1,#2F80ED)] max-w-full gap-5 border-solid max-md:flex-wrap">
                <select className="flex justify-end items-stretch rounded self-center w-[500px] max-w-full gap-5 px-4 py-2.5 max-md:flex-wrap">

                    <option value="ACCOUNTING">Accounting</option>
                    <option value="ADMIN">Admin</option>
                    <option value="BUILDING_AND_ARCHITECTURE">Building and Architecture</option>
                    <option value="CONSULTING_AND_STRATEGY">Consulting and Strategy</option>
                    <option value="CREATIVE_DESIGN">Creative Design</option>
                    <option value="CUSTOMER_SERVICE_SUPPORT">Customer Service Support</option>
                    <option value="DRIVER_TRANSPORT_SERVICE">Driver Transport Service</option>
                    <option value="ENGINEERING_AND_TECHNOLOGY">Engineering and Technology</option>
                    <option value="ESTATE_AGENT">Estate Agent</option>
                    <option value="FARMING_AND_AGRICULTURE">Farming and Agriculture</option>
                    <option value="FOOD_SERVICE_AND_CATERING">Food Service and Catering</option>
                    <option value="HEALTH_AND_SERVICE">Health and Service</option>
                    <option value="HOSPITALITY_AND_LEISURE">Hospitality and Leisure</option>
                    <option value="HUMAN_RESOURCE">Human Resource</option>
                    <option value="LEGAL_SERVICE">Legal Service</option>
                    <option value="MANAGEMENT_AND_BUSINESS_DEVELOPMENT">Management and Business Development</option>
                    <option value="MARKETING_AND_COMMUNICATIONS">Marketing and Communication</option>
                    <option value="MEDICAL_AND_PHARMACEUTICALS">Medical and Pharmaceuticals</option>
                    <option value="PRODUCT_AND_PRODUCT_MANAGEMENT">Product and Product Management</option>
                    <option value="QUALITY_CONTROL_AND_ASSURANCE">Quality Control and Assurance</option>
                    <option value="RESEARCH_TEACHING_AND_TRAINING">Research, Teaching and Training</option>
                    <option value="SALES">Sales</option>
                    <option value="SOFTWARE_ENGINEERING">Software Engineering</option>
                    <option value="DATA_SCIENCE">Data Science</option>
                    <option value="SUPPLY_CHAIN_AND_PROCUREMENT">Supply Chain and Procurement</option>
                    <option value="TRADES_AND_SERVICES">Trade and Services</option>
                </select>
            </div>

            <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-center items-stretch bg-white self-center w-fit px-1 mx-4 mt-5 mr-96">
                Job Description
            </div>


            <div className="items-start self-center border border-[color:var(--Blue-1,#2F80ED)] bg-white flex w-[500px] max-w-full flex-col pt-4 pb-0.5 px-5 rounded-md border-solid">


                <div className="items-stretch flex w-[290px] max-w-full gap-4 self-start max-md:ml-0 max-md:justify-center">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9426862d-0b64-4f29-9777-2286ef49080d?apiKey=f9ba415858cf46368ca603b39703e5c7&"
                        className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1 cursor-pointer"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/59404b35-9e7b-438b-97e5-d88820071197?apiKey=f9ba415858cf46368ca603b39703e5c7&"
                        className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1 cursor-pointer"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d104c4d4-1872-44a8-9ddf-d27705b1c011?apiKey=f9ba415858cf46368ca603b39703e5c7&"
                        className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1 cursor-pointer"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/29b20fb1-26fb-44d1-96f1-99cb7dd00d9d?apiKey=f9ba415858cf46368ca603b39703e5c7&"
                        className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1 cursor-pointer"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba063b21-8aa5-4e4e-b26f-747384ae34cf?apiKey=f9ba415858cf46368ca603b39703e5c7&"
                        className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1 cursor-pointer"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/948e8f7e-146d-4637-aa75-554821b38650?apiKey=f9ba415858cf46368ca603b39703e5c7&"
                        className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1 cursor-pointer"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9096cc82-26df-4026-9bf6-ae295898d90f?apiKey=f9ba415858cf46368ca603b39703e5c7&"
                        className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1 cursor-pointer"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc63411f-f71f-4f44-8e8d-8b095b6aa1ef?apiKey=f9ba415858cf46368ca603b39703e5c7&"
                        className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1 cursor-pointer"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb90f572-a73c-4403-b356-0cfc4394e443?apiKey=f9ba415858cf46368ca603b39703e5c7&"
                        className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1 cursor-pointer"
                    />
                </div>

                <div className="self-stretch bg-blue-500 flex shrink-0 h-px flex-col -mr-5 mt-4 max-md:max-w-full" />

                <textarea
                    name="JobDescription"
                    className="text-black text-base leading-6 tracking-normal whitespace-normal rounded bg-transparent focus:outline-none w-[500px] max-w-full py-2.5 resize-none"
                    placeholder="Type your job description"
                />

                <div className="justify-between items-center self-stretch flex w-full gap-5 -mr-5 mt-3 max-md:max-w-full max-md:flex-wrap py-3">
                    <div className="items-stretch flex gap-4 my-auto max-md:justify-center">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0b8a14c-6eb8-4846-9e4d-ed4f7aa3b79d?apiKey=f9ba415858cf46368ca603b39703e5c7&"
                            className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full cursor-pointer"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6c5b204-528f-496f-a0b7-ac66c798cb65?apiKey=f9ba415858cf46368ca603b39703e5c7&"
                            className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full cursor-pointer"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2c9accc-8eca-4222-a3f0-7caf4511e461?apiKey=f9ba415858cf46368ca603b39703e5c7&"
                            className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full cursor-pointer"
                        />
                    </div>

                    <div className="items-stretch rounded flex gap-2.5 max-md:justify-center">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/45a95925-908b-4ce8-82b4-ab16b8b62b90?apiKey=f9ba415858cf46368ca603b39703e5c7&"
                            className="aspect-square object-contain object-center w-3.5 overflow-hidden self-center shrink-0 max-w-full my-auto cursor-pointer"
                        />
                        <div className="bg-blue-500 flex w-px shrink-0 h-5 flex-col" />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c9f235f-6c4b-4e29-a613-1de6f1311eaf?apiKey=f9ba415858cf46368ca603b39703e5c7&"
                            className="aspect-square object-contain object-center w-3 overflow-hidden self-center shrink-0 max-w-full my-auto cursor-pointer"
                        />
                    </div>
                </div>


            </div>



            <div className="items-stretch self-center flex justify-between gap-7 relative w-fit max-md:flex-wrap">
                <div className="flex items-center gap-3 px-1 max-md:justify-center">
                    <div className="self-stretch flex grow basis-[0%] flex-col items-center">
                        <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-center items-stretch bg-white self-center w-fit px-1 mx-4 mt-5">
                            Minimum Pay
                        </div>
                        <input
                            type="text"
                            name="Minimum Pay"
                            className="px-3 max-w-[125px] text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch-px-1 py-2.5 border-solid"
                            placeholder="Minimum Pay"
                        />

                    </div>
                    <div className="text-black text-base leading-6 tracking-normal relative top-4">
                        to
                    </div>
                    <div className="self-stretch flex grow basis-[0%] flex-col items-center">

                        <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-center items-stretch bg-white self-center w-fit px-1 mx-4 mt-5">
                            Maximum Pay
                        </div>

                        <input
                            type="text"
                            name="Maximum Pay"
                            className="px-3 max-w-[125px] text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch py-2.5 border-solid"
                            placeholder="Maximum Pay"
                        />
                    </div>
                </div>

                <div className="flex grow basis-[0%] flex-col items-center">
                    <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-center items-stretch bg-white self-center w-fit px-1 mx-4 mt-5 mr-32">
                        Rate
                    </div>

                        <div className="justify-end items-stretch rounded border border-[color:var(--Blue-1,#2F80ED)] self-center w-[185px] max-w-full gap-5 border-solid max-md:flex-wrap flex">
                            <select className="flex justify-end items-stretch rounded self-center w-[500px] max-w-full gap-5 px-4 py-3 max-md:flex-wrap">
                                <option value="PER WEEK">Per Week</option>
                                <option value="PER MONTH">Per Month</option>
                                <option value="PER YEAR">Per Year</option>
                            </select>
                        </div>
                </div>
            </div>
            <input type="submit" value="Continue"
                   className="text-white text-base font-semibold leading-6 tracking-normal whitespace-nowrap justify-center items-stretch bg-blue-500 self-center w-[120px] max-w-fit ml-48 mt-8 mb-96 ml-96 px-4 py-2 rounded-xl max-md:mb-10 rounded-xl self-end cursor-pointer" />
        </form>
    );
}











