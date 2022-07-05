import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SliceName } from "~/state/enum";
import { VehiclesSliceState } from "~/state/reducers/vehicles/state";
import { IVehicle } from "~/state/reducers/vehicles/typings";

const VehiclesSlice = createSlice({
    name: SliceName.VEHICLES,
    initialState: VehiclesSliceState,
    reducers: {
        getVehicles: (state) => {
            state.loadingList = true;
        },
        setError: (state, action: PayloadAction<{ error: string }>) => {
            state.loadingList = false;
            state.error = action.payload.error;
        },
        setVehicles: (state, action: PayloadAction<{ list: IVehicle[] }>) => {
            state.loadingList = false;
            state.error = "";
            state.list = action.payload.list;
        },
        getVehicle: (state, action: PayloadAction<{ id: IVehicle["id"] }>) => {
            if (!state.loadingDetail.includes(action.payload.id)) {
                state.loadingDetail.push(action.payload.id);
            }
        },
        setVehicle: (state, action: PayloadAction<{ vehicle: IVehicle }>) => {
            const index = state.list.findIndex(
                (item) => item.id === action.payload.vehicle.id
            );
            state.list[index] = {
                ...state.list[index],
                ...action.payload.vehicle,
            };
        },
        setActiveVehicle: (
            state,
            action: PayloadAction<{ activeVehicle: IVehicle }>
        ) => {
            state.activeVehicle = action.payload.activeVehicle;
        },
    },
});

const VehiclesReducer = VehiclesSlice.reducer;
const VehiclesActions = VehiclesSlice.actions;

export { VehiclesSlice, VehiclesReducer, VehiclesActions };
