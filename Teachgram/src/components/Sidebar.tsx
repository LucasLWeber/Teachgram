import home from "/assets/feed-icons/home.svg";
import people from "/assets/feed-icons/people.svg";
import config from "/assets/feed-icons/config.svg";
import add from "/assets/feed-icons/add.svg";
import { LogoutContainer } from "./perfil/utils/LogoutContainer";
import { Button } from "./perfil/utils/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import ImageInput from "./newPost/ImageInput";
import { Friends } from "./friends/Friends";
import { useUserContext } from "../context/UserContext";


export default function SideBar() {
  const [isModalToCreatePostOpen, setIsModalToCreatePostOpen] = useState(false);
  const [isModalToViewFriends, setIsModalToViewFriends] = useState(false);
  const { user }  = useUserContext();

  return (
    <div className="flex flex-col gap-8 w-1/4">
      <LogoutContainer />

      <div className="flex flex-col gap-4">
        <Link to="/feed" className="block w-full">
          <Button icon={home} title="Feed"  />
        </Link>

		<div className="w-full">
			<Button icon={people} title="Amigos" onClick={() => setIsModalToViewFriends(true)}/>
		</div>
        
        <Link to="/perfil" className="block w-full">
          <Button isRounded={true} icon={user ? user.profileLink : ""} title="Perfil"  />
        </Link>
        
        <Link to="/configuracoes" className="block w-full">
          <Button icon={config} title="Configurações"  />
        </Link>
        
        <div className="w-full">
          <Button icon={add} title="Criar" onClick={() => setIsModalToCreatePostOpen(true)} />
        </div>

        {isModalToViewFriends && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <Friends onClose={() => setIsModalToViewFriends(false)} />
          </div>
        )}

        {isModalToCreatePostOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <ImageInput onClose={() => setIsModalToCreatePostOpen(false)} />
          </div>
        )}
      </div>
    </div>
  );
}
