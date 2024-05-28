import { Container } from "./styles";
import { FiX, FiPlus } from "react-icons/fi";

export function NoteItem({value, isnew, onClick, ...rest}){
    return(
        <Container isNew={!isnew}>
            <input
                type="textarea"
                value={value}
                readOnly={!isnew}
                {...rest}
                />
            <button
                type="button"
                onClick={onClick}>
                {isnew ? <FiX/> : <FiPlus/>}
            </button>
        </Container>
    )
}