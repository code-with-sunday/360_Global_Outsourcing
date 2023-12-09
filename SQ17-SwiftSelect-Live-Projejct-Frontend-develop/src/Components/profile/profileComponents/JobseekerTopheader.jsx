import * as React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";
import {ProfilePopUp} from "../../utils/ProfilePopUp.jsx";
import {NotificationCard} from "../../utils/NotificationCard.jsx";

export const JobSeekerTopHeader = ({handleFindJobPage, handleProfilePage, handleChat}) => {
    const [active, setActive] = useState("findJobs");

    const [profileClick, setProfileCLick] = useState(false);

    const [notificationClick, setNotificationClick] = useState(false);

    const activePageToFindJobs = () => {
        setActive("findJobs");
    }

    const activePageToProfile = () => {
        setActive("profile");
        handleProfilePage();
    }

    const activePageToChat = () => {
        setActive("chat");
    }

    const handleNotificationClick = () => {
        setNotificationClick(!notificationClick)
    }

    const swiftLogo = "src/assets/images/swift_logo.svg";

    return (
        <div className="sticky top-[0] shadow-lg justify-between items-stretch bg-white flex w-full gap-5 px-12 pt-2 max-md:max-w-full max-md:flex-wrap max-md:px-5" style={{zIndex: 4}}>
            <div className="text-blue-500 text-xl leading-7 tracking-normal my-auto">
                <img className="w-14/14 h-20 cursor-pointer" src={swiftLogo} alt="Company Logo" />
            </div>

            <div className="self-center flex gap-6 my-auto">
                <div onClick={handleFindJobPage} className="group relative cursor-pointer">
                    <div onClick={activePageToFindJobs} className={`${ active === "findJobs" ? "active-nav" : "" } text-black-200 text-base font-bold leading-6 tracking-normal transition-colors duration-300 group-hover:text-blue-500 whitespace-nowrap`}>
                        Find Jobs
                    </div>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform origin-bottom scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </div>

                <div onClick={handleProfilePage} className="group relative cursor-pointer">
                    <div onClick={activePageToProfile} className={`${ active === "profile" ? "active-nav" : "" } text-black-200 text-base font-bold leading-6 tracking-normal transition-colors duration-300 group-hover:text-blue-500 whitespace-nowrap`}>
                        Profile
                    </div>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform origin-bottom scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </div>
            </div>

            <div className="items-stretch flex justify-between gap-5 max-md:justify-center">
                <div onClick={handleChat} className="aspect-square object-contain object-center w-8 overflow-hidden self-center shrink-0 max-w-full my-auto cursor-pointer" >
                    <div onClick={activePageToChat} className={`${ active === "chat" ? "active-nav" : "" } text-black-200 text-base font-bold leading-6 tracking-normal transition-colors duration-300 group-hover:text-blue-500 whitespace-nowrap`}>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c7e0a42-5e50-438b-9071-3e586df5aa6b?apiKey=2a664b353843410292501e6f128833a4&"
                            className="aspect-square object-contain object-center w-8 overflow-hidden self-center shrink-0 max-w-full my-auto cursor-pointer"
                            alt="chat"
                        />
                    </div>
                </div>

                <img
                    onClick={handleNotificationClick}
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/73249c3c-c15c-417f-834f-3787ae54f692?apiKey=2a664b353843410292501e6f128833a4&"
                    className="aspect-square object-contain object-center w-8 overflow-hidden self-center shrink-0 max-w-full my-auto cursor-pointer"
                    alt="notification"
                />

                <div onClick={() => (setProfileCLick(!profileClick))} className="relative cursor-pointer">
                    <img
                        loading="lazy"
                        src={`${localStorage.getItem("profilePicture")}`}
                        className="aspect-square object-cover object-center w-[60px] h-[60px] rounded-full"
                        alt="Your alt text"
                    />
                    <div className="absolute bottom-5 right-2 w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                </div>
            </div>

            { notificationClick &&
                <div className="absolute right-[2rem] top-[5.8rem] rounded-2xl shadow-2xl">
                    <NotificationCard
                    />
                </div>
            }

            { profileClick &&
                <div className="absolute right-[2rem] top-[5.8rem] shadow-2xl">
                    <ProfilePopUp handleProfilePop={() => (setProfileCLick(!profileClick))} handleProfile={activePageToProfile} />
                </div>
            }
        </div>
    )
};