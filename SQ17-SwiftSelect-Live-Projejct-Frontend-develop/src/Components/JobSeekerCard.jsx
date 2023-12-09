import * as React from "react";
import ProfilePic from "../assets/Ellipse 1.svg";

export const JobSeekerCard = () => {
    return (
        <div className="items-stretch w-[16.2rem] h-[14.05rem] shadow-lg bg-white flex flex-col px-6 rounded-xl max-md:px-5">
            <div className="items-stretch flex flex-col mt-4">
                <div className="justify-between items-stretch flex gap-5">
                    <img
                        loading="lazy"
                        // srcSet="..."
                        src={ProfilePic}
                        className="aspect-square object-contain object-center w-[50px] overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6e42988-0629-427e-8abd-6a68783e5d88?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                </div>
                <div className="text-black text-base font-medium leading-6 tracking-normal whitespace-nowrap mt-3">
                    Ayomide Fatogun
                </div>
                <div className="text-black text-sm font-light leading-5 tracking-normal whitespace-nowrap">
                    Junior UI/UX Designer
                </div>
            </div>
            <div className="justify-between items-stretch flex w-full gap-5 mt-4">
                <div className="items-stretch flex justify-between gap-1">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8762052-5cdd-42d8-9653-b6c930c7f321?"
                        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-blue-500 text-xs leading-4 tracking-normal whitespace-nowrap">
                        Resume-ayomi.pdf
                    </div>
                </div>
                <div className="items-stretch flex gap-1 max-md:justify-center">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc25c092-2314-4539-b340-e6f2545428bb?"
                        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c6d0b28-420a-4be3-8339-9bb28e5f6562?"
                        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c389360-5d7f-42e4-8b20-cb264ed409ca?"
                        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                    />
                </div>
            </div>
            <div className="justify-between items-stretch flex gap-3 mt-6 mb-4">
                <div className="justify-between items-stretch rounded bg-blue-100 flex gap-2 px-2.5 py-2">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc160dbb-7e55-4e5e-944d-0294c09958f6?"
                        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                    />
                    <a href="mailto:emmanuelibenwankwo@gmail.com" className="cursor-pointer text-blue-500 text-xs leading-4 tracking-normal whitespace-nowrap">
                        Send Email
                    </a>
                </div>
                <div className="justify-between items-stretch rounded bg-emerald-100 flex gap-2 px-2.5 py-2">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/73b6062f-7168-4333-bd1c-d9f093858760?"
                        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-green-500 text-xs leading-4 tracking-normal whitespace-nowrap">
                        Message
                    </div>
                </div>
            </div>
        </div>
    );
}