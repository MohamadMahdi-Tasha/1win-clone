// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    theme: 'blue' | 'pink';
    title: string;
    children: string;
    img: string;
    imgTransformed?: boolean;
}

// Creating and exporting banner component as default
export default function BannerComponent({theme, title ,children, img, imgTransformed}:propsType):ReactNode {
    // Returning JDX
    return (
        <div data-them={theme}>
            <div>
                <div />
                <div>
                    <span>{title}</span>
                    <p>{children}</p>
                </div>
            </div>
            {
                (img === 'support')
                    ? <IconComponent name={'chat'} size={15} />
                    : <img src={img} alt={title} />
            }
        </div>
    );
}