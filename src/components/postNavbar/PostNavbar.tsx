import { FC, useState, useEffect } from "react";

import { Button } from "@/components/UI/button/Button";

interface IPostNavbar {
    setChooseChart: (i: "view" | "emoji") => void;
}

export const PostNavbar:FC<IPostNavbar> = ({setChooseChart}) => {

    const viewFunc = () => {
        setChooseChart("view")
    }

    const emojiFunc = () => {
        setChooseChart("emoji")
    }

    return(
        <div>
            <div className={"flex z-40 relative w-max gap-x-[50px]"}>
                <Button
                    text={"реакции"}
                    handler={emojiFunc}
                    type={"subPage"}
                />
                <Button
                    text={"просмотры"}
                    handler={viewFunc}
                    type={"subPage"}
                />
            </div>
        </div>
    )
}