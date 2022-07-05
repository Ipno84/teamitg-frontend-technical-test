import styled from "@emotion/styled";

const ShowMore = styled.button({
    position: "absolute",
    backgroundColor: "transparent",
    border: "0.125rem solid #fff",
    color: "#fff",
    padding: "0.5rem 0.875rem",
    cursor: "pointer",
    borderRadius: "2rem",
    fontFamily: "'Quicksand', sans-serif",
    fontSize: "1rem",
});

ShowMore.defaultProps = {
    type: "button",
    children: "More",
};

export { ShowMore };
