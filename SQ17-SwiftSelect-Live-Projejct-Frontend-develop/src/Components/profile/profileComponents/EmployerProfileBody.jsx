import * as React from "react";
import {useState} from "react";

export const EmployerProfileBody= () => {
    const [panel, setPanel] = useState(0)

    return(
        <div className="self-center w-[872px] max-w-full mt-12 mb-14 max-md:my-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0">
                    <div className="items-stretch flex flex-col px-2 py-1 max-md:mt-10">
                        {panel === 0 && (
                            <div className="justify-between items-stretch flex w-full gap-5">
                                <div className="items-stretch flex justify-between gap-4 px-5">
                                    <img className="links" onClick={() => setPanel(0)}
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/eaad2891-2894-4d77-9674-11436e08267e?apiKey=2a664b353843410292501e6f128833a4&"
                                        className={`aspect-square object-contain object-center w-10 justify-center items-center overflow-hidden shrink-0 max-w-full ${
                                            panel === 0 ? 'hover:text-blue-500 cursor-pointer' : 'cursor-pointer'
                                        }`}
                                    />
                                    <div
                                        className={`text-${
                                            panel === 0 ? 'black' : 'blue-500'
                                        } text-base font-medium leading-6 tracking-normal self-center whitespace-nowrap my-auto hover:text-blue-500 cursor-pointer`}
                                    >
                                        <a className="links" onClick={() => setPanel(0)}>Company Information</a>
                                    </div>
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/92c4eeef-7086-455a-93c6-2443e20043f6?apiKey=2a664b353843410292501e6f128833a4&"
                                    className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                                />
                            </div>
                        )}

                        {panel === 1 && (
                            <div className="justify-between items-stretch flex w-full gap-5">
                                <div className="items-stretch flex justify-between gap-4 px-5">
                                    <div className="justify-center items-center rounded border-[color:var(--Grey-300,#D0D5DD)] flex flex-col px-2 border-[0.5px] border-solid"><div className="justify-center items-center rounded flex flex-col px-2">
                                        <img className="links" onClick={() => setPanel(1)}
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/34441edd-8da1-4bdc-83b9-c552704b4d11?apiKey=2a664b353843410292501e6f128833a4&"
                                            className={`aspect-square object-contain object-center w-6 overflow-hidden my-2 ${
                                                panel === 1 ? 'hover:text-blue-500 cursor-pointer' : 'cursor-pointer'
                                            }`}
                                        />
                                    </div>
                                    </div>
                                    <div
                                        className={`text-${
                                            panel === 1 ? 'blue-500' : 'black'
                                        } text-base font-medium leading-6 tracking-normal self-center whitespace-nowrap my-auto hover:text-blue-500 cursor-pointer`}
                                    >
                                        <a className="links" onClick={() => setPanel(0)}>Company Information</a>
                                    </div>
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/92c4eeef-7086-455a-93c6-2443e20043f6?apiKey=2a664b353843410292501e6f128833a4&"
                                    className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                                />
                            </div>
                        )}

                        {panel === 0 && (
                            <div className="justify-between items-stretch flex w-full gap-5 mt-6">
                                <div className="items-stretch flex justify-between gap-4 px-5">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/35d2f6d1-82e9-4a0e-98c3-a098faa53329?apiKey=2a664b353843410292501e6f128833a4&"
                                        className={`aspect-square object-contain object-center w-10 justify-center items-center overflow-hidden shrink-0 max-w-full ${
                                            panel === 0 ? 'hover:text-blue-500 cursor-pointer' : 'cursor-pointer'
                                        }`}
                                    />
                                    <div
                                        className={`text-${
                                            panel === 0 ? 'black' : 'blue-500'
                                        } text-base leading-6 tracking-normal self-center whitespace-nowrap my-auto hover:text-blue-500 cursor-pointer`}
                                    >
                                        <a className="links" onClick={() => setPanel(1)}>Contact Information</a>
                                    </div>
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/62271dac-62ac-4ee4-92c6-6598ce54b2a7?apiKey=2a664b353843410292501e6f128833a4&"
                                    className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                                />
                            </div>
                        )}

                        {panel === 1 && (
                            <div className="justify-between items-stretch flex w-full gap-5 mt-6">
                                <div className="items-stretch flex justify-between gap-4 px-5">
                                    <div className="justify-center items-center rounded border-[color:var(--Grey-300,#D0D5DD)] bg-blue-500 flex flex-col px-2 border-[0.5px] border-solid">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa0f324b-ac4e-45e2-a795-b77e584fc6e7?apiKey=2a664b353843410292501e6f128833a4&"
                                            className={`aspect-square object-contain object-center w-6 overflow-hidden my-2 ${
                                                panel === 1 ? 'hover:text-blue-500 cursor-pointer' : 'cursor-pointer'
                                            }`}
                                        />
                                    </div>
                                    <div
                                        className={`text-${
                                            panel === 1 ? 'blue-500' : 'black'
                                        } text-base leading-6 tracking-normal self-center whitespace-nowrap my-auto hover:text-blue-500 cursor-pointer`}
                                    >
                                        <a className="links" onClick={() => setPanel(1)}>Contact Information</a>
                                    </div>
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/62271dac-62ac-4ee4-92c6-6598ce54b2a7?apiKey=2a664b353843410292501e6f128833a4&"
                                    className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                                />
                            </div>
                        )}


                    </div>
                </div>
                {panel === 0 && (
                    <form className="flex flex-col items-stretch w-[61%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="items-end flex grow flex-col max-md:max-w-full max-md:mt-10">
                            <label
                                htmlFor="full-name"
                                className="text-blue-500 text-lg leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-white w-[125px] max-w-full py-1 self-start max-md:ml-2.5"
                            >
                                Company's Name
                            </label>
                            <input
                                type="text"
                                id="full-name"
                                className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full mt-2"
                                placeholder="Debby's Craft"
                            />
                            <label
                                htmlFor="full-name"
                                className="text-blue-500 text-lg leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-white w-[125px] max-w-full py-1 self-start max-md:ml-2.5 mt-2"
                            >
                                Description
                            </label>
                            <input
                                type="text"
                                id="job-title"
                                className="text-black text-base leading-6 tracking-normal whitespace-nowrap justify-center rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                                placeholder="Introduce your company "
                            />
                            <label
                                htmlFor="full-name"
                                className="text-blue-500 text-lg leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-white w-[125px] max-w-full py-1 self-start max-md:ml-2.5 mt-2"
                            >
                                Company's Address
                            </label>
                            <input
                                type="tel"
                                id="phone-number"
                                className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                                placeholder="34, trust the process street lekki lagos"
                            />
                            <label
                                htmlFor="full-name"
                                className="text-blue-500 text-lg leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-white w-[125px] max-w-full py-1 self-start max-md:ml-2.5 mt-2"
                            >
                                City/State
                            </label>
                            <input
                                type="tel"
                                id="phone-number"
                                className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                                placeholder="Eti Osa, Lagos"
                            />
                            <label
                                htmlFor="full-name"
                                className="text-blue-500 text-lg leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-white w-[125px] max-w-full py-1 self-start max-md:ml-2.5 mt-2"
                            >
                                Company's Industry
                            </label>
                            <input
                                type="tel"
                                id="phone-number"
                                className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                                placeholder="Art Craft"
                            />

                            <label
                                htmlFor="company-type"
                                className="text-blue-500 text-lg leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-white w-[125px] max-w-full py-1 self-start max-md:ml-2.5 mt-2"
                            >
                                Company's Type
                            </label>
                            <select
                                id="company-type"
                                className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full "
                            >
                                <option value="" hidden >Select an option</option>
                                <option value="private">Private</option>
                                <option value="public">Public</option>
                                <option value="non-profit">Non-profit</option>

                            </select>

                            <label
                                htmlFor="number-of-employees"
                                className="text-blue-500 text-lg leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-white w-[125px] max-w-full py-1 self-start max-md:ml-2.5 mt-2"
                            >
                                Number of Employees
                            </label>
                            <select
                                id="number-of-employees"
                                className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                            >
                                <option value="" hidden>Select an option</option>
                                <option value="1-50">1-49</option>
                                <option value="50-100">51-99</option>
                                <option value="100-999">100-999</option>
                                <option value="> 1000">&gt;1000</option>
                            </select>
                            <label
                                htmlFor="full-name"
                                className="text-blue-500 text-lg leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-white w-[125px] max-w-full py-1 self-start max-md:ml-2.5 mt-2"
                            >
                                Company's Website
                            </label>
                            <input
                                type="tel"
                                id="phone-number"
                                className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                                placeholder="www.swiftselect.com"
                            />
                            <label
                                htmlFor="full-name"
                                className="text-blue-500 text-lg leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-white w-[125px] max-w-full py-1 self-start max-md:ml-2.5 mt-2"
                            >
                                Company's Linkedin Profile
                            </label>
                            <input
                                type="tel"
                                id="phone-number"
                                className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                                placeholder="https://www.linkedin.com/in/swiftselect"
                            />
                            <label
                                htmlFor="full-name"
                                className="text-blue-500 text-lg leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-white w-[125px] max-w-full py-1 self-start max-md:ml-2.5 mt-2"
                            >
                                Other Social Media Profile
                            </label>
                            <input
                                type="tel"
                                id="phone-number"
                                className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                                placeholder="https://www.linkedin.com/in/swiftselect"
                            />

                            <button
                                type="submit"
                                className="text-white text-base font-semibold leading-6 tracking-normal whitespace-nowrap justify-center items-stretch bg-blue-500 w-[145px] max-w-full mt-8 px-4 py-2 rounded-xl self-end"
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                )}

                {panel === 1 && (
                    <form className="flex flex-col items-stretch w-[61%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="items-end flex grow flex-col max-md:max-w-full max-md:mt-10">
                            <label
                                htmlFor="full-name"
                                className="text-blue-500 text-lg leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-white w-[125px] max-w-full py-1 self-start max-md:ml-2.5"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="full-name"
                                className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full mt-2"
                                placeholder="Deborah Olaide"
                            />
                            <label
                                htmlFor="full-name"
                                className="text-blue-500 text-lg leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-white w-[125px] max-w-full py-1 self-start max-md:ml-2.5 mt-2"
                            >
                                Job Title
                            </label>
                            <input
                                type="text"
                                id="job-title"
                                className="text-black text-base leading-6 tracking-normal whitespace-nowrap justify-center rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                                placeholder="CEO"
                            />
                            <label
                                htmlFor="full-name"
                                className="text-blue-500 text-lg leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-white w-[125px] max-w-full py-1 self-start max-md:ml-2.5 mt-2"
                            >
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone-number"
                                className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                                placeholder="070444411111"
                            />
                            <button
                                type="submit"
                                className="text-white text-base font-semibold leading-6 tracking-normal whitespace-nowrap justify-center items-stretch bg-blue-500 w-[145px] max-w-full mt-8 px-4 py-2 rounded-xl self-end"
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}