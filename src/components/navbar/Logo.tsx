import { FC } from "react";

export const Logo:FC = () => {

    return(
        <a href={"/"}>
            <div className={"flex"}>
                <div>
                    <div className={"flex"}>
                        VOX-HARBOR
                    </div>
                    <div className={"logo_line w-full h-[3px] bg-[#000]"} />
                </div>
            </div>
        </a>
    )
}