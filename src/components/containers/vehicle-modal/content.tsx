import React, { memo, useMemo } from "react";
import { ListItem } from "~/components/ui/list/item";
import { ListWrapper } from "~/components/ui/list/wrapper";

import { Modal } from "~/components/ui/modal";
import { useSelector } from "~/state/hooks";
import { selectActiveVehicle } from "~/state/reducers/vehicles/selectors/select-active-vehicle";

const VehicleModalContentComponent: React.FC = () => {
    const activeVehicle = useSelector(selectActiveVehicle);

    const label = useMemo(
        () => activeVehicle?.id.toUpperCase() ?? "",
        [activeVehicle?.id]
    );

    const emissionsValue = useMemo(
        () => activeVehicle?.meta?.emissions.value,
        [activeVehicle?.meta?.emissions.value]
    );

    const items = useMemo<{ key: string; value?: string | number }[]>(() => {
        return [
            {
                key: "Body Style",
                value: activeVehicle?.meta?.bodystyles?.join(", ") ?? "N/A",
            },
            {
                key: "Drive Train",
                value: activeVehicle?.meta?.drivetrain?.join(", ") ?? "N/A",
            },
            {
                key: "Passengers",
                value: activeVehicle?.meta?.passengers ?? "N/A",
            },
            {
                key: "Emissions",
                value:
                    activeVehicle?.meta?.emissions.template.replace(
                        "$value",
                        String(emissionsValue)
                    ) ?? "N/A",
            },
        ];
    }, [activeVehicle?.meta]);

    return (
        <ListWrapper>
            {items.map(({ key, value }) => (
                <ListItem key={key}>
                    <strong>{key}</strong>: {value}
                </ListItem>
            ))}
        </ListWrapper>
    );
};

export const VehicleModalContent = memo(VehicleModalContentComponent);
