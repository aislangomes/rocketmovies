import styled from "styled-components";
import bgImage from "../../assets/background_movie.png"

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;

`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 237px 134px 0;


    > h1 {
        font-size: 48px;
        color: ${({theme}) => theme.COLOR.PINK};
    }

    > p {
        font-size: 14px;
        color: ${({theme}) => theme.COLOR.GRAY};
        margin-bottom: 42px;
    }

    > h2 {
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 48px;

    }

    > button {
        margin-top: 8px;
    }

    > span {
        display: flex;
        align-items: center;
        color: ${({theme}) => theme.COLOR.PINK};
        margin: 42px auto;
    }


    
`

export const Background = styled.div`
    flex: 1;
    background: url(${bgImage}) no-repeat center center;
    background-size: cover;
`