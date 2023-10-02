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
            <div className={"flex w-max gap-x-[50px]"}>
                <Button
                    text={"просмотры"}
                    handler={viewFunc}
                    type={"subPage"}
                />
                <Button
                    text={"реакции"}
                    handler={emojiFunc}
                    type={"subPage"}
                />
            </div>
        </div>
    )
}