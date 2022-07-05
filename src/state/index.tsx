import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { VehiclesReducer } from "~/state/reducers/vehicles";
import { InteractionReducer } from "~/state/reducers/interaction";
import { SliceName } from "~/state/enum";
import { rootSaga } from "~/state/middlewares/saga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = configureStore({
    reducer: {
        [SliceName.VEHICLES]: VehiclesReducer,
        [SliceName.INTERACTION]: InteractionReducer,
    },
    middleware,
});

sagaMiddleware.run(rootSaga);

export { store };
