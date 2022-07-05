import { AnyAction } from "redux";
import {
    all,
    put,
    PutEffect,
    call,
    CallEffect,
    AllEffect,
} from "redux-saga/effects";

import { request } from "~/api/helpers";
import { VehiclesActions } from "~/state/reducers/vehicles";
import { IVehicle } from "~/state/reducers/vehicles/typings";

function* getVehiclesSagaAction(): Generator<
    CallEffect<Object> | AllEffect<PutEffect<AnyAction>> | PutEffect<AnyAction>,
    void,
    unknown
> {
    try {
        const list = yield call(request, "/api/vehicles.json");
        if(!list || !Array.isArray(list)) {
            throw new Error('Invalid response');
        }
        const vehicleDetailActions = (list as IVehicle[]).map(({ id }) =>
            put(VehiclesActions.getVehicle({ id }))
        );
        const actions: PutEffect<AnyAction>[] = [
            put(VehiclesActions.setVehicles({ list: list as IVehicle[] })),
            ...vehicleDetailActions,
        ];

        yield all(actions);
    } catch (error) {
        yield put(VehiclesActions.setError({ error: (error as any).message }));
    }
}

export { getVehiclesSagaAction };
