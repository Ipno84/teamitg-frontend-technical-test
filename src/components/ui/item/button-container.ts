import styled from "@emotion/styled";

const ButtonContainer = styled.div({
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0,
    transition: "opacity .3s ease",
    overflow: "hidden",
    "&:before": {
        content: "''",
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, .4)",
        transition: "transform .3s ease",
        transform: "translateY(100%)",
    },
});

export { ButtonContainer };
