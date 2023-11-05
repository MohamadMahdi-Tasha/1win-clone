// Importing part
import {ReactNode} from "react";
import LinkItemComponent from "@/chunk/header/bottomside/linkDropdown/linkItemComponent";

// Creating and exporting links dropdown component as default
export default function LinkDropdownComponent():ReactNode {
    // Returning JSX
    return (
        <li className={'relative group'}>
            <button className={'bg-white/10 group-hover:opacity-50 px-[15px] py-[5px] text-[12px] rounded-[5px] text-white transition-all duration-500'}>
                More
                <span className={'text-white/50 ml-[5px]'}>...</span>
            </button>
            <ul className={'absolute top-[150%] left-[50%] py-[10px] -translate-x-[50%] bg-white rounded-[10px] w-[200px] shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-500 before-triangle invisible'}>
                <LinkItemComponent name={'Cybersport'} link={'#'} />
                <LinkItemComponent name={'Fantasy sport'} link={'#'} />
                <LinkItemComponent isNew name={'Bat Games'} link={'#'} />
                <LinkItemComponent isNew name={'Twain sport'} link={'#'} />
                <LinkItemComponent isNew name={'TVBET'} link={'#'} />
                <LinkItemComponent name={'1win games'} link={'#'} />
                <LinkItemComponent name={'Statistics'} link={'#'} />
                <LinkItemComponent name={'Results'} link={'#'} />
                <LinkItemComponent name={'Cases'} link={'#'} />
            </ul>
        </li>
    );
}