import { Header } from "./utils/Header";
import { Posts } from "./utils/Posts";
import SideBar from "../Sidebar";
import { User } from "../../utils/interfaces";

interface PerfilContentProps {
	user: User | null
}
export function PerfilContent({ user }: PerfilContentProps){
    return(
        <main className="w-10/12 mx-auto mt-16 flex justify-between">
			<SideBar/>
			<div className="w-3/4 flex flex-col gap-4">
				<Header user={user}/>
				<Posts username={ user ? user.username : null  }/>
			</div>
        </main>
    );
}