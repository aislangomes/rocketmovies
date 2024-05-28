import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;

    grid-template-rows: 118px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
        margin: 0 auto;
        max-width: 1120px;
        padding: 40px 0;
        width: 100%;
        height: 100%;

        > h1 {
            margin-top: 24px;
            margin-bottom: 40px;
        }

        > h2 {
            font-size: 20px;
            font-weight: 400;
            color: ${({theme}) => theme.COLOR.GRAY2};
            margin-top: 40px;
        }
    }
    
`
export const InputInfos = styled.div`
    display: flex;
    gap: 40px;
    margin-bottom: 40px;

`

export const Noteitens = styled.div`
    display: flex;
    gap: 24px;
    width: 100%;
    border-radius: 8px;
    height: 88px;
    margin-top: 24px;
    padding: 16px;
    background-color: ${({theme}) => theme.COLOR.BG_AREA};
    flex-wrap: wrap;
`

export const AddDelete = styled.div`
    display: flex;
    gap: 40px;
    margin-top: 40px;
    > button {
        font-family: 'Roboto Slab';
        font-weight: 500;
    }

    > button:first-child{
        background-color: ${({theme}) => theme.COLOR.BG_AREA};
        color: ${({theme}) => theme.COLOR.PINK}
    }
`