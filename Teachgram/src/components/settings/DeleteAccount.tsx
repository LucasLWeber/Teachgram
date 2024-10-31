import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

interface DeleteAccountProps {
	onClose: () => void;
}

export function DeleteAccount({ onClose }: DeleteAccountProps){
	const { deleteUserAccount } = useUserContext();
	const navigate = useNavigate();

	const handleDeleteAccount = async () => {
		await deleteUserAccount(navigate);
	};

	return(
		<div className="relative flex flex-col bg-white space-y-[37px] py-[44px] px-[54px] rounded-[34px] min-w-[528px] shadow-lg">
			<h3 className="font-semibold text-xl">Excluir conta</h3>
			<hr className="absolute w-full left-0 top-[50px]"/>
			<p>Todos os seus dados serão excluídos.</p>

			<div className="flex flex-1 items-center justify-center gap-[47px] mt-4">
				<button 
					type="button" 
					className="px-3 py-1 bg-transparent border border-custom-red shadow rounded-lg text-custom-red text-base min-w-[147px]"
					onClick={onClose}
				>
					Cancelar
				</button>

				<button 
					onClick={handleDeleteAccount}
					type="button" 
					className="self-start px-3 py-1 bg-custom-red shadow rounded-lg text-white text-base min-w-[147px]"
				>
					Confirmar
				</button>
			</div>
		</div>
	);
}
