// Importing part
import {ReactNode} from "react";
import LogoImage from '@/public/img/img-logo-typo.svg';
import Image from 'next/image';
import LangDropdownComponent from "@/chunk/header/langDropdownComponent";
import DownloadComponent from "@/chunk/footer/topSide/downloadComponent";

// Creating and exporting top side of footer component as default
export default function TopSideComponent():ReactNode {
    // Returning JSX
    return (
        <div>
            <div>
                <div>
                    <Image width={200} height={100} src={LogoImage.src} alt={'1Win Logo'} />
                    <div className={'gradiant-divider'} />
                </div>
                <div>
                    <LangDropdownComponent position={'top'} />
                </div>
            </div>
            <div>
                <div>
                    <h5>24/7 support</h5>
                    <p>Contact us if you still have any questions</p>
                </div>
                <div>
                    <h6>SUPPORT CONTACTS</h6>
                    <ul>
                        <li>
                            <h6>Technical support</h6>
                            <a href="mailto:support@1win.xyz">support@1win.xyz</a>
                        </li>
                        <li>
                            <h6>Security service</h6>
                            <a href="mailto:security@1win.xyz">security@1win.xyz</a>
                        </li>
                        <li>
                            <h6>Commercial offers</h6>
                            <a href="mailto:business@1win.xyz">business@1win.xyz</a>
                        </li>
                        <li>
                            <h6>Affiliate program</h6>
                            <a href="mailto:partner@1win.xyz">partner@1win.xyz</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h6>INFORMATION</h6>
                    <ul>
                        <li><a href="#">Rules</a></li>
                        <li><a href="#">Promotions and bonuses</a></li>
                        <li><a href="#">Mobile version</a></li>
                        <li><a href="#">Affiliate program</a></li>
                    </ul>
                </div>
                <div>
                    <h6>CATEGORIES</h6>
                    <ul>
                        <li><a href="#">Live</a></li>
                        <li><a href="#">Sports</a></li>
                        <li><a href="#">Promotions</a></li>
                        <li><a href="#">Live-games</a></li>
                        <li><a href="#">Poker</a></li>
                        <li><a href="#">Casino</a></li>
                    </ul>
                </div>
                <div>
                    <div>
                        <DownloadComponent name={'ios'} isLarge={false} />
                        <DownloadComponent name={'android'} isLarge={false} />
                    </div>
                    <DownloadComponent name={'windows'} isLarge />
                </div>
            </div>
        </div>
    );
}