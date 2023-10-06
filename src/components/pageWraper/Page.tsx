import { FC } from "react";
import cn from 'classnames'

interface IPage {
    children: any;
}

export const Page:FC<IPage> = ({children}) => {

    return(
        <div
            className={cn(
                "flex h-full flex_features xl:my-[100px] my-[50px] xl:mx-[120px] xx:mx-[60px] mx-[5px]"
            )}
        >
            {children}
        </div>
    )
}
