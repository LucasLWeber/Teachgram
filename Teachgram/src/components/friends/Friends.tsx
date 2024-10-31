import close from '/public/assets/close.svg';
import { useUserContext } from '../../context/UserContext';
import { useEffect, useState } from 'react';
import { User } from '../../utils/interfaces';
import { Link } from 'react-router-dom';
import { Pagination } from './Pagination';

interface FriendsProps {
	onClose: () => void;
}

export function Friends({ onClose }: FriendsProps){
	const [friends, setFriends] = useState<User[] | null>(null);
	const { fetchAllUsersInfo } = useUserContext();
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		const fetchFriends = async () => {
			const users = await fetchAllUsersInfo();
			setFriends(users);
		};
		fetchFriends();
	}, []);

	const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * 4;
    const selectedFriends = friends?.slice(startIndex, startIndex + 4);

	return (
		<div className="flex flex-col bg-white py-[44px] px-[54px] rounded-[34px] min-w-[528px]">
			<button onClick={onClose} className="place-self-end">
				<img src={close} alt="Fechar modal"/>
			</button>
			<h3 className="text-custom-black text-2xl font-semibold border-b-2 pb-[14px] mb-[34px]">Amigos</h3>
			{selectedFriends?.map((f) => (
				<div key={f.userId} className="flex items-center justify-between my-[22px]">
					<div className='flex gap-4'>
						<img 
							className="rounded-full max-h-14 max-w-14" 
							src={f.profileLink} 
							alt={`Foto de ${f.name}`} 
						/>
						<div>
							<p className="text-custom-black font-semibold text-xl">{f.username}</p>
							<span className="text-custom-gray font-semibold text-base">{f.name}</span>
						</div>
					</div>
					<Link
						onClick={onClose} 
						to={`/perfil/${f.userId}`} 
						className="justify-self-center bg-custom-red text-xs text-white rounded-lg px-2 py-1 shadow"
					>Ver Perfil</Link>
				</div>
			))}
			<Pagination 
                length={friends ? friends.length : 0} 
                currentPage={currentPage} 
                onPageChange={handlePageChange} 
            />
		</div>
	);
}