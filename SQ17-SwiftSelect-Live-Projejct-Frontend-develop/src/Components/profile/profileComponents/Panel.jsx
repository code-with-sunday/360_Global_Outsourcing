import * as React from "react";
import {Link} from "react-router-dom";

export const Panel = ({btnName, imgDis, fontColor, handleClick}) => {
        return (
                <div onClick={handleClick} className="justify-between items-stretch flex w-full gap-5 max-w-[322px] px-[8px] py-[4px] cursor-pointer">
                    <div className="items-stretch flex justify-between gap-4">
                        <img
                            src={imgDis}
                            className="aspect-square object-contain object-center w-10 justify-center items-center overflow-hidden shrink-0 max-w-full"
                        />
                        <div className={`${fontColor} text-base font-medium leading-6 tracking-normal self-center grow whitespace-nowrap my-auto`}>
                            {btnName}
                        </div>
                    </div>
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1c97ddb-760e-42b5-908f-f0bbc42a127f?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                </div>
        );
    }
