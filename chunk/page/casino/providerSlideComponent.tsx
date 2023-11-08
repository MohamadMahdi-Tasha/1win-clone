// Importing part
import {ReactNode} from "react";
import Link from "next/link";

// Defining type of props
interface propsType {
    name: string;
    gamesCount: number;
    link: string;
    profileImg: 'no-img' | string;
    images: [string, string, string, string, string, string];
}

// Creating and exporting providers slide component as default
export default function ProviderSlideComponent({gamesCount, images, name, link, profileImg}:propsType):ReactNode {
    // Returning JSX
    return (
        <Link href={link}>
            <div>
                {
                    (profileImg === 'no-img')
                        ? <div />
                        : <img src={profileImg} alt={name} />
                }
                <div>
                    <span>{name}</span>
                    <span>{gamesCount} games</span>
                </div>
            </div>
            <div>
                {images.map((item:string) => <img src={item} alt={`Game's of ${name}`} />)}
            </div>
        </Link>
    );
}