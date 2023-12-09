import * as React from "react";

export const FeatureButton = (props) => {
    return (
        <div className="items-stretch bg-white flex flex-col">
            <div className="items-center bg-white flex w-full gap-2.5 mt-2 px-8 py-2 max-md:px-5">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/16fa13ba-5e7a-41ec-ab09-8cd28a94eaec?"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                />
                <div onClick={props.download} className="text-gray-900 text-xl leading-7 tracking-normal self-stretch whitespace-nowrap cursor-pointer">
                    Download File
                </div>
            </div>
            <div className="items-center bg-white flex w-full gap-2.5 px-8 py-2 max-md:px-5">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b8b2586-776c-4d6a-acf0-65272195b366?"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                />
                <div onClick={props.replace} className="text-gray-900 text-xl leading-7 tracking-normal self-stretch whitespace-nowrap cursor-pointer">
                    Replace File
                </div>
            </div>
            <div className="items-center bg-white flex w-full gap-2.5 mb-2 px-8 py-2 max-md:px-5">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9625c27-3237-4d42-9adc-d41dcb928cdb?"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                />
                <div onClick={props.delete} className="text-rose-500 text-xl leading-7 tracking-normal self-stretch whitespace-nowrap cursor-pointer">
                    Delete
                </div>
            </div>
        </div>
    );
}