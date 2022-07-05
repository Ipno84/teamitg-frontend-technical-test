import styled from "@emotion/styled";

import { ImageProps } from "~/components/ui/item/image/typings";

const Image = styled.img<ImageProps>(({ isMobile }) => ({
    display: isMobile ? "block" : "none",
    height: isMobile ? "100%" : "auto",
    "@media (min-width: 481px)": {
        display: isMobile ? "none" : "block",
        width: isMobile ? "auto" : "100%",
    },
}));

export { Image };
