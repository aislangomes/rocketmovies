import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    
    background: none;
    border: none;

    color: ${({theme}) => theme.COLOR.PINK};
    font-size: 16px;

    > svg {
        margin-right: 4px;
    }
`