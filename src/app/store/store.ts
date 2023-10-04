import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import searchReducer from "@/app/store/features/search/search";
import messageReducer from "@/app/store/features/messages/message";
import textReducer from "@/app/store/features/messages/text";
import reactionReducer from "@/app/store/features/post/post";

export const store = configureStore({
    reducer: {
        search: searchReducer,
        messages: messageReducer,
        text: textReducer,
        reaction: reactionReducer,
    },
});


setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;