import { fork } from "redux-saga/effects";

import { vehiclesSaga } from "~/state/middlewares/saga/vehicles";

function* rootSaga(): Generator {
    yield fork(vehiclesSaga);
}

export { rootSaga };
