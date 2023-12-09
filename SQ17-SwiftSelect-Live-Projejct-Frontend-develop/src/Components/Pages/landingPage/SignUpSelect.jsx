import * as React from "react";
import { Link } from "react-router-dom";

export const SignUpSelect = () => {
    return (
        <div className="fixed w-[100vw] h-[100vh] flex items-center justify-center z-10">
            <div className={`absolute w-[100vw] h-[102vh] justify-center align-center bg-black opacity-[0.9]`} style={{zIndex: 2}}>
            </div>
            <div className="absolute justify-center items-center bg-gray-100 flex flex-col px-8 rounded-2xl max-md:px-5 w-[35vw] h-[50vh]" style={{zIndex: 5}}>

                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e965885-3d69-4c85-813f-e012e9815ba1?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"
                    className="my-8 aspect-square object-contain object-center w-20 overflow-hidden max-w-full mt-8"
                 alt=""
                />

                <Link to="/employer-signup" className="hover:bg-[#2563EB] text-center text-gray-50 text-base font-semibold leading-4 whitespace-nowrap justify-center items-center bg-blue-500 self-stretch my-4 px-5 py-6 my-8 rounded-xl max-md:max-w-full">
                    Sign Up as an Employer
                </Link>

                <Link to="/jobseeker-signup" className="hover:bg-[#2563EB] mb-5 text-center text-gray-50 text-base font-semibold leading-4 whitespace-nowrap justify-center items-center bg-blue-500 self-stretch px-5 py-6 rounded-xl max-md:max-w-full">
                    Sign Up as a Job Seeker
                </Link>
            </div>
        </div>
    );
}