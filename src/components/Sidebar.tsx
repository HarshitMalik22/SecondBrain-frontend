import { Logo } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar (){
    return <div className="h-screen bg-whit border-r w-76 fixed left-0 top-0">
        <div className="flex text-2xl pt-4 items-center">
            <div className="pr-2">
                <Logo />
            </div>
            SecondBrain
        </div>
        <div className="pt-4 pl-4">
            <SidebarItem text="Twitter" icon={<TwitterIcon />} />
            <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
        </div>
    </div>
}  