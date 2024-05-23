import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({theme}) => theme.COLOR.BG_BASE};
        color: ${({theme}) => theme.COLOR.WHITE};

        font-family: 'Roboto Slab', sans-serif;
    }

    input {
        color: ${({theme}) => theme.COLOR.WHITE};
        font-family: 'Roboto Slab', sans-serif;
    }
    
    button, a{
        cursor: pointer;
    }


`