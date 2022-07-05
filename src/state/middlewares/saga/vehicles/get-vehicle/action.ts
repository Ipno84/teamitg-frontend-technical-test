import { AnyAction } from "redux";
import {
    select,
    all,
    put,
    PutEffect,
    call,
    CallEffect,
    AllEffect,
    SelectEffect,
} from "redux-saga/effects";

import { request } from "~/api/helpers";
import { VehiclesActions } from "~/state/reducers/vehicles";
import { selectVehicle } from "~/state/reducers/vehicles/selectors/select-vehicle";
import { IVehicle } from "~/state/reducers/vehicles/typings";
import { RootState } from "~/state/typings";

function* getVehicleSagaAction({
    payload: { id },
}: {
    payload: { id: IVehicle["id"] };
}): Generator<
    | CallEffect<Object>
    | SelectEffect
    | PutEffect<{
          payload: {
              vehicle: IVehicle;
          };
          type: string;
      }>,
    void,
    unknown
> {
    try {
        const vehicle = yield select((state: RootState) =>
            selectVehicle(state, id)
        );
        if (!vehicle) {
            throw new Error("Vehicle not found");
        }
        const vehicleDetails = yield call(
            request,
            (vehicle as IVehicle).apiUrl
        );
        const newVehicle = {
            ...(vehicle as IVehicle),
            ...(vehicleDetails as IVehicle),
        };

        yield put(
            VehiclesActions.setVehicle({
                vehicle: newVehicle,
            })
        );
    } catch {}
}

export { getVehicleSagaAction };
