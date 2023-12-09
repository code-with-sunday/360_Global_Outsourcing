import * as React from "react";


export const ProfileMidHeader= ({userData, handleChangeAvatar}) => {

    return(
        <div className="mt-[3rem] justify-between self-center w-[872px] max-w-full px-5">
            <div className="gap-6 flex justify-between max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-fit max-md:w-full max-md:ml-0">
                    <div
                        className="text-black text-4xl font-medium leading-10 tracking-normal my-auto max-md:mt-10">
                        { localStorage.getItem("role") === "JOB_SEEKER" ?
                            `${userData.firstName} ${userData.lastName}` :
                            localStorage.getItem("role") === "EMPLOYER" ?
                                `${userData.companyName}` : "" }
                    </div>
                </div>
                <div className="flex flex-col items-stretch w-[43%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="items-stretch flex grow justify-between gap-4 max-md:mt-10">
                        <img
                            loading="lazy"
                            srcSet={`${userData?.profilePicture}`}
                            className="aspect-square object-cover object-center w-[130px] h-[130px] rounded-full"
                        />
                        <div className="items-stretch flex gap-4 mt-16 ml-4 self-end max-md:mt-10">
                            <button
                                onClick={handleChangeAvatar}
                                className="text-blue-500 text-base font-medium leading-6 tracking-normal whitespace-nowrap justify-center items-stretch border-2 border-[color:var(--Blue-1,#2F80ED)] grow px-4 py-2 rounded-xl border-solid hover:text-white">
                                Change Avatar
                            </button>

                            <div className="text-rose-500 text-base font-medium leading-6 tracking-normal self-center whitespace-nowrap my-auto cursor-pointer">
                                Delete
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}