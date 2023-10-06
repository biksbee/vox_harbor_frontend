import { FC } from "react";
import { Page } from "@/components/pageWraper/Page";

export const Footer:FC = () => {

    return(
        <div className={"cb flex absolute bottom-0 justify-center w-full xl:px-[100px] md:px-[45px] px-[10px]"}>
            <div className={"flex justify-between gap-x-[50px]"}>
                <a href="https://github.com/pufit" className={"flex"} target={"_blank"}>
                    dev:<div className={"gitLink"}>
                        @pufit
                    </div>
                </a>
                <a href="https://github.com/constkolesnyak" className={"flex"} target={"_blank"}>
                    dev:<div className={"gitLink"}>
                        @tsnok
                    </div>
                </a>
                <a href="https://github.com/biksbee" className={"flex"} target={"_blank"}>
                    web:<div className={"gitLink"}>
                        @biksbee
                    </div>
                </a>
            </div>
        </div>
    )
}