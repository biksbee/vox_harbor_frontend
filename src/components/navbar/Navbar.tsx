import { FC } from "react";

import { Logo } from "@/components/navbar/Logo";
import { Item } from "@/components/navbar/items/Item";

export const Navbar:FC = () => {

    return(
        <div className={"fixed w-full h-[55px] top-0 xl:px-[120px] xx:px-[60px] md:px-[40px] px-[15px]"}>
            <div className={"flex h-full items-center justify-between"}>
                <div className={"flex items-center"}>
                    <Logo />
                </div>
                <ul
                    className={"flex gap-x-[50px]"}
                >
                    {/*<Item*/}
                    {/*    text={"пользователь"}*/}
                    {/*    href={"/user"}*/}
                    {/*/>*/}
                    <Item
                        text={"пост"}
                        href={"/post"}
                    />
                    {/*<Item*/}
                    {/*    text={"канал"}*/}
                    {/*    href={"/channel"}*/}
                    {/*/>*/}
                    <Item
                        text={"бот"}
                        href={"/bot"}
                    />
                </ul>
            </div>
        </div>
    )
}