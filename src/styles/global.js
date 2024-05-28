import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }

    body {
        background: ${({theme}) => theme.COLOR.BG_BASE};
        max-width: 1920px;
        margin: 0 auto;

        ::-webkit-scrollbar {
            width: 8px;
        }
        
        ::-webkit-scrollbar-track {
            background-color: rgba(0,0,0,0.3);
        }

        ::-webkit-scrollbar-thumb {
            background: ${({theme}) => theme.COLOR.PINK};
            border-radius: 8px;
        }

        
    }

    input, button, body, textarea {
        color: ${({theme}) => theme.COLOR.WHITE};
        font-family: 'Roboto Slab', sans-serif;
    }
    
    button, a{
        cursor: pointer;
    }

    a {
        color: ${({theme}) => theme.COLOR.PINK};
        text-decoration: none;
    }

    button:hover{
        filter: brightness(1.2);
    }


`