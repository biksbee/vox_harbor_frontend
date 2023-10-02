import {FC} from "react";
import cn from 'classnames';

import type { ButtonType } from "@/components/UI/button/type";
import { buttonStyle } from "@/components/UI/button/type";

interface IButton {
    text: string;
    handler: () => void;
    disabled?: boolean;
    type: ButtonType
}

export const Button:FC<IButton> = ({text, handler, disabled, type}) => {

    return(
        <button
            className={cn(
                buttonStyle[type],
                "flex h-full rounded-[24px] px-[35px] items-center duration-700",
                !disabled && "bg-white text-zinc-400 hover:text-[#000] shadow-2xl hover:shadow-black",
                !disabled && "active:bg-[#AFAFBBFF]",
            )}
            onClick={handler}
            disabled={disabled}
        >
            <div
                className={cn(
                    ""
                )}
            >
                {text}
            </div>
        </button>
    )
}