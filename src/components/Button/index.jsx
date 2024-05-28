import { Container} from "./styles";

export function Button({icon: Icon, title, invert}){
    return(
        <Container
        type="button">
            {Icon && <Icon/>}
            {title}
        </Container>
    )
}