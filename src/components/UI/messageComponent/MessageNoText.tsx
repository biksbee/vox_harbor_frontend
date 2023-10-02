'use client'
import { FC, useState, useEffect, useRef } from "react";


import { useActions, useAppDispatch, useAppSelector} from "@/app/store/hooks/useActions";
import {getText} from "@/app/store/features/messages/text";


export const MessageNoText:FC = () => {

    const status = useAppSelector(state => state.messages.status)
    const messages = useAppSelector(state => state.messages.messages)
    const dispatch = useAppDispatch()

    const render = () => {
        if (status === "init" || status === "loading") {
            return <div>Loading...</div>;
        }
        if(status === "error"){
            return "Error happened";
        }
    };

    useEffect(() => {
        if(status === "success")
            dispatch(getText(messages))
    }, [status]);


    return(
        <div className={"flex flex-col gap-y-[30px]"}>
            {
                messages.map((item, index) => (
                    <div key={index}>
                        {
                            render() ||
                            <Item
                                index={index}
                                date={item.date}
                                chat_id={item.chat_id}
                                channel_id={item.channel_id}
                                message_id={item.message_id}
                                post_id={item.post_id}
                            />
                        }
                    </div>
                ))
            }
        </div>
    )
}

interface IItem {
    index: number;
    channel_id: number;
    chat_id: number;
    date: string;
    message_id: number;
    post_id: number;
}

export const Item:FC<IItem> = ({
    index,
    date,
    chat_id,
    message_id,
    channel_id,
    post_id,
}) => {

    const [type, setType] = useState<"channel" | "chat" | "post">("channel")
    const dispatch = useAppDispatch()
    const texts = useAppSelector(state => state.text.texts[index])
    const status = useAppSelector(state => state.text.status)

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             if(entry.isIntersecting){
    //                 dispatch(getText(
    //                     [{
    //                         user_id,
    //                         date,
    //                         chat_id,
    //                         message_id,
    //                         channel_id,
    //                         post_id,
    //                         bot_index,
    //                         shard
    //                     }]
    //                 ))
    //             }
    //         })
    //     })
    //
    //     if (targetRef.current) {
    //         observer.observe(targetRef.current);
    //     }
    //
    //     return () => {
    //         if (targetRef.current) {
    //             observer.unobserve(targetRef.current);
    //         }
    //     };
    // }, []);

    const render = () => {
        if (status === "init" || status === "loading") {
            return <div>Loading ...</div>;
        }
        if(status === "error"){
            return "Error happen";
        }
    }

    return(
        <div className={"w-[450px]"}>
            {/*<div className={"text-[#f00] text-[24px]"}>*/}
            {/*    {chat_id}*/}
            {/*</div>*/}
            <div className={"flex w-full justify-center"}>
                {
                    status !== "success" ? <div>Loading...</div> :
                        <div className={"text-black"}>{texts.chat}</div>
                }
            </div>
            <div className={"mx-[10px] flex justify-between italic text-[14px] text-textMessage"}>
                <div className={""}>
                    {date.slice(0,10)}
                </div>
                <div className={"flex w-full justify-center"}>
                    {
                        status !== "success" ? <div>Loading...</div> :
                            <div className={"text-black"}>{type.toUpperCase()}</div>
                    }
                </div>
                <div className={"flex"}>
                    message_id:
                    <div className={"underline cursor-pointer hover:text-black"}>{message_id}</div>
                </div>
            </div>
            <div className={"rounded-2xl bg-backMessage p-2"}>
                <div className={"flex text-black"}>
                    {render() || texts.text}
                </div>
                <div className={"w-full flex justify-end text-[14px] text-textMessage"}>
                    {date.slice(11,)}
                </div>
            </div>

        </div>
    )
}