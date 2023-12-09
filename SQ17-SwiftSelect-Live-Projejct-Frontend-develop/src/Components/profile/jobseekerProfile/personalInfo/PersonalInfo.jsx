import {Panel} from "../../profileComponents/Panel.jsx";
import {ContactInfo} from "./ContactInfo.jsx";
import {LocationInfo} from "./LocationInfo.jsx";
import {useState} from "react";

export const PersonalInfo = ({setDep, userData}) => {
    const [page, setPage] = useState("contact")

    let icon1 = "https://cdn.builder.io/api/v1/image/assets/TEMP/4aa16182-7439-4930-9f3d-507f913568da?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"
    let icon2 = "https://cdn.builder.io/api/v1/image/assets/TEMP/7efb15d3-cbb2-4b2d-8e2c-1890935a04cb?"
    let icon3 = "https://cdn.builder.io/api/v1/image/assets/TEMP/b78e48ec-7245-4772-b31b-e134cd6971e6?"
    let icon4 = "https://cdn.builder.io/api/v1/image/assets/TEMP/d3805636-fb24-4137-ac39-88af3330204b?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"

    const contactPage = () => {
        setPage("contact")
    }

    const locationPage = () => {
        setPage("location")
    }

    return(
        <div>
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0">
                    <div className="items-stretch flex flex-col px-2 py-1 max-md:mt-10">
                        <Panel
                            btnName="Contact Information"
                            handleClick={contactPage}
                            fontColor={ page === "contact" ? "text-blue-500" : "text-black-500" }
                            imgDis={ page === "contact" ? icon2 : icon1 }
                        />

                        <hr className="max-w-[322px] my-2"/>

                        <Panel
                            btnName="Location Information"
                            handleClick={locationPage}
                            fontColor={ page === "location" ? "text-blue-500" : "text-black-500" }
                            imgDis={ page === "location" ? icon4 : icon3 }
                        />
                    </div>
                </div>

                { page === "contact" && <ContactInfo setDep={setDep} userData={userData} /> }
                { page === "location" && <LocationInfo setDep={setDep} userData={userData} /> }

            </div>
        </div>
    )
}