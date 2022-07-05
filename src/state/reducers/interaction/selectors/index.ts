import { SliceName } from "~/state/enum";
import { RootState } from "~/state/typings";

const interactionSliceSelector = (state: RootState) =>
    state[SliceName.INTERACTION];

export { interactionSliceSelector };
