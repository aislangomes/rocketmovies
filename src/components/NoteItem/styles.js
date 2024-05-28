import styled from "styled-components";

export const Container = styled.span`
    display: flex;
    align-items: center;

    padding-right: 16px;
    border-radius: 8px;
    

    background-color: ${({theme, isNew}) => isNew ? theme.COLOR.BG_INPUT : "transparent"};
    border: ${({theme, isNew}) => isNew ? "none" : `2px dashed ${theme.COLOR.STROKE}`} ;
    color: ${({theme}) => theme.COLOR.WHITE};
    
    

    > button {
        display: flex;
        background: none;
        border: none;
        color: ${({theme}) => theme.COLOR.PINK};
        font-size: 24px;
    }

    > input {
        height: 56px;
        field-sizing: content;
        padding: 12px;
        outline: ${({isNew}) => isNew ? "none" : 'hidden'};

        background: none;
        border: none;
    }
    

`