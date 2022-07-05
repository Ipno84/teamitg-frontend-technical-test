import React, { memo, useCallback } from "react";

import { DialogBackdrop } from "~/components/ui/modal/backdrop";
import { DialogContainer } from "~/components/ui/modal/container";
import { DialogWrapper } from "~/components/ui/modal/wrapper";
import { DialogLabel } from "~/components/ui/modal/label";
import { DialogContent } from "~/components/ui/modal/content";
import { DialogButton } from "~/components/ui/modal/button";
import { ModalProps } from "~/components/ui/modal/typings";
import { RFCC } from "~/typings/generic";
import { useDispatch, useSelector } from "~/state/hooks";
import { isModalOpen as isModalOpenSelector } from "~/state/reducers/interaction/selectors/is-modal-open";
import { InteractionActions } from "~/state/reducers/interaction";

/**
 * Component that handle all the logic related to modal feature
 *
 * @param {*} { id, label, children }
 * @return {*}
 */
const ModalComponent: RFCC<ModalProps> = ({ id, label, children }) => {
    const dispatch = useDispatch();
    const closeModal = useCallback(
        () => dispatch(InteractionActions.setModalOpen({ isModalOpen: false })),
        [dispatch]
    );
    const isModalOpen = useSelector(isModalOpenSelector);

    return (
        <DialogContainer isModalOpen={isModalOpen}>
            <DialogBackdrop onClick={closeModal} />
            <DialogWrapper
                role="dialog"
                id={id ?? "dialog"}
                aria-labelledby={`${id}_label`}
                aria-modal="true"
                isModalOpen={isModalOpen}
            >
                <DialogLabel id={`${id}_label`}>
                    {label}
                    <DialogButton onClick={closeModal} />
                </DialogLabel>

                <DialogContent>{children}</DialogContent>
            </DialogWrapper>
        </DialogContainer>
    );
};

export const Modal = memo(ModalComponent);
