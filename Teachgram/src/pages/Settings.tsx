import { Outlet, useNavigate } from "react-router-dom";
import union from "/public/assets/union.svg";
import { Deco } from "../components/feed/utils/Deco";
import chevron from '/public/assets/chevron.svg';
import { useState } from "react";
import { DeleteAccount } from "../components/settings/DeleteAccount";

export function Settings(){
	const navigate = useNavigate();
	const [initialMenuOpen, setInitialMenuOpen] = useState(true);
	const [isModalDeleteOpen, setModalDeteteOpen] = useState(false);

	const handleSetInitialMenuOpen = (route: string) => {
		navigate(`/configuracoes/${route}`)
		setInitialMenuOpen(false);
	}

	return (
		<main className="w-full lg:pt-8">
			<button onClick={() => { navigate(-1); setInitialMenuOpen(true) }} className="mb-16 ml-[50px]">
				<img src={union} alt="Voltar" />
			</button>
			<div className="flex flex-col w-10/12 mx-auto items-start">
				{initialMenuOpen ?
					<div className="flex flex-col items-start space-y-8">
						<div className="flex w-full justify-between items-center space-x-8">
							<button 
								onClick={() => handleSetInitialMenuOpen('conta')}
								className="font-semibold text-xl"
							>Configurações da conta</button>
							<img src={chevron} />
						</div>
						<div className="flex w-full justify-between items-center">
							<button 
								onClick={() => handleSetInitialMenuOpen('perfil')}
								className="font-semibold text-xl"
							>Editar perfil</button>
							<img src={chevron} />
						</div>
						<button 
							className="text-custom-red underline text-xl"
							onClick={() => setModalDeteteOpen(true)}
						>Excluir conta</button>
					</div>
				: <Outlet /> }
			</div>
			{isModalDeleteOpen && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
					<DeleteAccount onClose={() => setModalDeteteOpen(false)} />
				</div>
			)}
			<Deco />
		</main>	
	);
}

