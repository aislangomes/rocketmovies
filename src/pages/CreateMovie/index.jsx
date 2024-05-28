import { IoArrowBackOutline } from "react-icons/io5";

import { Container, Noteitens, InputInfos, AddDelete} from "./styles";

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from "../../components/NoteItem";
import { ButtonText } from '../../components/ButtonText'


export function CreateMovie(){
    return (
        <Container>
            <Header />
            <main>
                <ButtonText icon={IoArrowBackOutline} text="Voltar"/>
                <h1>Novo Filme</h1>
                <InputInfos>
                    <Input placeholder='Título'/>
                    <Input placeholder="Sua nota (de 0 a 5)"/>
                </InputInfos>
                <TextArea placeholder="Observações" rows="12"/>
                <h2>Marcadores</h2>
                <Noteitens>
                    <NoteItem value='valor'/>
                    <NoteItem placeholder="Adcionar nota" isnew/>
                </Noteitens>
                <AddDelete>
                    <Button title='Excluir Filme'/>
                    <Button title='Salvar Alterações'/>
                </AddDelete>
            </main>
        </Container>
    )
}