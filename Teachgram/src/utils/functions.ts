export function createdAtFormater(createdAt: string): string {
	const createdDate = new Date(createdAt);
	const now = new Date();
	const diffInMs = now.getTime() - createdDate.getTime();
	const diffInMinutes = Math.floor(diffInMs / (1000 * 60)); // diferença em minutos

	if (diffInMinutes < 1) {
		return 'agora';
	}
	if (diffInMinutes < 60) {
		return `há ${diffInMinutes} min`;
	}

	const diffInHours = Math.floor(diffInMinutes / 60);
	if (diffInHours < 24) {
		return diffInHours === 1 ? 'há 1 hora' : `há ${diffInHours} horas`;
	}

	const diffInDays = Math.floor(diffInHours / 24);
	if (diffInDays === 1) {
		return 'há 1 dia';
	}

	return `há ${diffInDays} dias`;
}