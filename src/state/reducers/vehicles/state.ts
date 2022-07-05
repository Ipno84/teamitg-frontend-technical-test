import { IVehiclesSliceState } from "~/state/reducers/vehicles/typings";

const VehiclesSliceState: IVehiclesSliceState = {
    error: "",
    activeVehicle: null,
    loadingList: false,
    loadingDetail: [],
    list: [],
};

export { VehiclesSliceState };
