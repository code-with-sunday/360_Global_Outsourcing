export const Join = () => {
    let footerImg = "src/assets/Container.svg"

    return (

        <div className="items-center flex flex-col">
            <img src={footerImg} alt="" />
            <div className="self-stretch text-white text-center text-6xl font-extrabold leading-[62px] w-full max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
                Join the community today
            </div>
            <div className="self-stretch text-white text-center text-lg leading-7 w-full mt-6 max-md:max-w-full">
                Join today for tailored job matches, streamlined hiring, and
                personalized career growth. Connect, collaborate, and shape your success
                in the [Industry/Field] community!
            </div>
            {/*<div className="justify-between items-stretch border-[color:var(--blue-600,#2563EB)] bg-blue-600 flex w-[263px] max-w-full gap-5 mt-6 pl-12 pr-6 py-5 rounded-lg border-2 border-solid max-md:px-5">*/}
            {/*    <div className="text-white text-2xl font-bold leading-6 tracking-wide">*/}
            {/*        Sign Up Free*/}
            {/*    </div>*/}
            {/*    <img*/}
            {/*        loading="lazy"*/}
            {/*        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c90220b-19b5-4a43-b807-1b769ffbcf72?"*/}
            {/*        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"*/}
            {/*    />*/}
            {/*</div>*/}
        </div>
    );
}