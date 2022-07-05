import React, { memo, useCallback } from "react";
import { batch } from "react-redux";

import { ItemOuter } from "~/components/ui/item/item-outer";
import { ItemInner } from "~/components/ui/item/item-inner";
import { InfoContainer } from "~/components/ui/item/info-container";
import { Name } from "~/components/ui/item/name";
import { Price } from "~/components/ui/item/price";
import { Description } from "~/components/ui/item/description";
import { ImageContainer } from "~/components/ui/item/image-container";
import { Image } from "~/components/ui/item/image";
import { ButtonContainer } from "~/components/ui/item/button-container";
import { ShowMore } from "~/components/ui/item/show-more";
import { ItemProps } from "~/components/ui/item/typings";
import { useDispatch } from "~/state/hooks";
import { InteractionActions } from "~/state/reducers/interaction";
import { VehiclesActions } from "~/state/reducers/vehicles";

const ItemComponent: React.FC<ItemProps> = ({ vehicle }) => {
    const dispatch = useDispatch();
    const onMoreClick = useCallback(() => {
        batch(() => {
            dispatch(
                VehiclesActions.setActiveVehicle({ activeVehicle: vehicle })
            );
            dispatch(InteractionActions.setModalOpen({ isModalOpen: true }));
        });
    }, [dispatch, vehicle, batch]);
    return (
        <ItemOuter key={vehicle.id}>
            <ItemInner>
                <ImageContainer>
                    <Image
                        src={vehicle.media[0].url}
                        alt={`${vehicle.id} desktop resolution`}
                    />
                    <Image
                        isMobile
                        src={vehicle.media[1].url}
                        alt={`${vehicle.id} mobile resolution`}
                    />
                    <ButtonContainer>
                        <ShowMore onClick={onMoreClick} />
                    </ButtonContainer>
                </ImageContainer>
                <InfoContainer>
                    <Name>
                        <span>
                            <span>{vehicle.id}</span>
                        </span>
                    </Name>
                    <Price>From {vehicle.price}</Price>
                    <Description>{vehicle.description}</Description>
                </InfoContainer>
            </ItemInner>
        </ItemOuter>
    );
};

export const Item = memo(ItemComponent);
