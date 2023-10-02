import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { TypedUseSelectorHook, useSelector, useDispatch} from "react-redux";
import {AppDispatch, RootState} from "@/app/store/store";

import { searchAction } from "@/app/store/features/search/search";
import { messageAction } from "@/app/store/features/messages/message";
import { textAction } from "@/app/store/features/messages/text";

const rootActions = {
    ...searchAction,
    ...messageAction,
    ...textAction,
}

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useActions = () => {

    const dispatch = useAppDispatch();
    return useMemo(() =>
        bindActionCreators(rootActions, dispatch), [dispatch]
    )
}