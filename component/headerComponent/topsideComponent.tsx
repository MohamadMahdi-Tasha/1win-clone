// Importing part
import {ReactNode} from "react";
import FreeMoneyComponent from "@/chunk/header/topside/freeMoneyComponent";
import IconButtonComponent from '@/chunk/header/topside/iconButtonComponent';
import PromotionsComponent from '@/chunk/header/topside/promotionsComponent';
import IconComponent from "@/chunk/iconComponent";

// Creating and exporting top side of header component as default
export default function TopsideComponent():ReactNode {
    // Returning JSX
    return (
        <div>
            <div>
                <IconButtonComponent name={'lock'} />
                <IconButtonComponent name={'mobile'} />
                <div />
                <FreeMoneyComponent />
            </div>
            <div>
                <PromotionsComponent />
                <div />
                <a href={'#'}>
                    <div>
                        <span>Application</span>
                        <span>for Windows</span>
                    </div>
                    <IconComponent name={'windows'} size={20} />
                </a>
                <div>
                    <a href="#"><IconComponent name={'android'} size={10} /></a>
                    <a href="#"><IconComponent name={'apple'} size={10} /></a>
                </div>
                <div />
            </div>
        </div>
    );
}