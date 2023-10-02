import { createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import axios from "@/app/axios";


interface IMessage {
    user_id: number,
    date: string,
    chat_id: number,
    message_id: number,
    channel_id: number,
    post_id: number,
    bot_index: number,
    shard: number
}

interface IMessages {
    messages: [IMessage];
    status: "init" | "loading" | "error" | "success";
}



const initialState: IMessages = {
    messages: [{
        user_id: 0,
        date: "",
        chat_id: 0,
        message_id: 0,
        channel_id: 0,
        post_id: 0,
        bot_index: 0,
        shard: 0
    }],
    status: "init"
};

export const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(getMessageById.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getMessageById.fulfilled, (state, action) => {
                state.status = 'success'
                state.messages = action.payload
            })
            .addCase(getMessageById.rejected, (state) => {
                state.status = 'error'
            })
    }
})


export const getMessageById = createAsyncThunk('/message',
    async(
        props: {
            id: number,
            offset: number
        }
    ) => {
        const { data } = await axios.get(`/comments?user_id=${props.id}&offset=${props.offset}`)
        return data;
    }
)

export const messageAction = messageSlice.actions;
export default messageSlice.reducer;
