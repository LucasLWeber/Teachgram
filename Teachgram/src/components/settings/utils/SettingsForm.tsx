import { useForm } from "react-hook-form";
import { useUserContext } from "../../../context/UserContext";

interface FormInputs {
  nome: string;
  email: string;
  celular: string;
  senha: string;
}

export function SettingsForm() {
  const { register, handleSubmit, formState: { errors }} = useForm<FormInputs>();
  const { user, updateUserInfo, loading } = useUserContext();
  
  if (!user) return null;

  const onSubmit = async (data: FormInputs) => {
    const updatedData = {
		name: data.nome,
		email: data.email,
		phone: data.celular,
		password: data.senha,
	};
	
	await updateUserInfo(updatedData);
  };

  return (
    <form className="flex flex-col w-1/2 gap-[18px]" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-2">
        <label htmlFor="nome" className="text-xl text-custom-black">Nome</label>
        <input 
          id="nome" 
          type="text" 
          defaultValue={user.name} 
          {...register("nome", { required: "O nome é obrigatório" })} 
          className="text-xl text-custom-gray focus:outline-none"
        />
        <hr />
        {errors.nome && 
          <p className="text-custom-red text-base text-end font-semibold mt-1">
            <span className="inline-block h-2 w-2 mr-2 bg-custom-red rounded-full"></span>
            {errors.nome.message}
          </p>
        }
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="email" className="text-xl text-custom-black">Email</label>
        <input 
          id="email" 
          type="email" 
          defaultValue={user.email} 
          {...register("email", { required: "O email é obrigatório" })} 
          className="text-xl text-custom-gray focus:outline-none"
        />
        <hr />
        {errors.email && 
          <p className="text-custom-red text-base text-end font-semibold mt-1">
            <span className="inline-block h-2 w-2 mr-2 bg-custom-red rounded-full"></span>
            {errors.email.message}
          </p>
        }
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="celular" className="text-xl text-custom-black">Celular</label>
        <input 
          id="celular" 
          type="text" 
          defaultValue={user.phone} 
          {...register("celular", { required: "O celular é obrigatório" })} 
          className="text-xl text-custom-gray focus:outline-none"
        />
        <hr />
        {errors.celular && 
          <p className="text-custom-red text-base text-end font-semibold mt-1">
            <span className="inline-block h-2 w-2 mr-2 bg-custom-red rounded-full"></span>
            {errors.celular.message}
          </p>
        }
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="senha" className="text-xl text-custom-black">Senha</label>
        <input 
          id="senha" 
          type="password" 
          defaultValue="**********" 
          {...register("senha", { required: "A senha é obrigatória" })} 
          className="text-xl text-custom-gray focus:outline-none"
        />
        <hr />
        {errors.senha && 
          <p className="text-custom-red text-base text-end font-semibold mt-1">
            <span className="inline-block h-2 w-2 mr-2 bg-custom-red rounded-full"></span>
            {errors.senha.message}
          </p>
        }
      </div>

      <button 
        type="submit" 
        className="self-start px-3 py-1 bg-custom-red shadow rounded-lg text-white text-base"
      >
        Salvar
      </button>
    </form>
  );
}
