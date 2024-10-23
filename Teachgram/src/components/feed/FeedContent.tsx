import { useState } from "react";
import SideBar from "../Sidebar";
import { Deco } from "./utils/Deco";
import { Publication } from "./utils/Publication";
import { useUserContext } from "../../context/UserContext";
import { usePostContext } from "../../context/PostsContext";
import { Loading } from "../../pages/Loading";

export function FeedContent(){
	const { user } = useUserContext();
	const { loading, fetchPosts, publications} = usePostContext();

	if (!user || loading) return <Loading />

	return(
		<>
			<main className="flex w-10/12 mx-auto mt-16">
				<SideBar user={user}/>
				<Publication fetchPosts={fetchPosts} publications={publications}/>
			</main>
			<Deco />
		</>

	);
}