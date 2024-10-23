import close from '/public/assets/close.svg';
import { usePostContext } from '../../context/PostsContext';
import { NewPost } from '../../utils/interfaces';


interface SavePostProps{
	url: string;
	description: string;
	onClose: () => void;
}
export function SavePost({ url, onClose, description }: SavePostProps){
	const { addPost, loading } = usePostContext();

	const handleSave = async () => {
        const postData: NewPost = {
            title: 'Título do Post',
            description,
            photoLink: url,
            videoLink: 'null',
            isPrivate: false
        };

        await addPost(postData); 
        onClose();
    };

	return (
		<div className="flex flex-col space-y-4 bg-white py-[44px] px-[54px] rounded-[34px] min-w-[528px] z-50">
			<button onClick={onClose}><img src={close} alt="Fechar modal" /></button>
			<div className="flex justify-between items-center">
				<h3 className="font-semibold text-2xl">Editar publicação</h3>
				<button 
					className="text-custom-red underline font-semibold text-base" 
					onClick={handleSave}
					disabled={loading}
				>
					{loading ? 'Salvando...' : 'Salvar'}
				</button>
			</div>
			<img src={url} alt="Nova publicação" className="mx-auto h-auto max-w-[382px]"/>
			<p className="text-xl text-btn-feed-gray">{description}</p>
		</div>
	);
}