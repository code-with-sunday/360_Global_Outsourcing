export const SortJobPosts = () => {
    return (
        <div className="items-stretch h-fit flex flex-col sticky top-[6rem] pb-5">
            <div className="text-zinc-500 text-base ml-5 leading-6 tracking-normal w-full">
                Job Type
            </div>

            {renderCheckbox("Remote","REMOTE")}
            {renderCheckbox("Hybrid","HYBRID")}
            {renderCheckbox("On Site","ON_SITE")}

            <div className="border-b mt-8 ml-5 w-40 my-4"></div>

            <div className="text-zinc-500 text-base ml-5 leading-6 tracking-normal w-full mt-6 max-md:mt-10">
                Employment type
            </div>

            {renderCheckbox("Full Time","FULL_TIME")}
            {renderCheckbox("Part Time","PART_TIME")}
            {renderCheckbox("Contract","CONTRACT")}
            {renderCheckbox("Temporary","TEMPORARY")}


            <div className="border-b mt-8 ml-5 w-40 my-4"></div>

            <div className="text-zinc-500 text-base ml-5 leading-6 tracking-normal w-full mt-6 max-md:mt-10">
                Experience level
            </div>

            {renderCheckbox("Entry Level", "ENTRY_LEVEL")}
            {renderCheckbox("Junior Level", "JUNIOR_LEVEL")}
            {renderCheckbox("Mid Level", "MID_LEVEL")}
            {renderCheckbox("Senior Level", "SENIOR_LEVEL")}
            {renderCheckbox("Expert Level", "EXPERT_LEVEL")}

        </div>
    );
};

const renderCheckbox = (label, value) => (
    <div className="items-stretch flex w-full justify-between gap-2 mt-2 px-5">
        <input
            type="checkbox"
            value={value}
            className="aspect-[0.75] object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full bg-blue-500"
        />
        <div className="text-neutral-800 text-base font-medium leading-6 tracking-normal grow whitespace-nowrap self-start">
            {label}
        </div>
    </div>
);
