'use client'
import { FC, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAppSelector, useAppDispatch, useActions} from "@/app/store/hooks/useActions";
import {getMessageById} from "@/app/store/features/messages/message";

interface IChannel {

}

export const ChannelPage:FC<IChannel> = () => {

    const router = useRouter()
    const dispatch = useAppDispatch()
    const chat = useAppSelector(state => state.search.chat)
    const status = useAppSelector(state => state.search.status)

    useEffect(() => {
        if(chat.id === undefined){
            router.push('/')
        }
    }, []);
    // -1001225974297

    return(
        <div>
            <div>
                Chat_ID {chat.id}
            </div>
            <div>
                Chat_Name {chat.name}
            </div>
            <div>
                Chat_Join_String {chat.join_string}
            </div>
            <div>
                Chat_Added {chat.added}
            </div>
            <div>
                Chat_Type {chat.type}
            </div>
        </div>
    )
}