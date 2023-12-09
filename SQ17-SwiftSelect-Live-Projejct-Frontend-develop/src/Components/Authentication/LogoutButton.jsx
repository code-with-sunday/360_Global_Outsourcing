import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove user from local storage
        localStorage.removeItem('token');
        localStorage.removeItem('firstname');
        localStorage.removeItem('lastname');
        localStorage.removeItem('email');

        // Redirect to the home page
        navigate('/');
    };

    return (
        <div onClick={handleLogout} className="cursor-pointer justify-center items-center bg-white flex w-full flex-col px-5 py-2" style={{borderTop: "1px solid gray"}}>
            <div className="flex items-center gap-4 ease-in-out duration-200 hover:gap-1">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/812c440b-9896-4823-86a9-8fca8dff9d7e?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                    alt="Sign out"
                />
                <div className="text-rose-500 text-xl leading-7 tracking-normal self-stretch">
                    Logout
                </div>
            </div>
        </div>
    );
};

export default LogoutButton;