import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 56px;

    border-radius: 8px;
    background-color: ${({theme}) => theme.COLOR.PINK};
    color: ${({theme}) => theme.COLOR.BLACK};

    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;

    gap:8px;
    border: none;

    > svg {
        font-size: 16px;
    }
`