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
        <button>
            <IconComponent name={name} size={12} />
        </button>
    );
}