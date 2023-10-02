import { FC } from "react";
import cn from 'classnames';

interface IItem {
    text: string;
    href: string;
    disabled?: boolean;
}

export const Item:FC<IItem> = ({text, href, disabled}) => {

    return(
        <a href={href}>
            <li
                className={cn(
                    "text-[20px]",
                    !disabled ? " hover:opacity-75 duration-500 cursor-pointer" : "cursor-none"
                )}
            >
                {text}
            </li>
        </a>
    )
}