import * as React from "react";
import LogoutButton from "../Authentication/LogoutButton.jsx";

export const ProfilePopUp = ({handleProfile, handleProfilePop}) => {

    const handleClickProfile = () => {
        handleProfile();
        handleProfilePop();
    }

  return (
    <div className="items-stretch bg-white flex flex-col py-4 w-fit px-6 rounded-xl">
      <header className="text-sky-500 text-xl leading-7 tracking-normal justify-center items-stretch bg-white w-full py-2 max-md:px-1">
          {localStorage.getItem("email")}
      </header>
      <div onClick={handleClickProfile} className="cursor-pointer hover:bg-blue-300 ease-in-out duration-200 items-center bg-white flex w-full gap-2.5 pl-8 pr-16 p-2 max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/25326447-9b80-4304-aa76-fe139ec3e020?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"
          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
          alt="Profile"
        />
        <div className="text-gray-900 text-xl leading-7 tracking-normal">
          Profile
        </div>
      </div>
      <div className="border-radius-[1rem] cursor-pointer hover:bg-blue-300 ease-in-out duration-200 items-center bg-white flex w-full gap-2.5 pl-8 pr-14 py-2 max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2ad5336-2262-4b80-9df4-826195bc0b06?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"
          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
          alt="Settings"
        />
        <div className="text-gray-900 text-xl leading-7 tracking-normal">
          Settings
        </div>
      </div>
      <LogoutButton/>
    </div>
  );
}