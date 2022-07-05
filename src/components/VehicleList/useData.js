import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "~/state/hooks";
import { selectVehiclesListWithPrice } from "~/state/reducers/vehicles/selectors/select-vehicles-list-with-price";
import { isLoadingList } from "~/state/reducers/vehicles/selectors/is-loading-list";
import { selectError } from "~/state/reducers/vehicles/selectors/select-error";
import { VehiclesActions } from "~/state/reducers/vehicles";

export default function useData() {
    const dispatch = useDispatch();

    const vehicles = useSelector(selectVehiclesListWithPrice);
    const loading = useSelector(isLoadingList);
    const error = useSelector(selectError);

    const getVehicles = useCallback(
        () => dispatch(VehiclesActions.getVehicles()),
        [dispatch]
    );

    useEffect(() => {
        getVehicles();
    }, [getVehicles]);

    return [loading, error, vehicles];
}
