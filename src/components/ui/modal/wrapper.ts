import styled from "@emotion/styled";

import { BaseProps } from "~/components/ui/modal/typings";

const DialogWrapper = styled.div<BaseProps>(({ isModalOpen }) => ({
    backgroundColor: "#fff",
    position: "relative",
    margin: "0 auto",
    width: "90%",
    borderRadius: "1rem",
    overflow: "hidden",
    transform: `translateY(${isModalOpen ? "0" : "4rem"})`,
    transition: "transform .3s ease",
    "@media (min-width: 481px)": {
        width: "70%",
        maxWidth: "50rem",
    },
}));

export { DialogWrapper };
