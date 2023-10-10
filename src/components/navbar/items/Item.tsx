'use client'
import { FC } from "react";
import cn from 'classnames';
import { useRouter } from "next/navigation";

interface IItem {
    text: string;
    href: string;
    disabled?: boolean;
    setOpen: (open:boolean) => void;
}

export const Item:FC<IItem> = ({text, href, disabled, setOpen}) => {

    const router = useRouter()

    const handler = () => {
        router.push(`${href}`)
        setOpen(false)
    }

    return(
            <li
                onClick={handler}
                className={cn(
                    "text-[20px] hover:shadow-2xl md:px-6 md:w-full w-[200px] text-center duration-500 rounded-2xl",
                    "md:hover:bg-white hover:bg-button md:text-black md:hover:text-[rgba(0,0,0,.8)] hover:text-white ",
                    !disabled ? " hover:opacity-75 duration-500 cursor-pointer" : "cursor-none"
                )}
            >
                {text}
            </li>
    )
}