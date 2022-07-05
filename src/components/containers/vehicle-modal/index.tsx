import React, { memo, useMemo } from "react";

import { Modal } from "~/components/ui/modal";
import { useSelector } from "~/state/hooks";
import { selectActiveVehicle } from "~/state/reducers/vehicles/selectors/select-active-vehicle";
import { VehicleModalContent } from "~/components/containers/vehicle-modal/content";

/**
 * Vehicle modal container.
 * It renders the VehicleModalContent component within all vehicle details
 *
 * @return {*}
 */
const VehicleModalComponent: React.FC = () => {
    const activeVehicle = useSelector(selectActiveVehicle);

    const label = useMemo(
        () => `${activeVehicle?.id.toUpperCase()} details` ?? "dialog",
        [activeVehicle?.id]
    );
    const id = useMemo(() => label.toLowerCase().replace(/\s/g, "-"), [label]);

    return (
        <Modal id={id} label={label}>
            <VehicleModalContent />
        </Modal>
    );
};

export const VehicleModal = memo(VehicleModalComponent);
