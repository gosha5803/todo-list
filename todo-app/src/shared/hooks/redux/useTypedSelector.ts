import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AppStore } from "shared/store";

export const useTypedSelector: TypedUseSelectorHook<AppStore> = useSelector