import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import axios from "@/app/axios";

interface IUser {
    user_id: number;
    usernames: string[];
    names: string[];
    status: "init" | "loading" | "error" | "success";
}

interface IChat {
    id: number;
    name: string;
    join_string: string;
    shard: number;
    bot_index: number;
    added: string;
    type: string;
    status: "init" | "loading" | "error" | "success";
}

interface ISearch {
    search: [users: IUser, chats: IChat]
    status: "init" | "loading" | "error" | "success";
}

interface IResult {
    result: IUser | IChat
}

const initialState = {
    search: [],
    result: {},
    status: "init"
}

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        addResult: (state, action) => {
            state.result = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(search.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(search.fulfilled, (state, action) => {
                state.status = 'success'
                state.search = action.payload
                state.result = state.search
            })
            .addCase(search.rejected, (state) => {
                state.status = 'error'
            })
    }
})

export const search = createAsyncThunk('/search', async(value: string) => {
    const { data } = await axios.get(`users_and_chats?query=${value}`, )
    return data;
})

export const searchAction = searchSlice.actions;
export default searchSlice.reducer;

