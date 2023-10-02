import { createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import axios from "@/app/axios";

interface IType {
    id: number,
    name: string,
    join_string: string,
    shard: number,
    bot_index: number,
    added: string,
    type: string,
    status: "init" | "loading" | "error" | "success";
}


const initialState = {
    type: {},
    status: "init"
}

export const typeMessageSlice = createSlice({
    name: "typeMessage",
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addCase(getTitleById.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getTitleById.fulfilled, (state, action: PayloadAction<IType>) => {
                state.status = 'success'
                state.type = action.payload
            })
            .addCase(getTitleById.rejected, (state) => {
                state.status = 'error'
            })
    }
})

export const getTitleById = createAsyncThunk('/getTitle',
    async(
        id: number
    ) => {
        const { data } = await axios.get(`/chat?chat_id=${id}`)
        return data;
    }
)

export const typeMessageAction = typeMessageSlice.actions;
export default typeMessageSlice.reducer;
