import { useNavigate } from "react-router-dom";
import { SettingsForm } from "../components/settings/utils/SettingsForm";
import union from "/public/assets/union.svg";
import { Deco } from "../components/feed/utils/Deco";

export function Settings(){
	const navigate = useNavigate();
	return (
		<main className="w-full lg:pt-8">
			<button onClick={() => navigate(-1)} className="mb-16 ml-[50px]">
				<img src={union} alt="Voltar" />
			</button>
			<div className="flex flex-col w-10/12 mx-auto">
				<h3 className="text-2xl font-semibold text-custom-black mb-[80px]">Configurações da conta</h3>
				<SettingsForm />
			</div>
			<Deco />
		</main>	
	);
}