import { useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";

export function CreateContentModal({open, onClose}){
    return <div>
        {open && <div className="w-screen h-screen bg-slate-200 fixed top-0 left-0 opacity-60 flex justify-center">
            <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100 p-4 rounded-lg">
                    <div className="flex justify-end">
                        <CrossIcon />
                    </div>
                </span>
            </div>
        </div>}
    </div>
}