import {Container, Title, Content } from './styles'
import { Header } from '../../components/Header'
import {Topic} from '../../components/Topic'
import {Button} from '../../components/Button'
import { FiPlus } from "react-icons/fi";

export function Home(){
    return(
        <Container>
            <Header/>
            <main>
                <Title>
                    <h1>Meus Filmes</h1>
                    <Button 
                    icon={FiPlus}
                    title='Adcionar Filme'
                    />
                </Title>
                <Content>
                    <Topic 
                    title="Interstellar"
                    discription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, inventore ut iusto laborum exercitationem dignissimos vero dolore at maxime animi architecto dolorum quae iure suscipit. Nostrum laborum architecto velit tempora. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, inventore ut iusto laborum exercitationem dignissimos vero dolore at maxime animi architecto dolorum quae iure suscipit. Nostrum laborum architecto velit tempora."
                    />
                    <Topic 
                    title="Interstellar"
                    discription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, inventore ut iusto laborum exercitationem dignissimos vero dolore at maxime animi architecto dolorum quae iure suscipit. Nostrum laborum architecto velit tempora. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, inventore ut iusto laborum exercitationem dignissimos vero dolore at maxime animi architecto dolorum quae iure suscipit. Nostrum laborum architecto velit tempora."
                    />
                    <Topic 
                    title="Interstellar"
                    discription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, inventore ut iusto laborum exercitationem dignissimos vero dolore at maxime animi architecto dolorum quae iure suscipit. Nostrum laborum architecto velit tempora. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, inventore ut iusto laborum exercitationem dignissimos vero dolore at maxime animi architecto dolorum quae iure suscipit. Nostrum laborum architecto velit tempora."
                    />
                    <Topic 
                    title="Interstellar"
                    discription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, inventore ut iusto laborum exercitationem dignissimos vero dolore at maxime animi architecto dolorum quae iure suscipit. Nostrum laborum architecto velit tempora. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, inventore ut iusto laborum exercitationem dignissimos vero dolore at maxime animi architecto dolorum quae iure suscipit. Nostrum laborum architecto velit tempora."
                    />
                    <Topic 
                    title="Interstellar"
                    discription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, inventore ut iusto laborum exercitationem dignissimos vero dolore at maxime animi architecto dolorum quae iure suscipit. Nostrum laborum architecto velit tempora. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, inventore ut iusto laborum exercitationem dignissimos vero dolore at maxime animi architecto dolorum quae iure suscipit. Nostrum laborum architecto velit tempora."
                    />
                    <Topic 
                    title="Interstellar"
                    discription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, inventore ut iusto laborum exercitationem dignissimos vero dolore at maxime animi architecto dolorum quae iure suscipit. Nostrum laborum architecto velit tempora. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, inventore ut iusto laborum exercitationem dignissimos vero dolore at maxime animi architecto dolorum quae iure suscipit. Nostrum laborum architecto velit tempora."
                    />
                    <Topic 
                    title="Interstellar"
                    discription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, inventore ut iusto laborum exercitationem dignissimos vero dolore at maxime animi architecto dolorum quae iure suscipit. Nostrum laborum architecto velit tempora. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, inventore ut iusto laborum exercitationem dignissimos vero dolore at maxime animi architecto dolorum quae iure suscipit. Nostrum laborum architecto velit tempora."
                    />
                    <Topic 
                    title="Interstellar"
                    discription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, inventore ut iusto laborum exercitationem dignissimos vero dolore at maxime animi architecto dolorum quae iure suscipit. Nostrum laborum architecto velit tempora. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, inventore ut iusto laborum exercitationem dignissimos vero dolore at maxime animi architecto dolorum quae iure suscipit. Nostrum laborum architecto velit tempora."
                    />
                    

                    
                </Content>
                
            </main>

        </Container>
    )
}