import { takeLatest } from "redux-saga/effects";

import { getVehiclesSagaAction } from "~/state/middlewares/saga/vehicles/get-vehicles/action";
import { SliceName } from "~/state/enum";

function* getVehiclesSaga(): Generator {
    yield takeLatest(
        `${SliceName.VEHICLES}/getVehicles`,
        getVehiclesSagaAction
    );
}

export { getVehiclesSaga };
