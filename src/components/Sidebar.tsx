import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar (){
    return <div className="h-screen bg-whit border-r w-76 fixed left-0 top-0">
        <h1>
            SecondBrain
        </h1>
        <div className="pt-4 pl-4">
            <SidebarItem text="Twitter" icon={<TwitterIcon />} />
            <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
        </div>
    </div>
}  