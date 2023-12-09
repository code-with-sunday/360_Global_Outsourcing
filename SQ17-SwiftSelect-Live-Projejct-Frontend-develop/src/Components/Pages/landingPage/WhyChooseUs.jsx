export const WhyChooseUs = () => {
    return (
        <div id={'why'} className="max-w-[1280px] mx-auto mt-[5rem] justify-end items-center flex flex-col">
            <div className="flex w-20 shrink-0 h-20 flex-col ml-16 rounded-[50%] self-start max-md:ml-2.5" />
            <div className="text-blue-500 text-center text-6xl font-extrabold leading-[62px] self-center whitespace-nowrap max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
                Why Choose Us?
            </div>
            <div className="self-center text-slate-600 text-center text-xl leading-9 w-[900px] max-w-[900px] mt-6 max-md:max-w-full">
                At Swift Select, we stand out as the premier platform for connecting
                employers and job seekers, offering a transformative experience that
                goes beyond the ordinary. Here's why you should choose us
            </div>{" "}
            <div className="max-w-[1280px] mx-auto mb-[5rem] self-stretch w-full mt-12 max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                        <div className="self-stretch flex flex-col px-5 max-md:max-w-full max-md:mt-10">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e61b6bbd-2a72-4ce6-844a-bbab537899a8?"
                                className="aspect-[1.52] object-contain object-center w-[50px] fill-blue-500 overflow-hidden max-w-full"
                            />{" "}
                            <div className="text-slate-900 text-2xl font-bold leading-7 self-stretch -mr-5 mt-4 max-md:max-w-full">
                                For Job Seekers
                            </div>{" "}
                            <div className="self-stretch text-slate-900 text-lg leading-7 -mr-5 mt-4 max-md:max-w-full">
                                Find Your Dream Job: Access a vast array of job opportunities
                                tailored just for you. Career Growth: Elevate your professional
                                journey with personalized development resources.
                            </div>
                        </div>
                    </div>{" "}
                    <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                        <div className="self-stretch flex grow flex-col px-5 max-md:max-w-full max-md:mt-10">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/674ecdea-4521-450f-b105-fffbb79cabe2?"
                                className="aspect-[1.24] object-contain object-center w-[47px] fill-blue-500 overflow-hidden max-w-full"
                            />{" "}
                            <div className="text-slate-900 text-2xl font-bold leading-7 self-stretch -mr-5 mt-4 max-md:max-w-full">
                                For Employers
                            </div>{" "}
                            <div className="self-stretch text-slate-900 text-lg leading-7 -mr-5 mt-4 max-md:max-w-full">
                                Talent Discovery: Identify and connect with skilled
                                professionals effortlessly.
                                <br />
                                Simplified Recruitment: Streamline your hiring process and build
                                a dynamic team.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}