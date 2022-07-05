import styled from "@emotion/styled";

import { ButtonContainer } from "~/components/ui/item/button-container";

const ItemOuter = styled.div`
    height: 22vw;
    min-height: 100px;
    @media (min-width: 481px) {
        height: auto;
        flex: 1 1 50%;
        border: 1px solid #ccc;
        &:before {
            content: "";
            display: block;
            padding-bottom: 100%;
        }
    }
    @media (min-width: 992px) {
        flex: 1 1 25%;
    }
    display: flex;
    position: relative;
    &:hover ${ButtonContainer} {
        opacity: 1;
        &:before {
            transform: translateY(0);
        }
    }
`;

export { ItemOuter };
