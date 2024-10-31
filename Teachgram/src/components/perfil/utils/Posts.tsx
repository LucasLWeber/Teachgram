import { useEffect, useState } from "react";
import { usePostContext } from "../../../context/PostsContext";
import { Post, Publication } from "../../../utils/interfaces";

interface PostsProps {
	username: string | null
}

export function Posts({ username }: PostsProps){

	const { fetchPosts, publications } = usePostContext();
	const [posts, setPosts] = useState<Post[]>([]);

	useEffect(() => {
		const loadPosts = async () => {
			const userPosts = publications?.content.filter((p: Publication) => p.username === username) || [];
			setPosts(userPosts);
		}
		loadPosts();
	}, [fetchPosts, username]);

	return(
		<div className="flex flex-col gap-y-4">
			<div className="flex items-center justify-center gap-x-4">
				<p className="text-custom-gray text-center">
					<span className="block text-custom-black font-bold text-xl">
						{posts?.length !== undefined ? posts?.length : 0}
					</span>
						posts
					</p>
					<span className="block h-6 w-[1px] bg-[#DBDADA]"></span>
				<p className="text-custom-gray text-center">
					<span className="block text-custom-black font-bold text-xl">
						{((Math.random() * 50) + 1).toFixed()}
					</span>
					amigos
				</p>
			</div>
			<div className="flex flex-wrap gap-1">
				{posts && posts.length > 0 ? (
					posts.map(p => (
						<img key={p.postId} src={p.photoLink} alt={p.title} height={280} width={280}/>
					))
				) : (
					<p>Nenhum post encontrado.</p>
				)}
			</div>
        </div>
	);
}