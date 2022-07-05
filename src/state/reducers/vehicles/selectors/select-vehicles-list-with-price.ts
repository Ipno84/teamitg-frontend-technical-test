import { createSelector } from "reselect";

import { selectVehiclesList } from "~/state/reducers/vehicles/selectors/select-vehicles-list";

const selectVehiclesListWithPrice = createSelector(
    [selectVehiclesList],
    (list) => list.filter((vehicle) => Boolean(vehicle.price))
);

export { selectVehiclesListWithPrice };
