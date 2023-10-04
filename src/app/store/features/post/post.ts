import { createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import axios from "@/app/axios";
import {stat} from "node:fs";

interface IReaction {
    id: number,
    channel_id: number,
    post_date: string,
    point_date: string,
    keys: string[],
    values: number[],
    bot_index: number,
    shard: number
}

interface IReactions {
    value: IReaction[],
    status: "init" | "loading" | "error" | "success"
}

const initialState: IReactions = {
    value: [
        {
            "id": 0,
            "channel_id": 0,
            "post_date": "2023-10-03T12:14:09.613Z",
            "bot_index": 0,
            "shard": 0,
            "point_date": "2023-10-03T12:14:09.614Z",
            "keys": [ "string" ],
            "values": [ 0 ]
        }
    ],
    status: "init"
}

export const reactionSlice = createSlice({
    name: "reaction",
    initialState,
    reducers: {

    },
    extraReducers: builder =>  {
        builder
            .addCase(reactionByUrl.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(reactionByUrl.fulfilled, (state, action) => {
                state.status = 'success'
                state.value = action.payload
            })
            .addCase(reactionByUrl.rejected, (state) => {
                state.status = 'error'
            })
    }
})

export const reactionByUrl = createAsyncThunk('/reactionByUrl', async (value: string) => {
    const { data } = await axios.get(`reactions_by_url?post_url=${value}`)
    return data;
})

export const reactionAction = reactionSlice.actions;
export default reactionSlice.reducer;