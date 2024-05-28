import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Background, Form } from "./styles";
import { CgMail, CgLock, CgUser } from "react-icons/cg";
import { IoArrowBackOutline } from "react-icons/io5";

export function Register(){
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para aacompanhar tudo que assistir</p>
                <h2>Crie sua conta</h2>
                <Input type="text" placeholder="Nome" icon={CgUser}/>
                <Input type="email" placeholder="E-mail" icon={CgMail}/>
                <Input type="password" placeholder="Senha" icon={CgLock}/>
                <Button title="Cadastrar"/>
                <span>
                    <IoArrowBackOutline/>
                    <a href="/">Voltar para o login</a>
                </span>
            </Form>
            <Background/>

        </Container>
    )
}