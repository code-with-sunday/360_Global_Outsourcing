
import * as React from "react";
import {ProfileMidHeader} from "../profileComponents/ProfileMidHeader.jsx";
import {Qualification} from "./qualification/Qualification.jsx";
import {JobPreference} from "./jobPreference/JobPreference.jsx";
import {PersonalInfo} from "./personalInfo/PersonalInfo.jsx";
import {CV} from "./resume/CV.jsx";
import {useState} from "react";
import "../../../App.css"
import {ProfilePictureUpload} from "../profileComponents/ProfilePictureUpload.jsx";

export const JobSeekerProfile = ({userData, setDep})=> {
    const [page, setPage] = useState("personalInfo");
    const [changeAvatar, setChangeAvatar] = useState(false)

    const handleChangeAvatar = () => {
        setChangeAvatar(!changeAvatar);
    }

    return (
        <div className="bg-white relative flex flex-col items-stretch h-[50rem]">

            { changeAvatar &&
                <ProfilePictureUpload
                    handleChangeAvatar={handleChangeAvatar}
                />
            }

            <ProfileMidHeader
                userData={userData}
                handleChangeAvatar={handleChangeAvatar}
            />

            <div className="justify-between self-center w-[872px] max-w-full mt-10 px-5">
                <div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0 gap-5">
                    <div onClick={() => {setPage("personalInfo")}} className={`${page === "personalInfo" ? "active-nav" : "" } profile-nav pr-5 hover:text-blue-500 duration-300 group-hover:text-blue-500 whitespace-nowrap cursor-pointer`}>
                        Personal Information
                    </div>
                    <div onClick={() => {setPage("cv")}} className={`${page === "cv" ? "active-nav" : "" } profile-nav pr-5 hover:text-blue-500 duration-300 group-hover:text-blue-500 whitespace-nowrap cursor-pointer`}>
                        Resume
                    </div>
                    <div onClick={() => {setPage("qualification")}} className={`${page === "qualification" ? "active-nav" : "" } profile-nav pr-5 hover:text-blue-500 duration-300 group-hover:text-blue-500 whitespace-nowrap cursor-pointer`}>
                        Qualification
                    </div>
                    <div onClick={() => {setPage("jobPreference")}} className={`${page === "jobPreference" ? "active-nav" : "" } profile-nav pr-5 hover:text-blue-500 duration-300 group-hover:text-blue-500 whitespace-nowrap cursor-pointer`}>
                        Job Preference
                    </div>
                </div>
            </div>

            <div className="w-[860px] mx-auto mt-10">
                {page === "personalInfo" && <PersonalInfo setDep={setDep} userData={userData} /> }
                {page === "cv" && <CV setDep={setDep} userData={userData} /> }
                {page === "qualification" && <Qualification setDep={setDep} userData={userData} /> }
                {page === "jobPreference" && <JobPreference setDep={setDep} userData={userData} /> }
            </div>
        </div>
    );
}


