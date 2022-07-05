import { createSelector } from "reselect";

import { vehiclesSliceSelector } from "~/state/reducers/vehicles/selectors";

const selectActiveVehicle = createSelector(
    [vehiclesSliceSelector],
    ({ activeVehicle }) => activeVehicle
);

export { selectActiveVehicle };
