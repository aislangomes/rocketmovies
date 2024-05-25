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
        width: 100%;
        height: 100%;
    }
`

export const Content = styled.div`
    overflow-y: auto;

    width: 100%;
    height: 680px;

    > * {
        margin-top: 24px;
    }

    ::-webkit-scrollbar {
  width: 20px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: red; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000; 
}
`

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 45px 0;
    
    h1 {
        font-weight: 400;
        white-space: nowrap        
    }

    :nth-child(2){
        width: 208px;
    }

`