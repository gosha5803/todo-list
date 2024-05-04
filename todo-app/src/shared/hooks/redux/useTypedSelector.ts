import { bindActionCreators } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppStore } from "shared/store";
import { allActions } from "shared/store/allActions/allActions";

export const useTypedSelector: TypedUseSelectorHook<AppStore> = useSelector
export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActions, dispatch)
}