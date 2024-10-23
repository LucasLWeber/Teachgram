import { Header } from "./utils/Header";
import { useUserContext } from "../../context/UserContext";
import { Loading } from "../../pages/Loading";
import { Posts } from "./utils/Posts";
import SideBar from "../Sidebar";


export function PerfilContent(){

	const { user } = useUserContext();

	if (!user) return <Loading />
 
    return(
        <main className="w-10/12 mx-auto mt-16 flex justify-between">
			<SideBar  user={user}/>
			<div className="w-3/4 flex flex-col gap-4">
				<Header />
				<Posts />
			</div>
        </main>
    );
}