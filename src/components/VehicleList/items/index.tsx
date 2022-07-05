import React, { memo } from "react";

import { ItemsProps } from "~/components/VehicleList/items/typings";
import { Container } from "~/components/VehicleList/items/container";
import { Item } from "~/components/ui/item";

const ItemsComponent: React.FC<ItemsProps> = ({ vehicles }) => {
    if (vehicles && Array.isArray(vehicles)) {
        return (
            <Container>
                {vehicles.map((vehicle) => (
                    <Item key={vehicle.id} vehicle={vehicle} />
                ))}
            </Container>
        );
    }

    return null;
};

export const Items = memo(ItemsComponent);
