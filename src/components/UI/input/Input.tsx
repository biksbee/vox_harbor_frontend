import { FC, useState, useEffect } from "react";
import cn from 'classnames';
import Image from "next/image";

import type { InputType } from "@/components/UI/input/type";
import { inputValidation } from "@/components/UI/input/type";
import {useDebounce} from "@/hooks/useDebounce";

interface IInput {
    id: string;
    text: string;
    value: string;
    setValue: (value: string) => void;
    setType: (type: string) => void;
    icon?: string;
    open?: boolean;
}

export const Input:FC<IInput> = ({
                                     id,
                                     text,
                                     value,
                                     setValue,
                                     open
}) => {

    const [error, setError] = useState<boolean>(false)
    const [debounceValue, setDebounceValue] = useState<string>(value)
    const debounceItem = useDebounce(debounceValue, 300)

    const expressionNick: RegExp = inputValidation['nick']
    const expressionId: RegExp = inputValidation['user_id']
    const expressionLink: RegExp = inputValidation['link']
    const expressionChannel: RegExp = inputValidation['channel']


    useEffect(() => {
        if(value === 'send'){
            setDebounceValue('')
        }
    }, [value]);

    useEffect(() => {
        setValue(debounceItem)
    }, [debounceItem]);


    const handlerValueInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        return setDebounceValue(e.target.value)
    }

    return(
        <div className={'relative'}>
            <input
                id={id}
                value={debounceValue}
                onChange={handlerValueInput}
                className={cn(
                    "block",
                    "px-8 pt-5 pb-1 text-[#000]",
                    "w-full text-md",
                    "appearance-none focus:outline-none focus:ring-0",
                    "peer",
                    error && "cb",
                    !open ? "rounded-[24px]" : "rounded-t-[24px]"
                )}
                placeholder=' '
            />
            <label
                className='
                        absolute
                        text-md
                        text-zinc-400
                        duration-150
                        transform
                        -translate-y-3
                        scale-75
                        top-4
                        z-10
                        origin-[0]
                        left-6
                        peer-placeholder-shown:scale-100
                        peer-placeholder-shown:translate-y-0
                        peer-focus:-translate-y-3
                    '
                htmlFor={id}
            >
                {text}
            </label>
            {/*list items*/}
        </div>

    )
}