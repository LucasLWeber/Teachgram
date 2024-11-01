import SideBar from "../Sidebar";
import { Deco } from "./utils/Deco";
import { Publication } from "./utils/Publication";
import { usePostContext } from "../../context/PostsContext";

export function FeedContent(){
	const { fetchPosts, publications} = usePostContext();
	return(
		<>
			<main className="flex lg:w-10/12 max-w-screen lg:mx-auto w-full max-w-screen-lg mx-auto lg:pt-16 overflow-x-hidden">
				<SideBar/>
				<Publication fetchPosts={fetchPosts} publications={publications}/>
			</main>
			<div className="hidden lg:block">
				<Deco />
			</div>
		</>

	);
}