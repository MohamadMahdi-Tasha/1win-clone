// Importing part
import {ReactNode} from "react";
import BannerImage from "@/public/img/header/topside/img-download-dropdown.png";

// Defining type of props
interface propsType {
    position?: 'top' | 'bottom';
}

// Creating and exporting download hover dropdown as default
export default function DownloadHoverDropdownComponent({position = 'bottom'}:propsType):ReactNode {
    // Returning JSX
    return (
        <div data-position={position} className={'absolute z-[100] data-[position="top"]:bottom-[150%] data-[position="bottom"]:top-[150%] left-[50%] -translate-x-[50%] bg-white rounded-[10px] w-[300px] shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-500 before-triangle invisible'}>
            <img className={'w-full mb-[10px]'} src={BannerImage.src} alt="Download now !" />
            <div className={'p-[10px]'}>
                <p className={'text-black text-[12px] text-center'}>Visit the site from your smartphone, <br/> install the application right now and <br/> get $100 to the bonus account!</p>
            </div>
        </div>
    );
}
