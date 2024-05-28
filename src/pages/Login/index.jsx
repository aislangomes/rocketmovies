import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Background, Form } from "./styles";
import { CgMail, CgLock } from "react-icons/cg";

export function Login(){
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para aacompanhar tudo que assistir</p>
                <h2>Faça seu login</h2>
                <Input type="email" placeholder="E-mail" icon={CgMail}/>
                <Input type="password" placeholder="Senha" icon={CgLock}/>
                <Button title="Entrar"/>
                <a href="/">Criar Conta</a>
            </Form>
            <Background/>

        </Container>
    )
}