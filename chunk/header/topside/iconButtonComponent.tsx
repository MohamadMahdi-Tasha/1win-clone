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
        <button className={'aspect-square bg-red-600 text-white w-[30px] flex justify-center rounded-[10px] items-center bg-white/10 transition-all duration-500 hover:bg-white/20'}>
            <IconComponent name={name} size={13} />
        </button>
    );
}