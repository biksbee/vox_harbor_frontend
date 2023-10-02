import { FC } from "react";
import cn from 'classnames'

interface IPage {
    children: any;
}

export const Page:FC<IPage> = ({children}) => {

    return(
        <div
            className={cn(
                "flex jit xl:my-[100px] my-[50px] xl:mx-[120px] xx:mx-[60px] md:mx-[40px] mx-[15px]"
            )}
        >
            {children}
        </div>
    )
}
