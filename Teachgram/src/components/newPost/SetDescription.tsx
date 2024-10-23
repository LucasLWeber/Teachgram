import union from '/public/assets/union.svg';
import { RenderImage } from './RenderImage';
import { useState } from 'react';
import { SavePost } from './SavePost';

interface SetDescriptionProps{
	url: string;
	onClose: () => void
}

export function SetDescription({ url, onClose }: SetDescriptionProps){
	const [goBack, setGoBack] = useState(false);
	const [goAhead, setGoAhead] = useState(false);
	const [description, setDescription] = useState('');


	if (goBack) return <RenderImage url={url} onClose={onClose}/>
	if (goAhead) return <SavePost url={url} onClose={onClose} description={description}/>

	return (
		<div className="flex flex-col space-y-4 bg-white py-[44px] px-[54px] rounded-[34px] min-w-[528px z-50">
			<button onClick={() => setGoBack(true)}><img src={union} alt="Fechar modal" /></button>
			<div className="flex justify-between items-center">
				<h3 className="font-semibold text-2xl">Criar nova publicação</h3>
				<button 
					onClick={() => setGoAhead(true)}
					className="text-custom-red underline font-semibold text-base"
				>
					Compartilhar
				</button>
			</div>
			<img src={url} alt="Nova publicação" className="mx-auto h-auto max-w-[382px]"/>
			<input 
				onChange={(e) => setDescription(e.target.value)}
				type="text" 
				placeholder="Escreva uma legenda..." 
				className="border-none text-xl text-btn-feed-gray focus:outline-none"/>
		</div>
	);
}