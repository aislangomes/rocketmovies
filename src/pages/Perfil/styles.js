import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    > header {
        height: 118px;
        display: flex;
        background-color: ${({theme}) => theme.COLOR.DARKPINK};
        padding: 0px 144px;

    }
`

export const Form = styled.form`
    width: 340px;
    margin: 30px auto 0;

    > div:nth-child(4) {
        margin-top: 24px;
    }


`

export const Avatar = styled.div`
    position: relative;
    margin: -124px auto 32px;

    height: 186px;
    width: 186px;

    > img {
        height: 186px;
        width: 186px;
        border-radius: 50%;
    }

    > label {
        height: 48px;
        width: 48px;
        border-radius: 50%;
        background-color: ${({theme}) => theme.COLOR.PINK};
        
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 20px;
            height: 20px;
            color: ${({theme}) => theme.COLOR.BLACK};
        }
    }

`