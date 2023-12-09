import {Footer} from "./Footer.jsx";
import {KeyFeatures} from "./KeyFeatures.jsx";
import {Header} from "./Header.jsx";
import {Section} from "./Section.jsx";
import {Join} from "./Join.jsx";
import {WhyChooseUs} from "./WhyChooseUs.jsx";
import {Possibilities} from "./Possibilities.jsx";
import {SignUpSelect} from "./SignUpSelect.jsx";
import {useState} from "react";
import * as React from "react";


export const LandingPage = () => {
    const [signUp, setSignUp] = useState(false);

    const handleSignUp = () => {
        setSignUp(!signUp);
    }

    return (
        <>
            <div className=" m-auto">
                {signUp &&
                    <SignUpSelect/>
                }
                <Header handleSignUp={handleSignUp} />
                <Section/>
                <KeyFeatures/>
                <Possibilities/>
                <WhyChooseUs/>
                <Join/>
                <Footer/>
            </div>
        </>
    )
}