import * as React from "react";

export const Footer = ()=> {
    return (
        <div className="items-stretch max-w-[1280px] pb-[5rem] mx-auto justify-between self-stretch flex gap-2 max-md:flex-wrap max-md:justify-center">
            <div className="text-slate-900 text-lg font-medium leading-5 mt-3.5">
                Swift Select
            </div>
            <div className="text-slate-600 text-base leading-6 grow shrink basis-auto mt-3 max-md:max-w-full">
                @ 2023. All rights reserved.
            </div>
            <div className="justify-between items-stretch flex gap-5 mt-3 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                <div className="text-slate-600 text-base leading-6 cursor-pointer hover:text-blue-500">Terms</div>
                <div className="text-slate-600 text-base leading-6 cursor-pointer hover:text-blue-500">Privacy</div>
                <div className="text-slate-600 text-base leading-6 cursor-pointer hover:text-blue-500">Support</div>
                <div className="text-slate-600 text-base leading-6 cursor-pointer hover:text-blue-500">
                    <ul>
                        <li>About</li>
                    </ul>
                </div>
                <div className="text-slate-600 text-base leading-6 cursor-pointer hover:text-blue-500">Resources</div>
                <div className="text-slate-600 text-base leading-6 whitespace-nowrap cursor-pointer hover:text-blue-500">
                    Contact
                </div>
            </div>
        </div>
    );
}


