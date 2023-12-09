import {Link} from "react-router-dom";

export const Header = ({handleSignUp}) => {

    return (
        <div className="sticky top-[0] w-full bg-white z-20">
        <div className="max-w-[1280px] items-center mx-auto justify-between items-stretch self-stretch border-b-[color:var(--blue-gray-200,#E2E8F0)] flex gap-5 pl-20 pr-6 pb-2 border-b border-solid max-md:flex-wrap max-md:px-5">
            <div className="logo">
                <img src="https://res.cloudinary.com/dpfqbb9pl/image/upload/v1699463224/SS1_jyhel9.png" alt="" />
            </div>
            <div className="items-stretch items-center self-center flex justify-between gap-5 my-auto max-md:justify-center">
                <div className="text-slate-900 text-base font-medium leading-6 tracking-wide cursor-pointer hover:text-blue-500">
                   <a href={"#key"}>Key Features</a>
                </div>
                <div className="text-slate-900 text-base font-medium leading-6 tracking-wide cursor-pointer hover:text-blue-500">
                   <a href={"#discover"}>Discover</a>
                </div>
                <div className="text-slate-900 text-base font-medium leading-6 tracking-wide cursor-pointer hover:text-blue-500">
                   <a href={"#why"}>Why Choose Us</a>
                </div>
                <div className="text-slate-900 text-base font-medium leading-6 tracking-wide whitespace-nowrap cursor-pointer hover:text-blue-500">
                    Help Center
                </div>
            </div>
            <div className="items-center flex justify-between gap-5">
                <Link to="/login" className="flex items-center text-blue-600 text-base font-medium leading-6 tracking-wide my-auto">
                    Log In
                </Link>
                <div onClick={handleSignUp} className="cursor-pointer hover:bg-blue-500 justify-between items-stretch border-[color:var(--blue-600,#2563EB)] bg-blue-600 self-stretch flex gap-4 pl-7 pr-3 py-3 rounded-lg border-2 border-solid max-md:pl-5 my-auto max-h-[3rem]">
                    <div className="text-white text-base font-medium leading-6 tracking-wide">
                        Sign Up Free
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5062df1f-67ac-469a-801d-d6350c5b260d?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                    />
                </div>
            </div>
        </div>
        </div>
    );
}