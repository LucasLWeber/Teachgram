import union from '/assets/union.svg';
import { useNavigate } from 'react-router-dom';
import { remove } from '../../../utils/functions';

function Logout(){
	const navigate = useNavigate();

	const handleLogout = () => {
		remove();
		navigate("/login");
	};

	return (
		<button onClick={handleLogout} className="flex items-center">
			<img src={union} alt="Logout" className="w-6 h-6 mr-2" />
		</button>
	);
	
}

export default Logout;