import { createSelector } from "reselect";

import { vehiclesSliceSelector } from "~/state/reducers/vehicles/selectors";

const selectVehiclesList = createSelector(
    [vehiclesSliceSelector],
    ({ list }) => list
);

export { selectVehiclesList };
