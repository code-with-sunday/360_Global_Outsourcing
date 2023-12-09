
export const Report = ({handleReportDetails, handleBackDrop}) => {
    const handleReportClick = () => {
        handleReportDetails();
        handleBackDrop();
    }

    return (
        <div className="absolute shadow-2xl right-[2rem]">
            <div className="cursor-pointer hover:bg-red-500 rounded w-[13rem] px-3 justify-between items-center bg-white flex py-4 max-md:px-5">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/808552ad2590ca4c1ab89f84bd17e7ec4a84f7947db1e4b614c4679d87eeace4?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"
                    className="aspect-square overflow-hidden shrink-0 max-w-full my-auto"
                    alt="Logo"
                />
                <div onClick={handleReportClick} className="text-gray-900 text-xl leading-7 tracking-normal whitespace-nowrap">
                    Report Employer
                </div>
            </div>
        </div>
    );
}