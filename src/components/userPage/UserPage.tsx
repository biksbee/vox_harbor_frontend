'use client'
import {FC, useEffect, useState} from "react";
import { useRouter} from "next/navigation";

import { MessageNoText} from "@/components/UI/messageComponent/MessageNoText";

import {useAppSelector, useAppDispatch, useActions} from "@/app/store/hooks/useActions";
import { getMessageById } from "@/app/store/features/messages/message";
import { search } from "@/app/store/features/search/search";

interface IUserPage {

}

export const UserPage:FC<IUserPage> = ({}) => {

    const user = useAppSelector(state => state.search.result)
    const status_user = useAppSelector(state => state.search.status)


    const [offset, setOffset] = useState<number>(0)
    const [id, setId] = useState<number>(user.user_id ?? 503192108)


    const dispatch = useAppDispatch()

    const router = useRouter()

    useEffect(() => {
        if(user.user_id === undefined){
            router.push('/')
        } else {
            setId(user.user_id)
            dispatch(getMessageById({id, offset}))
        }
    }, []);

    useEffect(() => {
        dispatch(getMessageById({id, offset}))
    }, [offset]);

    const render = (status: string) => {
        if (status === "init" || status === "loading") {
            return <div>Loading...</div>;
        }
        if (status === "error") {
            return "Error happen";
        }
    }

    return(
        render(status_user) ||
        <div className={"w-full mt-[50px]"}>
            <div className={"flex"}>
                <div className={"flex text-[24px]"}>
                    <div className={"text-button"}>@</div>{user.usernames[0]}
                </div>
            </div>
            <div>
                user_id: {user.user_id}
            </div>
            <div className={"flex mt-[35px]"}>
                    <div className={"text-[20px]"}>
                        Все ранее используемые имена пользователем:
                    </div>
                    <div className={"flex gap-x-[10px] ml-[10px]"}>
                        {user.usernames.map((item, index) => (
                            <div
                                key={index}
                                className={"text-[20px] text-[#6a6d73] italic"}
                            >
                                {item},
                            </div>
                        ))}
                    </div>
            </div>
            <div className={"mt-[25px]"}>
                <MessageNoText />
            </div>
            <div className={"flex gap-x-[10px] px-[10px] mt-[20px] bg-[rgba(106,109,115,0.5)]"}>
                {
                    [1,2,3,4,5].map((item, index) => (
                        <div key={index}>
                            <NumberOffset
                                item={item}
                                setOffset={setOffset}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

interface INumber {
    item: number;
    setOffset: (offset: number) => void;
}

const NumberOffset:FC<INumber> = ({item, setOffset}) => {


    return(
        <div
            onClick={() => setOffset(item-1)}
            className={"cursor-pointer hover:bg-blue-300 text-button hover:text-white px-[5px] duration-300"}
        >
            <div className={""}>
                {item}
            </div>
        </div>
    )
}