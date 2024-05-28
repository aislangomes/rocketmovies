import { Container } from "./styles";

export function ButtonText({icon: Icon, text}){
    return(
        <Container
        type="button">
            {Icon && <Icon size={20}/>}
            {text}
        </Container>
    )
}