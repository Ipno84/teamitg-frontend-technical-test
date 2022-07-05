import { createSelector } from "reselect";

import { vehiclesSliceSelector } from "~/state/reducers/vehicles/selectors";

const selectError = createSelector(
    [vehiclesSliceSelector],
    ({ error }) => error
);

export { selectError };
