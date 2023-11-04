// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import EnImage from '@/public/img/header/flags/img-en.svg';

// Creating and exporting language dropdown as default
export default function LangDropdownComponent():ReactNode {
    // Returning JSX
    return (
        <div>
            <button>
                <span>EN</span>
                <IconComponent name={'chevron-down'} size={5} />
                <img src={EnImage.src} alt="Flag of england"/>
            </button>
        </div>
    );
}