import { Container } from "./styles";

export function TextArea({text, ...rest}){
    return(
        <Container {...rest}>
            {text}
        </Container>
    )
}