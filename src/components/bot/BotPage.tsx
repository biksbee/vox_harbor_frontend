'use client'
import { FC } from "react";
import { Button } from "@/components/UI/button/Button";
import { useRouter } from "next/navigation";
import { Test } from "@/components/charts/miniMap/test";

export const BotPage:FC = () => {

    const router = useRouter()

    return(
        <div className={"w-full pt-[35px] h-[500px] flex flex-col items-center"}>
            <div className={"text-[20px] text-center"}>
                На данный момент, эта функциональность находится в разработке, в скором времени будут обновления
            </div>
            <div className={"w-full"}>
                <Test />
            </div>
            <div className={"mt-[20px] flex md:flex-row flex-col xl:gap-[50px] gap-[25px] w-max"}>
                <Button
                    text={"вернуться на главную"}
                    handler={() => router.push('/')}
                    type={"default"}
                />
                <Button
                    text={"назад"}
                    handler={() => router.back()}
                    type={"default"}
                />
            </div>
        </div>
    )
}