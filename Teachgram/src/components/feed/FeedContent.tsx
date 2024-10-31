import SideBar from "../Sidebar";
import { Deco } from "./utils/Deco";
import { Publication } from "./utils/Publication";
import { usePostContext } from "../../context/PostsContext";

export function FeedContent(){
	const { fetchPosts, publications} = usePostContext();
	return(
		<>
			<main className="flex w-10/12 mx-auto mt-16">
				<SideBar/>
				<Publication fetchPosts={fetchPosts} publications={publications}/>
			</main>
			<Deco />
		</>

	);
}