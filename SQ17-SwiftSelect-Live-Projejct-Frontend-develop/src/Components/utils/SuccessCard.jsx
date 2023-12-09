import * as React from "react";

export const SuccessCard = (props) => {
    return (
        <>
            <div className={`absolute w-[100vw] h-[102vh] justify-center align-center ${props.bgColor} opacity-[0.9]`} style={{zIndex: 2}}>
            </div>
                <div className="absolute justify-center items-center bg-gray-100 flex flex-col px-8 rounded-2xl max-md:px-5 max-w-[33rem] max-h-[26rem]" style={{zIndex: 5}}>
                    <div className="text-blue-500 text-center text-2xl font-medium leading-8 w-[380px] max-w-[380px] mt-8">
                        {props.message}
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e965885-3d69-4c85-813f-e012e9815ba1?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"
                        className="aspect-square object-contain object-center w-20 overflow-hidden max-w-full mt-8"
                    />
                    <div className="text-zinc-500 text-center text-base font-medium leading-6 self-stretch mt-8 max-md:max-w-full">
                        {props.details}
                    </div>

                    <button onClick={props.handleClick} className="text-gray-50 text-base font-semibold leading-4 whitespace-nowrap justify-center items-center bg-blue-500 self-stretch my-8 px-5 py-4 rounded-xl max-md:max-w-full">
                            {props.buttonName}
                    </button>
                </div>
        </>
    );
}