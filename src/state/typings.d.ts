import { store } from "~/state";

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { RootState, AppDispatch };
