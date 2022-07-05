import {
    TypedUseSelectorHook,
    useDispatch as useDefaultDispatch,
    useSelector as useDefaultSelector,
} from "react-redux";

import { RootState, AppDispatch } from "~/state/typings";

const useDispatch: () => AppDispatch = useDefaultDispatch;
const useSelector: TypedUseSelectorHook<RootState> = useDefaultSelector;

export { useDispatch, useSelector };
