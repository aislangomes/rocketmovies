import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    padding: 8px 16px;

    background-color: ${({theme}) => theme.COLOR.BG_TAG};
    border-radius: 8px;
    
    font-family: 'Roboto';
    font-size: 12px;

`