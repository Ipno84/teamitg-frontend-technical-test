import { SliceName } from "~/state/enum";
import { RootState } from "~/state/typings";

const vehiclesSliceSelector = (state: RootState) => state[SliceName.VEHICLES];

export { vehiclesSliceSelector };
