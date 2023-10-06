export type ButtonType = "send" | "subPage" | "default";

export const buttonStyle: Record<ButtonType, string> = {
    send: "bg-[#D2D2E1FF] text-[rgba(0,0,0,.5)] text-zinc-400 hover:text-[#000]",
    subPage: "bg-navbar text-white hover:text-[rgba(0,0,0,.8)]",
    default: "bg-button text-white hover:bg-[rgba(2,106,246,.7) p-3 hover:text-[rgba(255,255,255,.5)] w-[300px]"
}