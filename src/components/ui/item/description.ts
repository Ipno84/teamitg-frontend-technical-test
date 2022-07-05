import styled from "@emotion/styled";

import { Price } from "~/components/ui/item/price";

const Description = styled(Price)({
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    paddingTop: "0.5rem",
    "@media (min-width: 580px)": {
        WebkitLineClamp: 2,
    }
});

export { Description };
