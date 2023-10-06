export type ButtonType = "send" | "subPage" | "default";

export const buttonStyle: Record<ButtonType, string> = {
    send: "bg-[rgba(210,210,225,1)] text-zinc-400 hover:bg-[rgba(203,203,220,1)] hover:text-[#000] active:text-white",
    subPage: "bg-navbar text-white hover:text-[rgba(255,255,255,.6)]",
    default: "bg-button text-white hover:bg-[rgba(2,106,246,.7) p-3 hover:text-[rgba(255,255,255,.5)] w-[300px]"
}