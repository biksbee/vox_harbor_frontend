'use client'
import { FC, useState, useEffect } from "react";
import cn from "classnames";

import { Logo } from "@/components/navbar/Logo";
import { Item } from "@/components/navbar/items/Item";
import Image from "next/image";

export const Navbar:FC = () => {

    const [open, setOpen] = useState<boolean>(false)

    return(
        <div className={"z-20 fixed w-full md:bg-[rgba(203,203,220,1)] bg-white h-[40px] top-0 xl:px-[120px] xx:px-[60px] md:px-[40px] px-[15px]"}>
            <div className={"flex h-full items-center justify-between"}>
                <div className={"flex items-center"}>
                    <Logo />
                </div>
                <ul
                    className={cn(
                        "flex md:gap-x-[50px] gap-y-[25px] items-center md:w-max w-full",
                        "md:flex-row flex-col md:relative absolute left-0 md:top-0 duration-500 ",
                        open ? "top-[40px] bg-[rgba(203,203,220,1)] h-screen" : "top-[-100vh]",
                    )}
                >
                    {/*<Item*/}
                    {/*    text={"пользователь"}*/}
                    {/*    href={"/user"}*/}
                    {/*/>*/}
                    <Item
                        text={"Посты"}
                        href={"/post"}
                        setOpen={setOpen}
                    />
                    {/*<Item*/}
                    {/*    text={"канал"}*/}
                    {/*    href={"/channel"}*/}
                    {/*/>*/}
                    <Item
                        text={"Сообщения"}
                        href={"/bot"}
                        setOpen={setOpen}
                    />
                </ul>
                <div
                    className={cn(
                        "md:hidden visible"
                    )}
                    onClick={() => setOpen(!open)}
                >
                    {
                        !open ?
                            <Image
                                src={"/burger-menu.svg"}
                                alt={"burger"}
                                width={25}
                                height={25}
                            />
                            :
                            <Image
                                src={"/close.svg"}
                                alt={"close"}
                                width={25}
                                height={25}
                            />
                    }
                </div>
            </div>
        </div>
    )
}