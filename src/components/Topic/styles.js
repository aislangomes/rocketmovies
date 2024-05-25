import styled from "styled-components";

export const Container = styled.div`
    height: 222px;
    width: 100%;

    border-radius: 16px;
    padding: 32px;


    background-color: ${({theme}) => theme.COLOR.DARKPINK};

    > h1 {
        font-size: 24px;
        
    }

    > p {
        font-size: 16px;
        font-family: 'Roboto';
        color: ${({theme}) => theme.COLOR.GRAY2};
        overflow: hidden;
        max-height: 36px;
    }

`
export const Category = styled.div`
    height: 24px;
    margin-top: 32px;
    display: flex;
    align-items: center;
    
    > * {
        min-width: 58px;
        margin-right: 8px;
    }
`

