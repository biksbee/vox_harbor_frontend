export type ButtonType = "send" | "subPage";

export const buttonStyle: Record<ButtonType, string> = {
    send: "bg-[#D2D2E1FF] text-[rgba(0,0,0,.5)]",
    subPage: "bg-navbar text-white hover:text-[rgba(0,0,0,.8)] "
}