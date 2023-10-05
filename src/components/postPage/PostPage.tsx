'use client'
import {FC, useEffect, useState} from "react";

import { Input } from "@/components/UI/input/Input";
import { inputValidation } from "@/components/UI/input/type";
import { Button } from "@/components/UI/button/Button";
import { PostNavbar } from "@/components/postNavbar/PostNavbar";

import {ChartsLiner} from "@/components/charts/ChartsLiner";

import {useAppDispatch, useAppSelector} from "@/app/store/hooks/useActions";

import {reactionByUrl} from "@/app/store/features/post/post";
import res from "@/mock/dataCharts.json"

interface IPostPage {

}

export const PostPage:FC<IPostPage> = ({}) => {


    const [value, setValue] = useState<string>("https://t.me/sotaproject/67243")
    const [type, setType] = useState<string>("")
    const [disabled, setDisabled] = useState<boolean>(true)

    const [open, setOpen] = useState<boolean>(false)
    const [chooseChart, setChooseChart] = useState<"view" | "emoji">("emoji")

    const dispatch = useAppDispatch()
    const status = useAppSelector(state => state.reaction.status)
    const res = useAppSelector(state => state.reaction.value)


    const expression: RegExp = inputValidation["link"]

    useEffect(() => {
        if(expression.test(value)){
            setDisabled(false)
        } else {
            setDisabled(true)
        }

    }, [value]);

    const sendLinkByPost = () => {
        setOpen(true)
        dispatch(reactionByUrl(value))
        // setValue("send")
    }


    const render = () => {
        if (status === "init" || status === "loading") {
            return <div>Loading ...</div>;
        }
        if(status === "error"){
            return "Error happen";
        }
    }

    return(
        <div>
            <div className={"mb-[50px]"}>
                <div className={"text-[#f00]"}>
                    https://t.me/sotaproject/67243
                </div>
                <div className={"flex flex-col bg-wraper rounded-[22px] py-[22px] px-[12px]"}>
                    <div className={"flex gap-x-[20px]"}>
                        <div className={"relative w-full"}>
                            <Input
                                id={"userValue"}
                                text={"ссылка на пост, url:"}
                                value={value}
                                setValue={setValue}
                                setType={setType}
                            />
                            {
                                // open &&
                                // <DropDown/>
                            }
                        </div>
                        <div>
                            <Button
                                text={"отправить"}
                                handler={sendLinkByPost}
                                disabled={disabled}
                                type={"send"}
                            />
                        </div>
                    </div>
                    <div className={"pt-[10px] px-[30px] text-[14px] text-inf"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
                {
                    open &&
                    <>
                        <div className={"mt-[50px] flex justify-center"}>
                            <PostNavbar
                                setChooseChart={setChooseChart}
                            />
                        </div>
                        {
                            render() ||
                            <div className={"mt-[30px] w-full"}>
                                <ChartsLiner
                                    res={res}
                                    chooseChart={chooseChart}
                                    title={`SOME CHARTS`}
                                />
                            </div>
                        }
                    </>
                }
            </div>
        </div>
    )
}