interface ButtonProps {
    icon: string;
    title: string;
	isRounded?: boolean;
	onClick?: () => void;
}

export function Button({ icon, title, isRounded = false, onClick }: ButtonProps){
    return (
        <button
            type="button"
            className="flex flex-row items-center justify-start p-[30px] border gap-x-[30px] border-btn-border-feed-gray rounded-2xl lg:min-w-[250px] min-h-[90px] max-h-[90px]"
			onClick={onClick}
        >
			<img 
				className={`max-h-[44px] max-w-[44px] ${isRounded ? 'rounded-full' : ''}`}
				src={icon} 
				alt={`Ícone de ${title}`} 
			/>
            <span className="text-xl text-btn-feed-gray">{title}</span>
        </button>
    );
}