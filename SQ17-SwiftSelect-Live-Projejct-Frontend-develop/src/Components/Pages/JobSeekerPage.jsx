import {JobSeekerProfile} from "../profile/jobseekerProfile/JobSeekerProfile.jsx";
import {JobPostsFullPage} from "../findJobPosts/JobPostsFullPage.jsx";
import {JobPostSeeMore} from "../findJobPosts/JobPostSeeMore.jsx";
import {JobPostsForOneCompany} from "../findJobPosts/JobPostsForOneCompany.jsx";
import {useEffect, useState} from "react";
import {JobSeekerTopHeader} from "../profile/profileComponents/JobSeekerTopHeader.jsx";
import axios from "../../api/axios.jsx";
import {ChatPage} from "./ChatPage.jsx";
import {Route, Routes} from "react-router-dom";
import {LandingPage} from "./landingPage/LandingPage.jsx";
import {LoginForm} from "../Authentication/LoginForm.jsx";
import {JobSeekerSignUpForm} from "../Authentication/JobSeekerSignUpForm.jsx";
import {EmployerSignUpForm} from "../Authentication/EmployerSignupForm.jsx";
import {ResetPasswordEmail} from "../Authentication/ResetPasswordEmail.jsx";
import {ResetPassword} from "../Authentication/ResetPassword.jsx";
import {EmployerPage} from "./EmployerPage.jsx";

export const JobSeekerPage = () => {

    const [dep, setDep] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            await axios.get("/job-seeker", {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }).then(
                response => {
                    setUserData(response.data.data);
                    console.log(response.data.data)
                }
            )
        }

        fetchData()

    }, [dep]);


    const [userData, setUserData] = useState();


    const [page, setPage] = useState("find-jobs")

    const handleFindJobPage = () => {
        setPage("find-jobs")
    }

    const handleProfilePage = () => {
        setPage("jobSeeker-profile")
    }

    const handleSeeMore = () => {
        setPage("find-jobs-see-more")
    }

    const handleFindJobsOneCompany = () => {
        setPage("find-jobs-one-company")
    }

    const handleChatPage = () => {
        setPage("chat")
    }

    return(
        <div className="mb-15">
            <JobSeekerTopHeader
                handleFindJobPage={handleFindJobPage}
                handleProfilePage={handleProfilePage}
                userData={userData}
                handleChat={handleChatPage}
            />

            { page === "find-jobs" && <JobPostsFullPage
                handleSeeMore={handleSeeMore}
                handleFindJobsOneCompany={handleFindJobsOneCompany}
                userData={userData}
            /> }

            { page === "find-jobs-see-more" && <JobPostSeeMore handleFindJobsOneCompany={handleFindJobsOneCompany} /> }
            { page === "find-jobs-one-company" && <JobPostsForOneCompany companyName="Decagon Institute"/> }
            { page === "jobSeeker-profile" && <JobSeekerProfile setDep={() => {setDep(!dep)}} userData={userData} /> }
            { page === "chat" && <ChatPage/>}
        </div>
    )
}