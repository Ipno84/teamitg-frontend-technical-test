import styled from "@emotion/styled";

import { BaseProps } from "~/components/ui/modal/typings";

const DialogContainer = styled.div<BaseProps>(({ isModalOpen }) => ({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    padding: "3rem",
    pointerEvents: isModalOpen ? "auto" : "none",
    opacity: isModalOpen ? 1 : 0,
    transition: "opacity .3s ease",
}));

export { DialogContainer };
