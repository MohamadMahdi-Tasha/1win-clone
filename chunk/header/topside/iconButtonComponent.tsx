// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    name: 'lock' | 'mobile';
}

// Creating and exporting icon button component as default
export default function IconButtonComponent({name}:propsType):ReactNode {
    // Returning JSX
    return (
        <button className={'aspect-square text-white w-[30px] flex justify-center rounded-[10px] items-center bg-lightTheme transition-all duration-500 hover:opacity-50'}>
            <IconComponent name={name} size={13} />
        </button>
    );
}