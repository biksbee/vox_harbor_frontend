import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/app/axios";

interface IUser {
    search: string[]
    status: "init" | "loading" | "error" | "success";
}

const initialState: IUser = {
    search: [],
    status: "init"
}

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(searchByNick.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(searchByNick.fulfilled, (state) => {
                state.status = 'success'
            })
            .addCase(searchByNick.rejected, (state) => {
                state.status = 'error'
            })

    }
})

export const searchByNick = createAsyncThunk('/user', async() => {
    const { data } = await axios.get('/user.json').then(response => response.data)
    console.log(data)
    return data;
})

export const searchAction = searchSlice.actions;
export default searchSlice.reducer;

