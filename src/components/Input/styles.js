import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    background-color: ${({theme}) => theme.COLOR.BG_INPUT};
    border-radius: 10px;
    margin-bottom: 8px;

    > input {            
        border: none;
        

        font-size: 14px;
        font-weight: 400;
        padding: 19px 24px;

        background-color: transparent;
        color: ${({theme}) => theme.COLOR.BG_GRAY};
        height: 56px;
        width: 100%;
    }

    > svg {
        margin-left: 16px;
    }

`