// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import CategoryDetailsComponent from "@/chunk/page/casino/categoryDetailsComponent";
import CategoryGameComponent from "@/chunk/page/casino/categoryGameComponent";

// Creating and exporting left side nav bar of casino page as default
export default function LeftSideNavComponent():ReactNode {
    // Returning JSX
    return (
        <nav>
            <header>
                <form action="#">
                    <IconComponent name={'search'} size={15} />
                    <input type="text" placeholder={'Search'} required />
                </form>
            </header>
            <main>
                <span>CATEGORIES</span>
                <div>
                    <CategoryDetailsComponent name={'heated'} icon={'flame'} theme={'pink'} count={14} link={'#'} />
                    <CategoryDetailsComponent name={'popular'} icon={'happy-face'} theme={'green'} count={14} link={'#'} />
                </div>
                <ul>
                    <CategoryGameComponent icon={'square'} title={'1win games'} count={13} link={'#'} />
                    <CategoryGameComponent icon={'square'} title={'new'} count={69} link={'#'} />
                    <CategoryGameComponent icon={'square'} title={'Quick games'} count={196} link={'#'} />
                    <CategoryGameComponent icon={'square'} title={'Jackpots'} count={440} link={'#'} />
                    <CategoryGameComponent icon={'square'} title={'Slots'} count={6914} link={'#'} />
                    <CategoryGameComponent icon={'square'} title={'Only on 1win'} count={16} link={'#'} />
                    <CategoryGameComponent icon={'square'} title={'Top Games'} count={191} link={'#'} />
                    <CategoryGameComponent icon={'square'} title={'Grand Holiday 500$'} count={333} link={'#'} />
                </ul>
            </main>
        </nav>
    );
}