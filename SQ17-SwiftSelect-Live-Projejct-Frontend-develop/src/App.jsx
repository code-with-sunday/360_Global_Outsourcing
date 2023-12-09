import {LoginForm} from "./Components/Authentication/LoginForm.jsx";
import {Route, Routes} from "react-router-dom";
import {ResetPasswordEmail} from "./Components/Authentication/ResetPasswordEmail.jsx";
import {JobSeekerSignUpForm} from "./Components/Authentication/JobSeekerSignUpForm.jsx";
import {ResetPassword} from "./Components/Authentication/ResetPassword.jsx";
import {JobSeekerPage} from "./Components/Pages/JobSeekerPage.jsx";
import {EmployerSignUpForm} from "./Components/Authentication/EmployerSignupForm.jsx";
import {LandingPage} from "./Components/Pages/landingPage/LandingPage.jsx";
import {EmployerPage} from "./Components/Pages/EmployerPage.jsx";
import {useState} from "react";
import {CreateJobPostPage} from "./Components/createJobPost/CreateJobPostPage.jsx";
import {NotificationCard} from "./Components/utils/NotificationCard.jsx";
import {JobPostsForOneCompany} from "./Components/findJobPosts/JobPostsForOneCompany.jsx";


function App() {
    const [user, setUser] = useState();

    return (
    <>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/login" element={<LoginForm onAuth={user => setUser(user)}/>}/>
            <Route path="/jobseeker-signup" element={<JobSeekerSignUpForm/>}/>
            <Route path="/employer-signup" element={<EmployerSignUpForm/>}/>
            <Route path="/forgot-password" element={<ResetPasswordEmail/>}/>
            <Route path="/reset-forgot-password" element={<ResetPassword/>}/>
            <Route path="/employer-page" element={<EmployerPage/>}/>
            <Route path="/jobseeker-page" element={<JobSeekerPage/>}/>
            <Route path="/jobs-one-company/:id" element={<JobPostsForOneCompany/>}/>
        </Routes>
    </>

  )
}

export default App


