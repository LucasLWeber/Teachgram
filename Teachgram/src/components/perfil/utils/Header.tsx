import { User } from "../../../utils/interfaces";

interface HeaderProps {
	user: User | null;
}

export function Header({ user }: HeaderProps){
	
	return (
		<div className="flex items-center space-x-[100px]">
			<img src={user?.profileLink} alt={user?.name} className="max-w-[150px] max-h-[150px] min-w-[150px] min-h-[150px] rounded-full"/>
			<div>
				<h3 className="lg:text-2xl text-custom-black font-semibold">{user?.name}</h3>
				<span className="lg:text-xl text-custom-gray">{user?.description}</span>
			</div>
		</div>
	);


}