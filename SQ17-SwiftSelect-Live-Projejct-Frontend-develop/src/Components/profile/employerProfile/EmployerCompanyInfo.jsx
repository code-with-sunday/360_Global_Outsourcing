import * as React from "react";
import {useEffect, useState} from "react";
import axios from "../../../api/axios.jsx";
import {ClipLoader} from "react-spinners";
import {SweetAlert} from "../../utils/SweetAlert.jsx";


export const EmployerCompanyInfo = ({userData, setDep}) => {
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

    const [isVisible, setIsVisible] = useState(false);

    const [companyInfo, setCompanyInfo] = useState({
        companyName: `${userData.companyName}`,
        companyDescription: `${userData.companyDescription}`,
        address: `${userData.address}`,
        country: `${userData.country}`,
        state: `${userData.state}`,
        industry: `${userData.industry}`,
        companyType: `${userData.companyType}`,
        numberOfEmployees: `${userData.numberOfEmployees}`,
        website: `${userData.website}`,
        facebook: `${userData.facebook}`,
        instagram: `${userData.instagram}`,
        twitter:  `${userData.twitter}`
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        const submitForm = async () => {

            try {
                setIsVisible(true);

                await axios.put("/employer/update-profile-company-info", companyInfo, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    }
                }).then(
                    response => {
                        setIsVisible(false);

                        SweetAlert('success', 'Update Successful', 'Company Info updated successfully', 1500);

                        console.log(response.data.message)
                        setDep();
                    }
                )
            } catch (error) {
                setIsVisible(false);

                SweetAlert('error', 'Oops!', 'Something went wrong please try again', 2000);

                console.error('Error uploading resume:', error);
            }
        }

        submitForm();
    }



    const handleChange = (e) => {
        setCompanyInfo({ ...companyInfo, [e.target.name]: e.target.value })
    }

    return(
        <form onSubmit={handleSubmit} className="flex flex-col items-stretch w-[61%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-end flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4">
                    Company's Name
                </div>
                <input
                    type="text"
                    name="companyName"
                    value={companyInfo.companyName}
                    onChange={handleChange}
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                />

                <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4 mt-5">
                    Company's Description
                </div>
                <input
                    type="text"
                    name="companyDescription"
                    value={companyInfo.companyDescription}
                    onChange={handleChange}
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                />

                <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4 mt-5">
                    Company's Address
                </div>
                <input
                    type="text"
                    name="address"
                    value={companyInfo.address}
                    onChange={handleChange}
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                />

                <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4 mt-5">
                    Country
                </div>
                <select
                    id="country"
                    name="country"
                    value={companyInfo.country}
                    onChange={handleChange}
                    autoComplete="country-name"
                    required
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                >
                    <option value="" disabled> Select a country </option>

                    { countries.map( country => (
                        <option key={ country } value={ country } style={{backgroundColor: "white"}}>
                            { country }
                        </option>
                    ))}
                </select>

                <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4 mt-5">
                    State
                </div>
                <input
                    type="text"
                    name="state"
                    value={companyInfo.state}
                    onChange={handleChange}
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                />

                <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4 mt-5">
                    Company's Industry
                </div>
                <select
                    name="industry"
                    value={companyInfo.industry}
                    onChange={handleChange}
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                >

                    <option selected disabled></option>
                    <option value="ACCOUNTING">Accounting</option>
                    <option value="ADMIN">Admin</option>
                    <option value="BUILDING_AND_ARCHITECTURE">Building and Architecture</option>
                    <option value="CONSULTING_AND_STRATEGY">Consulting and Strategy</option>
                    <option value="CREATIVE_DESIGN">Creative Design</option>
                    <option value="CUSTOMER_SERVICE_SUPPORT">Customer Service Support</option>
                    <option value="DRIVER_TRANSPORT_SERVICE">Driver Transport Service</option>
                    <option value="ENGINEERING_AND_TECHNOLOGY">Engineering and Technology</option>
                    <option value="ESTATE_AGENT">Estate Agent</option>
                    <option value="FARMING_AND_AGRICULTURE">Farming and Agriculture</option>
                    <option value="FOOD_SERVICE_AND_CATERING">Food Service and Catering</option>
                    <option value="HEALTH_AND_SERVICE">Health and Service</option>
                    <option value="HOSPITALITY_AND_LEISURE">Hospitality and Leisure</option>
                    <option value="HUMAN_RESOURCE">Human Resource</option>
                    <option value="LEGAL_SERVICE">Legal Service</option>
                    <option value="MANAGEMENT_AND_BUSINESS_DEVELOPMENT">Management and Business Development</option>
                    <option value="MARKETING_AND_COMMUNICATIONS">Marketing and Communication</option>
                    <option value="MEDICAL_AND_PHARMACEUTICALS">Medical and Pharmaceuticals</option>
                    <option value="PRODUCT_AND_PRODUCT_MANAGEMENT">Product and Product Management</option>
                    <option value="QUALITY_CONTROL_AND_ASSURANCE">Quality Control and Assurance</option>
                    <option value="RESEARCH_TEACHING_AND_TRAINING">Research, Teaching and Training</option>
                    <option value="SALES">Sales</option>
                    <option value="SOFTWARE_ENGINEERING">Software Engineering</option>
                    <option value="DATA_SCIENCE">Data Science</option>
                    <option value="SUPPLY_CHAIN_AND_PROCUREMENT">Supply Chain and Procurement</option>
                    <option value="TRADES_AND_SERVICES">Trade and Services</option>
                </select>

                <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4 mt-5">
                    Company Type
                </div>
                <select
                    id="company-type"
                    name="companyType"
                    value={companyInfo.companyType}
                    onChange={handleChange}
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                >
                    <option selected disabled></option>
                    <option value="PRIVATE">PRIVATE</option>
                    <option value="PUBLIC">PUBLIC</option>
                    <option value="NON_PROFIT">NON_PROFIT</option>
                </select>

                <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4 mt-5">
                    Number of Employees
                </div>
                <input
                    type="number"
                    name="numberOfEmployees"
                    value={companyInfo.numberOfEmployees}
                    onChange={handleChange}
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                />

                <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4 mt-5">
                    Company's Website
                </div>
                <input
                    type="text"
                    name="website"
                    value={companyInfo.website}
                    onChange={handleChange}
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                />

                <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4 mt-5">
                    Company's Facebook Profile
                </div>
                <input
                    type="text"
                    name="facebook"
                    value={companyInfo.facebook}
                    onChange={handleChange}
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                />

                <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4 mt-5">
                    Instagram
                </div>
                <input
                    type="text"
                    name="instagram"
                    value={companyInfo.instagram}
                    onChange={handleChange}
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                />

                <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4 mt-5">
                    Twitter
                </div>
                <input
                    type="text"
                    name="twitter"
                    value={companyInfo.twitter}
                    onChange={handleChange}
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                />

                <button type={"submit"}
                        className="text-white text-base font-semibold leading-6 tracking-normal whitespace-nowrap justify-center items-stretch bg-blue-500 w-fit max-w-full mt-8 px-4 py-2 rounded-xl self-end cursor-pointer"
                >
                    Update Profile

                    { isVisible &&
                        <ClipLoader color="#36D7B7" loading={true} size={23}/>
                    }

                </button>
            </div>
        </form>
    );
}