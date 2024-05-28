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
        grid-area: "content";
        margin: 0 auto;
        max-width: 1120px;
        width: 100%;
        height: 100%;
        padding-top: 40px;
    }
`

export const Content = styled.div`
    height: 680px;
    overflow-y: auto;
    margin-top: 24px;
    padding-right: 16px;


    > p {
        text-align: justify;
        line-height: 28px;
    }
`

export const Title = styled.div`
    display: flex;
    align-items: baseline;
    gap: 19px;
    margin-bottom: 24px;

    > h1 {
        font-size: 36px;
    }

    :nth-child(2) {
        font-size: 24px;
    }
`

export const Infos = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Roboto';
    margin-bottom: 40px;
    
    > img {
        border-radius: 50%;
        height: 16px;
        width: 16px;
        margin-right: 4px;
    }

    > span {
        display: flex;
        align-items: center;
        gap: 4px;
        margin-left: 8px;

        svg {
            color: ${({theme}) => theme.COLOR.PINK};
        }
    }
`

export const Nametags = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    margin-bottom: 40px;
    height: 30px;
`