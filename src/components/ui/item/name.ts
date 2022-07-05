import styled from "@emotion/styled";

const Name = styled.h4({
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    marginTop: 0,
    marginBottom: 0,
    fontSize: 18,
    lineHeight: "20px",
    "@media (min-width: 481px)": {
        textAlign: "center",
    },
    "& > span": {
        display: "inline-flex",
        fontSize: "0.875rem",
        lineHeight: "0.875rem",
        fontWeight: 700,
        "@media (min-width: 481px)": {
            position: "relative",
            fontSize: "2.4vw",
            lineHeight: "2.4vw",
            height: "3.2vw",
            alignItems: "center",
            "&:before, &:after": {
                content: "''",
                position: "absolute",
                left: 0,
                right: 0,
                height: 1,
                backgroundColor: "#000",
            },
            "&:before": {
                top: 0,
            },
            "&:after": {
                bottom: 0,
            },
        },
        "@media (min-width: 992px)": {
            fontSize: "1.1vw",
            lineHeight: "1.1vw",
            height: "1.8vw",
        },
        span: {
            display: "inline-block",
        },
    },
});

export { Name };
