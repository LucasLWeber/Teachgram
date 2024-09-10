interface ButtonProps{
    type: "submit" | "button" | "reset";
    title: string;
}

export function Button({ type, title }: ButtonProps){
    return(
        <button 
            type={type}
            className="bg-custom-red rounded-[10px] text-white py-3 font-semibold text-xl shadow-md"
        >
            {title}
        </button>
    );
}