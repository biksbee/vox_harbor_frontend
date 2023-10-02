import { createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import axios from "@/app/axios";

interface IText {
    "text": string,
    "chat": string,
    "comment": {
        "user_id": number,
        "date": string,
        "chat_id": number,
        "message_id": number,
        "channel_id": number,
        "post_id": number,
        "bot_index": number,
        "shard": number
    }
}

interface ITexts {
    texts: IText[],
    status: "init" | "loading" | "error" | "success";
}

const initialState: ITexts = {
    texts: [
        {
            text: "",
            chat: "",
            comment: {
                user_id: 0,
                date: "",
                chat_id: 0,
                message_id: 0,
                channel_id: 0,
                post_id: 0,
                bot_index: 0,
                shard: 0
            },
        }
    ],
    status: "init"
}

export const textSlice = createSlice({
    name: "text",
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addCase(getText.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getText.fulfilled, (state, action) => {
                state.status = 'success'
                state.texts = action.payload
            })
            .addCase(getText.rejected, (state) => {
                state.status = 'error'
            })
    }
})

export const getText = createAsyncThunk('/getText', async(
    value: [{
        user_id: number,
        date: string,
        chat_id: number,
        message_id: number,
        channel_id: number,
        post_id: number,
        bot_index: number,
        shard: number
    }]
) => {
        const { data } = await axios.post(`/messages`, value)
        return data;
    }
)

export const textAction = textSlice.actions;
export default textSlice.reducer;
