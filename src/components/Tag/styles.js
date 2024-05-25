import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    padding: 5px 16px;

    background-color: ${({theme}) => theme.COLOR.BLUE};
    border-radius: 8px;
    
    font-family: 'Roboto' sans-serif;
    font-size: 12px;

`