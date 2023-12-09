import * as React from "react";
import {useState} from "react";
import axios from "../../../../api/axios.jsx";
import {SweetAlert} from "../../../utils/SweetAlert.jsx";
import {ClipLoader} from "react-spinners";

export const JobTitle = () => {
    const [isVisible, setIsVisible] = useState(false);

    const [industry, setIndustry] = useState('');

    const [formData, setFormData] = useState({
        industries: []
    });

    const handleImageClick = () => {
        if (industry.trim().length !== 0) {
            formData.industries.push(industry)
            setIndustry("")
        }
    };

    const handleChange = (e) => {
        setIndustry(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setIsVisible(true);

            await axios.post("/notification/subscribe", formData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }).then((response) => {
                setIsVisible(false);

                SweetAlert('success', 'Subscription Successful', 'Subscriptions made successfully', 3000);
                console.log(response.data.data)
            });
        } catch (error) {
            setIsVisible(false);

            SweetAlert('error', 'Oops!', 'Something went wrong, Please check your inputs and try again', 3000);
            console.log(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-stretch w-[61%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-end flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8056bf8-82b6-4c5c-8d8d-e67468ec1991?"
                        className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full self-end cursor-pointer"
                        onClick={handleImageClick}
                    />
                </div>
                <>

                    <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4">
                        Desired job title?
                    </div>
                    <div className="px-4 pb-4 rounded border border-[color:var(--Blue-1,#2F80ED)]">
                        <div className="mt-4 justify-end items-stretch rounded border self-center flex w-[500px] border-[color:var(--Blue-1,#2F80ED)] max-w-full gap-5 border-solid max-md:flex-wrap">
                            <select
                                name="industry"
                                value={industry}
                                onChange={handleChange}
                                className="flex justify-end items-stretch rounded self-center w-[500px] max-w-full gap-5 px-4 py-2.5 max-md:flex-wrap"
                            >
                                <option value="" selected disabled></option>
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
                        </div>

                        { formData.industries.map(
                            industry => (
                                <div className="mt-4 text-black w-[500px] text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-center max-w-full px-4 py-2.5 border-solid">
                                    {industry}
                                </div>
                            )
                        ) }
                    </div>

                    <div className="flex gap-2">
                        <button type={"submit"}
                                className="relative flex gap-3 items-center text-white text-base font-semibold leading-6 tracking-normal whitespace-nowrap mx-auto justify-center items-stretch mt-8 bg-blue-500 w-fit max-w-full px-8 py-2 rounded-xl self-end cursor-pointer"
                        >
                            Subscribe

                            { isVisible &&
                                <ClipLoader color="#36D7B7" loading={true} size={23}/>
                            }

                        </button>
                    </div>
                </>
            </div>
        </form>
    );
};
