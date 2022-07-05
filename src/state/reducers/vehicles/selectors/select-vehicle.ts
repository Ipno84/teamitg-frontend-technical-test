import createCachedSelector from "re-reselect";
import { RootState } from "~/state/typings";

import { selectVehiclesList } from "~/state/reducers/vehicles/selectors/select-vehicles-list";
import { IVehicle } from "../typings";

const selectVehicle = createCachedSelector(
    [selectVehiclesList, (_: RootState, id: IVehicle["id"]) => id],
    (list, id) => list.find((vehicle) => vehicle.id === id)
)((_: RootState, id: IVehicle["id"]) => id);

export { selectVehicle };
