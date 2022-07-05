import styled from "@emotion/styled";

const InfoContainer = styled.div({
    padding: "1rem",
    borderBottom: "1px solid #ccc",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "@media (min-width: 481px)": {
        borderBottom: "none",
    },
});

export { InfoContainer };
