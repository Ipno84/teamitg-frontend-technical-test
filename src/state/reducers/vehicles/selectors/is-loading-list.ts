import { createSelector } from "reselect";

import { vehiclesSliceSelector } from "~/state/reducers/vehicles/selectors";

const isLoadingList = createSelector(
    [vehiclesSliceSelector],
    ({ loadingList }) => loadingList
);

export { isLoadingList };
