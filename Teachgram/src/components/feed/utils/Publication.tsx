import { useEffect, useState } from "react";
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { PostAction } from "./PostAction";
import { Publications } from "../../../utils/interfaces";

interface PublicationProps {
	fetchPosts: () => void;
	publications: Publications | null;
}

export function Publication( {fetchPosts, publications}: PublicationProps){
	const [activePostId, setActivePostId] = useState<number | null>(null);

	useEffect(() => {
		fetchPosts();
	}, []);


	return (
		<div className="w-3/4 flex flex-col items-start ml-8">
		   {publications && publications.content.length > 0 ? (
			publications.content.map((post) => (
			  <div key={post.postId} className="w-[588px] flex flex-col gap-6 p-8 border border-gray-300 rounded-lg mb-[53px]">
				<div className="flex items-center justify-between ">
					<div className="flex items-center gap-8">
						<img className="rounded-full" src={post.profileLink} alt={`Foto de ${post.username}`} height={74} width={74}/>
						<div>
							<p className="text-btn-feed-gray text-2xl mb-2">{post.username}</p>
							<span className="text-btn-feed-gray text-xl">
								{formatDistanceToNow(new Date(post.createdAt), {addSuffix: true, locale: ptBR})}
							</span>
						</div>
					</div>
					<div className="flex space-x-4">
						{activePostId === post.postId && <PostAction postId={post.postId} />}
						<button onClick={() => setActivePostId(activePostId === post.postId ? null : post.postId)}>
							<img src="/assets/more.svg" alt="" />
						</button>
					</div>
				</div>
				<p className="text-btn-feed-gray text-xl">{post.description}</p>
				<img src={post.photoLink} alt={post.title} className="mx-auto h-auto max-w-[300px]"/>
				<div className="flex items-center space-x-6">
					<img src="/assets/feed-icons/like.svg" alt="" />
					<span>{((Math.random() * 50) + 1).toFixed()}</span>
				</div>
			  </div>
			))
		  ) : (
			<p>Nenhuma publicação encontrada.</p>
		  )}
		</div>
	  );
}