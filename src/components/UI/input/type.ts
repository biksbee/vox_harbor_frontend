export type InputType = 'channel' | 'nick' | 'user_id' | 'link';

export const inputStyle: Record<InputType, string> = {
    channel: "",
    nick: "",
    user_id: "",
    link: "",
}

export const inputMask = {
    channel: "",
    nick: "@",
    user_id: "id: ",
    link: "https://",
}

export const inputValidation = {
    channel: /^.{2,}$/,
    nick: /^.{2,}$/,
    user_id: /^[0-9]{8,}$/,
    link: /^https:\/\/t.me\/[a-z0-9_\s/\]{2,}\/[0-9]{2,}$/,
}