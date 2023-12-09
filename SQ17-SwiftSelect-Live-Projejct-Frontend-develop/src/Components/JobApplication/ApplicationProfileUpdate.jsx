import * as React from "react";

export const ApplicationProfileUpdate = ({handleShowInfo, userData}) => {

    return (
        <form className="items-end flex flex-col max-w-[500px]">
            <div className="text-zinc-500 text-base font-semibold leading-6 tracking-normal self-stretch w-full max-md:max-w-full">
                Contact Information
            </div>

            <div className="relative top-2.5 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-white w-fit max-w-full ml-4 mt-1 p-1 self-start max-md:ml-2.5">
                First name
            </div>
            <input
                type="text"
                name="firstName"
                value={userData.firstName}
                className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch w-full px-4 py-2.5 border-solid max-md:max-w-full"
                placeholder="First Name"
            />

            <div className="relative top-2.5 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-white w-fit max-w-full ml-4 mt-4 p-1 self-start max-md:ml-2.5">
                Last name
            </div>
            <input
                type="text"
                name="lastName"
                value={userData.lastName}
                className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch w-full px-4 py-2.5 border-solid max-md:max-w-full"
                placeholder="Last Name"
            />

            <div className="relative top-2.5 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-white w-fit max-w-full ml-4 mt-4 p-1 self-start max-md:ml-2.5">
                Phone number
            </div>
            <input
                type="tel"
                name="phoneNumer"
                value={userData.phoneNumber}
                className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch w-full px-4 py-2.5 border-solid max-md:max-w-full"
                placeholder="Phone number"
            />

            <div className="text-zinc-500 text-base font-semibold leading-6 tracking-normal self-stretch w-full mt-6 max-md:max-w-full">
                Location Information
            </div>

            <div className="relative top-2.5 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-white aspect-[1.25] ml-4 mt-4 p-1 self-start max-md:ml-2.5">
                City
            </div>
            <input
                type="text"
                name="city"
                value={userData.city}
                className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch w-full px-4 py-2.5 border-solid max-md:max-w-full"
                placeholder="city"
            />
            <div className="relative top-2.5 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-white aspect-[1.5714285714285714] ml-4 mt-4 p-1 self-start max-md:ml-2.5">
                State
            </div>
            <input
                type="text"
                name="state"
                value={userData.state}
                className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch w-full px-4 py-2.5 border-solid max-md:max-w-full"
                placeholder="state"
            />

            <div className="relative top-2.5 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-white w-fit max-w-full ml-4 mt-4 p-1 self-start max-md:ml-2.5">
                Postal code
            </div>
            <input
                type="text"
                name="postalCode"
                value={userData.postalCode}
                className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch w-full px-4 py-2.5 border-solid max-md:max-w-full"
                placeholder="postal code"
            />
            <div onClick={handleShowInfo} className="text-white text-base font-semibold leading-6 tracking-normal whitespace-nowrap justify-center items-stretch bg-blue-500 w-[145px] max-w-full mt-6 px-4 py-2 rounded-xl self-end cursor-pointer">
                Save Changes
            </div>
        </form>
    );
}