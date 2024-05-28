import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    padding: 19px 16px;    
    background-color: ${({theme}) => theme.COLOR.BG_INPUT};

    font-size: 14px;
    font-weight: 400;
    color: ${({theme}) => theme.COLOR.WHITE};

    resize: none;

    &::placeholder{
        color: ${({theme}) => theme.COLOR.GRAy};
    }
`