import * as React from "react";

export const PostNewJobContactDetailsPage = ()=> {
    return (
        <div className="items-start flex flex-col max-w-[546px] p-[23px] relative">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae2c5c60-7d3a-4029-9c40-12e1fd921dd6?"
                className="aspect-square object-contain w-8 overflow-hidden shrink-0 max-w-full self-end absolute right-6 top-6"
            />
            <form className="items-start flex flex-col max w-[500px]">
                <div className="relative top-2.5 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-white w-fit max-w-full ml-4 mt-4 p-1 self-start max-md:ml-2.5">
                    Send daily updates to who?
                </div>

                <input
                    type="text"
                    name="updateEmail"
                    placeholder="Contact Email"
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch w-full px-4 py-2.5 border-solid max-md:max-w-full"
                />

                <div className="relative top-2.5 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-white w-fit max-w-full ml-4 mt-4 p-1 self-start max-md:ml-2.5">
                    Contact Name
                </div>

                <input
                    type="text"
                    name="name"
                    placeholder="Contact Name"
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch w-full px-4 py-2.5 border-solid max-md:max-w-full"
                />

                <div className="relative top-2.5 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-white w-fit max-w-full ml-4 mt-4 p-1 self-start max-md:ml-2.5">
                    Contact Phone Number
                </div>

                <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch w-full px-4 py-2.5 border-solid max-md:max-w-full"
                />

                <div className="relative top-2.5 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-white w-fit max-w-full ml-4 mt-4 p-1 self-start max-md:ml-2.5">
                    How to Apply
                </div>
                <div className="items-start self-stretch border border-[color:var(--Blue-1,#2F80ED)] bg-white flex w-full flex-col pt-4 pb-0.5 px-5 rounded-md border-solid max-md:max-w-full">
                    <div className="items-stretch flex w-[290px] max-w-full gap-4 self-start max-md:ml-0 max-md:justify-center">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/347caf87-fdca-402e-b154-4d65dcde387d?"
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f588080-062f-48ce-b741-dabc70c9fb0c?"
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/323a3aa7-272d-45dd-b7ea-7ee7bed3d6ce?"
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7440730-1b96-4a91-8f9a-2d65cb35fb63?"
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9cf5bef-4d2f-4ad6-b918-695a2aa950cb?"
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/868c09a8-d917-4cfd-af8c-dec7d36426dc?"
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/318e5c35-00a0-4de4-b312-d78973e1060b?"
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5849f60e-cc74-44a3-ae0a-11c888e67952?"
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc59f65b-4db4-4a40-9ca2-43fd7734a231?"
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                    </div>
                    <div className="self-stretch bg-blue-500 flex min-h-[1px] w-full flex-col -mr-5 mt-4 max-md:max-w-full" />

                    <textarea placeholder="Type your message" className="text-black text-base leading-6 tracking-normal whitespace-normal rounded bg-transparent focus:outline-none w-[500px] max-w-full py-2.5 resize-none">

                    </textarea>

                    <div className="justify-between self-stretch flex w-full gap-5 -mr-5 mt-3 max-md:max-w-full max-md:flex-wrap py-3">
                        <div className="items-stretch flex gap-4 my-auto max-md:justify-center">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/41d79553-f1ab-4095-851b-f5bd084bd609?"
                                className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
                            />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/25335356-d5a7-43ca-8b60-d71bac54971b?"
                                className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
                            />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fdedba0-6d69-4257-8a32-cf907fc02566?"
                                className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
                            />
                        </div>
                        <div className="items-stretch rounded flex gap-2.5 max-md:justify-center">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e53da63-bea0-4246-9e67-bb2884ed29ef?"
                                className="aspect-square object-contain object-center w-3.5 overflow-hidden self-center shrink-0 max-w-full my-auto"
                            />
                            <div className="bg-blue-500 flex w-px shrink-0 h-5 flex-col" />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/903eacb7-a36e-4cf2-a176-db7afa9abb10?"
                                className="aspect-square object-contain object-center w-3 overflow-hidden self-center shrink-0 max-w-full my-auto"
                            />
                        </div>
                    </div>
                </div>
                <div className="relative top-2.5 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-white w-fit max-w-full ml-4 mt-4 p-1 self-start max-md:ml-2.5">
                    Application deadline
                </div>

                <input
                    type="date"
                    name="applicationDeadline"
                    placeholder="Application Deadline"
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch w-full px-4 py-2.5 border-solid max-md:max-w-full"
                />

                <div className="relative top-2.5 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-white w-fit max-w-full ml-4 mt-3.5 p-1 self-start max-md:ml-2.5">
                    Application Link/URL
                </div>

                <input
                    type="text"
                    name="applicationUrl"
                    placeholder="Application Link"
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch w-full px-4 py-2.5 border-solid max-md:max-w-full"
                />

                <input
                    type="submit"
                    name="submit"
                    value="Submit"
                    className="text-white cursor-pointer text-center text-base font-semibold leading-6 tracking-normal whitespace-nowrap justify-center items-stretch bg-blue-500 w-[88px] max-w-full mt-10 px-4 py-2 rounded-xl self-end"
                />
            </form>
        </div>
    );
}

