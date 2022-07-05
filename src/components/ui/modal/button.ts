import styled from "@emotion/styled";

const DialogButton = styled.button({
    position: "absolute",
    right: "0.875rem",
    top: "55%",
    border: "none",
    background: "none",
    margin: 0,
    padding: 0,
    fontSize: "1.7rem",
    width: "1.7rem",
    lineHeight: "1.7rem",
    transform: "translateY(-50%)",
    color: "#aaa",
    transition: "color .3s ease",
    cursor: "pointer",
    "&:hover": {
        color: "#000",
    },
});

DialogButton.defaultProps = {
    children: "×",
    type: "button",
};

export { DialogButton };
