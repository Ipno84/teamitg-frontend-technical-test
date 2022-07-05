import { fork } from "redux-saga/effects";

import { getVehiclesSaga } from "~/state/middlewares/saga/vehicles/get-vehicles";
import { getVehicleSaga } from "~/state/middlewares/saga/vehicles/get-vehicle";

function* vehiclesSaga(): Generator {
    yield fork(getVehiclesSaga);
    yield fork(getVehicleSaga);
}

export { vehiclesSaga };
