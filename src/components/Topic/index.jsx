import { Category, Container} from "./styles";
import {Tag} from '../Tag'
import {Rating} from '../Rating'

export function Topic({value, title, discription}){
    return(
        <Container>
            <h1>{title}</h1>
            <Rating/>
            <p>{discription}</p>
            <Category>
                <Tag category="ação"/>
                <Tag category="misterios"/>
                <Tag category="ficção cientifica"/>
                <Tag category=" muita ficção cientifica"/>
            </Category>
        </Container>
    )
}