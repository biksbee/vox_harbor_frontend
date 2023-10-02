import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import axios from "@/app/axios";

interface IUser {
    user_id: number;
    usernames: string[];
    names: string[];
}

interface IChat {
    id: number;
    name: string;
    join_string: string;
    shard: number;
    bot_index: number;
    added: string;
    type: string;
}

interface ISearch {
    search: {
        users: IUser[],
        chats: IChat[]
    }
    user: IUser,
    chat: IChat,
    status: "init" | "loading" | "error" | "success";
}


const initialState = {
    search: {
        users: [
            {
                user_id: 0,
                usernames: [""],
                names: [""]
            }
        ],
        chats: [
            {
                id: 0,
                name: "",
                join_string: "",
                shard: 0,
                bot_index: 0,
                added: "",
                type: ""
            }
        ]
    },
    user: {
        user_id: 0,
        usernames: [""],
        names: [""]
    },
    chat: {
        id: 0,
        name: "",
        join_string: "",
        shard: 0,
        bot_index: 0,
        added: "",
        type: ""
    },
    status: "init"
}

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        addResult: (state, action) => {
            if(state.search.chats.length === 0)
                state.user = action.payload
            else state.chat = action.payload
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

