import styled from "@emotion/styled";

const ItemInner = styled.div({
    display: "flex",
    flexDirection: "row",
    flex: 1,
    "@media (min-width: 481px)": {
        flexDirection: "column",
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
    },
});

export { ItemInner };
