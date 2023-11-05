// Importing part
import {ReactNode} from "react";
import LinkItemComponent from "@/chunk/header/bottomside/linkDropdown/linkItemComponent";

// Creating and exporting links dropdown component as default
export default function LinkDropdownComponent():ReactNode {
    // Returning JSX
    return (
        <li>
            <button>
                More
                <span>...</span>
            </button>
            <ul>
                <LinkItemComponent name={'Cybersport'} link={'#'} />
                <LinkItemComponent name={'Fantasy sport'} link={'#'} />
                <LinkItemComponent isNew name={'Bat Games'} link={'#'} />
                <LinkItemComponent isNew name={'Twain sport'} link={'#'} />
                <LinkItemComponent isNew name={'TVBET'} link={'#'} />
                <LinkItemComponent isNew name={'1win games'} link={'#'} />
                <LinkItemComponent isNew name={'Statistics'} link={'#'} />
                <LinkItemComponent isNew name={'Results'} link={'#'} />
                <LinkItemComponent isNew name={'Cases'} link={'#'} />
            </ul>
        </li>
    );
}