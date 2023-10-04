'use client'
import { FC } from "react";
import cn from 'classnames';
import { useRouter } from "next/navigation";

interface IItem {
    text: string;
    href: string;
    disabled?: boolean;
}

export const Item:FC<IItem> = ({text, href, disabled}) => {

    const router = useRouter()

    return(
            <li
                onClick={() => router.push(`${href}`)}
                className={cn(
                    "text-[20px]",
                    !disabled ? " hover:opacity-75 duration-500 cursor-pointer" : "cursor-none"
                )}
            >
                {text}
            </li>
    )
}