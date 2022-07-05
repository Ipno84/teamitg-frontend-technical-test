import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SliceName } from "~/state/enum";
import { InteractionSliceState } from "~/state/reducers/interaction/state";

const InteractionSlice = createSlice({
    name: SliceName.INTERACTION,
    initialState: InteractionSliceState,
    reducers: {
        toggleModal: (state) => {
            state.isModalOpen = !state.isModalOpen;
        },
        setModalOpen: (
            state,
            action: PayloadAction<{ isModalOpen: boolean }>
        ) => {
            state.isModalOpen = action.payload.isModalOpen;
        },
    },
});

const InteractionReducer = InteractionSlice.reducer;
const InteractionActions = InteractionSlice.actions;

export { InteractionSlice, InteractionReducer, InteractionActions };
