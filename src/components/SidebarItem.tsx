import type { ReactElement } from "react";

export function SidebarItem({text, icon}:{
    text: string;
    icon: ReactElement;
}
){
    return <div className="flex text-gray-800 ">
        <div className="p-2">
            {icon}
        </div>
        <div className="p-2">
            {text}
        </div>
    </div>
}