import styled from "styled-components";

export const Container = styled.input`
    background-color: ${({theme}) => theme.COLOR.BG_INPUT};
    color: ${({theme}) => theme.COLOR.BG_GRAY};

    border: none;
    border-radius: 10px;

    font-size: 14px;
    font-weight: 400;
    padding: 19px 24px;

    height: 56px;
    width: 100%;
`