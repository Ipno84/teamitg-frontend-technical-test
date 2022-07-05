import styled from "@emotion/styled";

const Container = styled.div({
    display: "flex",
    flexDirection: "column",
    "@media (min-width: 481px)": {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    "&:after": {
        "@media (min-width: 481px)": {
            content: "''",
            flex: "1 1 50%",
        },
        "@media (min-width: 768px)": {
            flex: "1 1 25%",
        },
    },
});

export { Container };
