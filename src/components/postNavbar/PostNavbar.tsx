import { FC, useState, useEffect } from "react";
import cn from 'classnames'
interface IPostNavbar {
    setChooseChart: (i: "view" | "emoji") => void;
    chooseChart: "view" | "emoji";
}

export const PostNavbar:FC<IPostNavbar> = ({setChooseChart, chooseChart}) => {

    const viewFunc = () => {
        setChooseChart("view")
    }

    const emojiFunc = () => {
        setChooseChart("emoji")
    }

    return(
        <div className={"w-full flex justify-center"}>
            <div
                className={cn(
                    "flex sm:w-max w-full",
                    "rounded-2xl"
                )}
            >
                    <Item
                        text={"реакции"}
                        handler={emojiFunc}
                        side={chooseChart}
                    />
                    <Item
                        text={"просмотры"}
                        handler={viewFunc}
                        side={chooseChart}
                    />
            </div>
        </div>
    )
}
interface IItem {
    text: string;
    handler: () => void;
    side: "view" | "emoji";
}

const Item:FC<IItem> = ({text, handler, side}) => {

    return(
        <div
            className={cn(
                "text-center bg-white my-[4px] first:ml-[6px] last:mr-[6px] first:rounded-l-2xl last:rounded-r-2xl sm:w-[160px] w-full duration-500",
                "transition-all cursor-pointer",
                side === "emoji" ?
                    "last:hover:shadow-xl"
                    :
                    "first:hover:shadow-xl"
            )}
            onClick={handler}
        >
            <div
                className={"text-[20px]"}
            >
                {text}
            </div>
        </div>
    )
}