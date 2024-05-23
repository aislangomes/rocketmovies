import { Container, Profile } from "./styles";
import { Input } from "../Input"

export function Header(){
    return(
        <Container>
            <h1>Rocket Movies</h1>
            <Input placeholder="Pesquisar pelo título"/>
            <Profile>
                <div>
                    <strong>Aislan Gomes</strong>
                    <span>Sair</span>
                </div>
                <img src="https://github.com/aislangomes.png" alt="Foto do avatar"/>
            </Profile>
        </Container>
    )
}