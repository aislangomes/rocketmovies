import { Container, Form, Avatar } from "./styles";
import {Input} from "../../components/Input"
import {Button} from "../../components/Button"
import {ButtonText} from "../../components/ButtonText"
import { IoArrowBackOutline } from "react-icons/io5";
import { FiCamera } from "react-icons/fi";

export function Perfil(){
    return(
        <Container>
            <header>
                <ButtonText icon={IoArrowBackOutline} text="Voltar"/>
            </header>
            <Form>
                <Avatar>
                    <img src="https://github.com/aislangomes.png" alt="Foto de perfil"/>
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input id="avatar" type="file" ></input>
                    </label>
                </Avatar>
                <Input type="text" placeholder="Nome"/>
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Senha atual"/>
                <Input type="password" placeholder="Nova senha"/>
                <Button title="Salvar"/>
            </Form>
        </Container>
    )
}