import { takeEvery, ForkEffect } from "redux-saga/effects";
import { TakeableChannel } from "redux-saga";

import { getVehicleSagaAction } from "~/state/middlewares/saga/vehicles/get-vehicle/action";
import { SliceName } from "~/state/enum";

function* getVehicleSaga(): Generator<ForkEffect<never>, void, unknown> {
    yield takeEvery(
        `${SliceName.VEHICLES}/getVehicle` as unknown as TakeableChannel<unknown>,
        getVehicleSagaAction
    );
}

export { getVehicleSaga };
