import home from "/assets/feed-icons/home.svg";
import people from "/assets/feed-icons/people.svg";
import config from "/assets/feed-icons/config.svg";
import add from "/assets/feed-icons/add.svg";
import { LogoutContainer } from "./perfil/utils/LogoutContainer";
import { Button } from "./perfil/utils/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import ImageInput from "./newPost/ImageInput";
import { User } from "../utils/interfaces";

interface SideBarProps {
  user: User | null;
}

export default function SideBar({ user }: SideBarProps) {
  const [isModalToCreatePostOpen, setIsModalToCreatePostOpen] = useState(false);

  if (!user) return null;

  return (
    <div className="flex flex-col gap-8 w-1/4">
      <LogoutContainer />

      <div className="flex flex-col gap-4">
        <Link to="/feed" className="block w-full">
          <Button icon={home} title="Feed"  />
        </Link>
        
        <div className="w-full">
          <Button icon={people} title="Amigos"  />
        </div>
        
        <Link to="/perfil" className="block w-full">
          <Button isRounded={true} icon={user.profileLink} title="Perfil"  />
        </Link>
        
        <Link to="/configuracoes" className="block w-full">
          <Button icon={config} title="Configurações"  />
        </Link>
        
        <div className="w-full">
          <Button icon={add} title="Criar"  onClick={() => setIsModalToCreatePostOpen(true)} />
        </div>

        {isModalToCreatePostOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <ImageInput onClose={() => setIsModalToCreatePostOpen(false)} />
          </div>
        )}
      </div>
    </div>
  );
}
