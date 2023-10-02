"use client"
import { FC, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import cn from 'classnames';
import {useActions, useAppSelector} from "@/app/store/hooks/useActions";

interface IUser {
    user_id: number;
    usernames: string[];
    names: string[];
}

interface IChat {
    id: number;
    name: string;
    join_string: string;
    shard: number;
    bot_index: number;
    added: string;
    type: string;
}

interface IDropDown {
}
export const DropDown:FC<IDropDown> = ({}) => {

    const router = useRouter()
    const { addResult } = useActions()
    const [type, setType] = useState<"nothing" | "user" | "chat">("nothing")

    const status = useAppSelector(state => state.search.status)
    const res_search = useAppSelector(state => state.search.search)

    const clickHandler = (obj: IUser | IChat, type: string) => {
        if(type === "user"){
            router.push(`/user`)
        } else if(type === "chat") {
            router.push("/channel")
        }
        addResult(obj)
    }

    useEffect(() => {
        if(status === "success"){
            console.log(res_search.users)
        }
    }, [status]);

    const render = (type: string) => {
        if (status === "init" || status === "loading") {
            return <div>Loading {type} ...</div>;
        }
        if(status === "error"){
            return "Error happen";
        }
    }

    return(
        <div
            className={cn(
                "absolute z-10 left-0 right-0",
                "list-none overflow-y-scroll top-[42px] max-h-[350px] min-h-[40px] pt-[10px]",
                "shadow-md bg-white rounded-b-2xl"
            )}
        >
            {
                render("users") ||
                res_search.users.map((item, index) => (
                    <div key={index}>
                        <ItemVariant
                            type={"user"}
                            setType={setType}
                            index={index}
                            item={item.usernames[0]}
                            clickHandler={clickHandler}
                            obj={res_search.users[index]}
                        />
                    </div>
                ))
            }
            {
                render("chats") ||
                res_search.chats.map((item, index) => (
                    <div key={index}>
                        <ItemVariant
                            type={"chat"}
                            setType={setType}
                            index={index}
                            item={item.name}
                            clickHandler={clickHandler}
                            obj={res_search.chats[index]}
                        />
                    </div>
                ))
            }
        </div>
    )
}

interface IItem {
    type: string;
    setType: (type: "nothing" | "user" | "chat") => void;
    index: number;
    item: string;
    clickHandler: (item: IUser | IChat, type: string) => void;
    obj: IUser | IChat
}

const ItemVariant:FC<IItem> = ({
    type,
    setType,
    index,
    item,
    clickHandler,
    obj
}) => {


    const [change, setChange] = useState<boolean>(false)

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            clickHandler(obj, type)
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return(
        <>
            <li
                key={index}
                onClick={() => clickHandler(obj, type)}
                onMouseEnter={() => setChange(true)}
                onMouseLeave={() => setChange(false)}
                className="flex items-center py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
            >
                <div>
                    {item}
                </div>
                <div
                    className={cn(
                        "text-[#6A6D73FF] italic underline",
                        change && "text-black"
                    )}
                >
                    :{type}
                </div>
            </li>
        </>

    )
}