import { Button } from "./utils/Button";
import logo from "/assets/logo.svg";
import home from "/assets/feed-icons/home.svg";
import people from "/assets/feed-icons/people.svg";
import config from "/assets/feed-icons/config.svg";
import add from "/assets/feed-icons/add.svg";
import { Card } from "./utils/Card";


export function FeedContent(){
    return(
        <main>
            <img src={logo} alt="Teachgram" />
            <Button icon={home} title="Feed" />
            <Button icon={people} title="Amigos" />
            <Button icon={config} title="Configurações" />
            <Button icon={add} title="Criar" />

			<Card 
				username="lucasweber"
				createdAt="2024-08-31 22:48:23"
				description="Comprei um teclado novo muito maneiro"
				image="https://img.freepik.com/vetores-premium/ilustracao-vetorial-de-equipamentos-de-jogo_1149263-19908.jpg?semt=ais_hybrid"
				profileImage="https://img.freepik.com/vetores-premium/ilustracao-de-avatar-de-estudante-icone-de-perfil-de-usuario-avatar-de-jovem_118339-4402.jpg"
			/>
        </main>
    );
}