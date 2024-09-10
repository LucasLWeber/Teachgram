interface ButtonProps {
    icon: string;
    title: string;
}

export function Button({ icon, title }: ButtonProps){
    return (
        <button
            type="button"
            className="flex flex-row items-start justify-start p-[30px] border gap-x-[30px] border-btn-border-feed-gray rounded-2xl lg:min-w-[250px]"
        >
            <img src={icon} alt={`Ícone de ${title}`} />
            <span className="text-xl text-btn-feed-gray">{title}</span>
        </button>
    );
}