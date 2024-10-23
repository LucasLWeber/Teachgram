import { useState } from 'react';
import { SetDescription } from './SetDescription';
import close from '/public/assets/close.svg';

interface RenderImageProps {
	url: string;
	onClose: () => void;
}

export function RenderImage({ url, onClose }: RenderImageProps) {
	const [isNextStep, setNextStep] = useState(false);

	if (isNextStep) return <SetDescription url={url} onClose={onClose} />

	return (
		<div className="flex flex-col space-y-4 bg-white py-[44px] px-[54px] rounded-[34px] min-w-[528px] z-50">
			<button onClick={onClose}>
				<img src={close} alt="Fechar modal" />
			</button>
			<div className="flex justify-between items-center">
				<h3 className="font-semibold text-2xl">Criar nova publicação</h3>
				<button 
					onClick={() => setNextStep(true)} 
					className="text-custom-red underline font-semibold text-base"
				>
					Avançar
				</button>
			</div>
			<img src={url} alt="Nova publicação" className="mx-auto h-auto max-w-[382px]" />
		</div>
	);
}
