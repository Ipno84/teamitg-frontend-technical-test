import { createSelector } from "reselect";

import { interactionSliceSelector } from "~/state/reducers/interaction/selectors";

const isModalOpen = createSelector(
    [interactionSliceSelector],
    (state) => state.isModalOpen
);

export { isModalOpen };
