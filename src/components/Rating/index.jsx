import { Container } from "./styles";
import { IoMdStarOutline, IoMdStarHalf, IoMdStar} from "react-icons/io";


export function Rating(){
    // const fullStar = Math.floor(value / 2)
    // const halfStar = value % 2
    // const outStar = 5 - (fullStar + halfStar)
    // {
    //     while (n <= fullStar){
            

    //     }
    // }
    return(
        <Container>
            <IoMdStar/>
            <IoMdStar/>
            <IoMdStar/>
            <IoMdStarHalf/>
            <IoMdStarOutline/>
        </Container>
    )
}