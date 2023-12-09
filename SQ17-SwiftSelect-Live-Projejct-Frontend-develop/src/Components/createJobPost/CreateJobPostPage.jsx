import {CreateJobPostNav} from "./CreateJobPostNav.jsx";
import {useEffect, useState} from "react";
import {JobInformation} from "./JobInformation.jsx";
import {PostQualifications} from "./PostQualifications.jsx";
import {PostNewJobRequirements} from "./PostNewJobRequirements.jsx";
import axios from "../../api/axios.jsx";
import {SweetAlert} from "../utils/SweetAlert.jsx";

export const CreateJobPostPage = ({handleFindCandidatesPage}) => {
    const [responsibilities, setResponsibilities] = useState("")
    const [niceToHave, setNiceToHave] = useState("")
    const [qualifications, setQualifications] = useState("")

    const [isVisible, setIsVisible] = useState(false);

    const handleResponsibilitiesChange = (e) => {
        setResponsibilities(e.target.value)
    }

    const handleNiceToHaveChange = (e) => {
        setNiceToHave(e.target.value)
    }

    const handleQualificationsChange = (e) => {
        setQualifications(e.target.value)
        console.log(qualifications)
    }


    const [formData, setFormData] = useState({
        title: '',
        numOfPeopleToHire: '',
        description: '',
        country: '',
        state: '',
        employmentType: '',
        jobType: '',
        applicationDeadline: '',
        jobCategory: '',
        maximumPay: '',
        minimumPay: '',
        payRate: '',
        language: '',
        yearsOfExp: '',
        experienceLevel: '',
        educationLevel: '',
        responsibilities: [],
        niceToHave: [],
        qualifications: []
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const addResponsibilitiesToList = () => {
        if (responsibilities.trim().length !== 0) {
            formData.responsibilities.push(responsibilities)
        }
        setResponsibilities("")
    }

    const addNiceToHaveToList = () => {
        if (niceToHave.trim().length !== 0) {
            formData.niceToHave.push(niceToHave)
        }
        setNiceToHave("")
    }

    const addQualificationsToList = () => {
        if (qualifications.trim().length !== 0) {
            formData.qualifications.push(qualifications)
        }
        setQualifications("")
    }



    const [countries, setCountries] = useState([]);

    useEffect(() => {
        // Fetch countries from the endpoint
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {

                // Extract country names from the response
                const countryNames = data.map(country => country.name.common);

                setCountries(countryNames.sort());
            })
            .catch(error => console.error('Error fetching countries:', error));
    }, []);


    const [progress, setProgress] = useState(1);

    const handleStep1 = () => {
        setProgress(1);
    }

    const handleStep2 = () => {
        setProgress(2);
    }

    const handleStep3 = () => {
        setProgress(3);
    }



    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsVisible(true);

        try {
            await axios.post("/job-post/create-job-post", formData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }).then(
                response => {
                    setIsVisible(false);

                    SweetAlert('success', 'Job Creation Successful',  'Job Post has been created successfully');
                    console.log(response.data.data)

                    handleFindCandidatesPage();
                }
            )
        } catch (error) {
            setIsVisible(false);

            SweetAlert('error', 'Oops!', 'Something went wrong please try again', 2000);

            console.log(error.message)
        }
    }

    return(
        <>
            <CreateJobPostNav
                p1={handleStep1}
                p2={handleStep2}
                p3={handleStep3}
            />

            <form onSubmit={handleSubmit}>
                { progress === 1 &&
                    <JobInformation
                        handleStep2={handleStep2}
                        handleChange={handleChange}
                        formData={formData}
                        countries={countries}
                    />
                }
                { progress === 2 &&
                    <PostQualifications
                        handleStep3={handleStep3}
                        handleChange={handleChange}
                        handleQualificationChange={handleQualificationsChange}
                        addQualification={addQualificationsToList}
                        formData={formData}
                        qualifications={qualifications}
                    />
                }
                { progress === 3 &&
                    <PostNewJobRequirements
                        handleChange={handleChange}
                        handleResponsibilitiesChange={handleResponsibilitiesChange}
                        handleNiceToHaveChange={handleNiceToHaveChange}
                        addResponsibilitiesToList={addResponsibilitiesToList}
                        addNiceToHaveToList={addNiceToHaveToList}
                        formData={formData}
                        responsibilities={responsibilities}
                        niceToHave={niceToHave}
                        isVisible={isVisible}
                    />
                }
            </form>
        </>
    )
}