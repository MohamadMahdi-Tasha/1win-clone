// Importing part
import {ReactNode} from "react";
import LinkItemComponent from "@/chunk/header/bottomside/linkDropdown/linkItemComponent";

// Creating and exporting links dropdown component as default
export default function LinkDropdownComponent():ReactNode {
    // Returning JSX
    return (
        <li className={'relative group lg:block hidden'}>
            <button className={'bg-white/10 group-hover:opacity-50 px-[15px] py-[5px] text-[12px] rounded-[5px] text-white transition-all duration-500'}>
                More
                <span className={'text-white/50 ml-[5px]'}>...</span>
            </button>
            <ul className={'absolute top-[150%] left-[50%] py-[10px] -translate-x-[50%] bg-white rounded-[10px] w-[200px] shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-500 before-triangle invisible'}>
                <LinkItemComponent name={'Cybersport'} link={'/game/cybersport'} />
                <LinkItemComponent name={'Fantasy sport'} link={'/game/fantasy-sport'} />
                <LinkItemComponent isNew name={'Bat Games'} link={'/game/bat'} />
                <LinkItemComponent isNew name={'Twain sport'} link={'/game/twain'} />
                <LinkItemComponent isNew name={'TVBET'} link={'/game/tvbet'} />
                <LinkItemComponent name={'1win games'} link={'/game/1win'} />
                <LinkItemComponent name={'Statistics'} link={'/statistics'} />
                <LinkItemComponent name={'Results'} link={'/results'} />
                <LinkItemComponent name={'Cases'} link={'/cases'} />
            </ul>
        </li>
    );
}