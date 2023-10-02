import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import searchReducer from "@/app/store/features/search/search";
import messageReducer from "@/app/store/features/messages/message";
import textReducer from "@/app/store/features/messages/text"

export const store = configureStore({
    reducer: {
        search: searchReducer,
        messages: messageReducer,
        text: textReducer,
    },
});


setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;