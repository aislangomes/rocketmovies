import styled from "styled-components";

export const Container = styled.header`
    height: 118px;
    width: 100%;

    grid-area: "header";

    border: none;
    border-bottom: 1px solid ${({theme}) => theme.COLOR.STROKE};

    display: flex;
    justify-content: space-between;
    gap:64px;
    align-items: center;
    padding: 0 123px;


    > h1 {
        color: ${({theme}) => theme.COLOR.PINK};
        font-size: 24px;
        font-weight: 700;
        white-space: nowrap
    }

    > :nth-child(2) {
        max-width: 1120px;
    }

`

export const Profile = styled.div`
    display: flex;
    align-items: center;

    > div {
        display: flex;
        flex-direction: column;
        align-items: end;
        margin-right: 9px;

        strong {
            font-size: 14px;
            font-weight: 700;
            white-space: nowrap

        }
    
        span {
            color: ${({theme}) => theme.COLOR.GRAY};
            font-size: 14px;
            font-weight: 400;
    
        }

    }

    > img {
        height: 64px;
        width: 64px;
        border-radius: 50%;
        
    }
`