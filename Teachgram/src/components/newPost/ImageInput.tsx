import { useState } from "react";
import close from '/public/assets/close.svg';
import { RenderImage } from "./RenderImage";

interface ImageInputProps {
	onClose: () => void;
}

export default function ImageInput({ onClose }: ImageInputProps) {
	const [imageUrl, setImageUrl] = useState<string>("");
	const [inputValue, setInputValue] = useState<string>("");
	const [isImageRendered, setIsImageRendered] = useState<boolean>(false); 

	const handleBlur = () => {
		setImageUrl(inputValue);
		setIsImageRendered(true);
	}

	if (isImageRendered) {
		return <RenderImage url={imageUrl} onClose={() => setIsImageRendered(false)} />; 
	}

	return (
		<div className="flex flex-col space-y-[68px] bg-white py-[44px] px-[54px] rounded-[34px] min-w-[528px]">
			<div className="flex justify-between items-center">
				<h3 className="font-semibold text-2xl">Criar nova publicação</h3>
				<button onClick={onClose}>
					<img src={close} alt="Fechar modal"/>
				</button>
			</div>
			<div className="flex relative">
				<label className="bg-red-400 text-white px-4 py-2 rounded-lg whitespace-nowrap z-10">
					Link da imagem
				</label>
				<input
					className="bg-transparent border-2 border-custom-red rounded-r-lg px-4 py-2 text-gray-500 focus:outline-none focus:border-custom-red focus:ring-custom-red w-full -ml-2"
					type="text"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					onBlur={handleBlur}
					placeholder="Insira aqui a URL da imagem"
				/>
			</div>
		</div>
	);
}
