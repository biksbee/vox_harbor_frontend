'use client'
import { FC, useState, useEffect } from "react";

import { Input } from "@/components/UI/input/Input"
import { DropDown } from "@/components/UI/dropDown/DropDown";

import { useAppSelector, useAppDispatch, useActions} from "@/app/store/hooks/useActions";
import { search } from "@/app/store/features/search/search";

export const SubMenu:FC = () => {

    const [value, setValue] = useState<string>("")
    const [type, setType] = useState<string>("")
    const [disabled, setDisabled] = useState<boolean>(true)

    const [open, setOpen] = useState<boolean>(false)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if(value.length >= 3){
            setOpen(true)
            dispatch(search(value))
        } else {
            setOpen(false)
        }

    }, [value]);

    return(
        <div className={"mb-[50px]"}>
            <div className={"flex flex-col bg-wraper rounded-[22px] py-[22px] px-[12px]"}>
                <div className={"flex gap-x-[20px]"}>
                    <div className={"relative w-full"}>
                        <Input
                            id={"userValue"}
                            text={"ник, id, ссылка на комментарий, название канала"}
                            value={value}
                            setValue={setValue}
                            setType={setType}
                            open={open}
                        />
                        {
                            open &&
                            <DropDown/>
                        }
                    </div>
                </div>
                <div className={"pt-[10px] px-[30px] text-[14px] text-inf"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
        </div>
    )
}