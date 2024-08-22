import styled from "styled-components";

export const Container = styled.div`
    width: 200px;
    // height: 400px;

    border-radius: 20px;
    border-style: groove;
    box-shadow: 0px 3px 8px 3px rgba(0, 0, 0, 0.3);

    overflow: hidden;
    border: 2px outset black;

    div {
        padding: 10px;
    }
`;

export const Image = styled.div`
    height: 120px;

    background-image: url(${(aqui1) => aqui1.src});

    background-size: cover;
    background-position: center;
`;

export const Image1 = styled.div`
    height: 120px;

    background-image: url(${(aqui1) => aqui1.src});

    background-size: cover;
    background-position: center;
`;

export const Title = styled.h1``;

export const Description = styled.p``;
