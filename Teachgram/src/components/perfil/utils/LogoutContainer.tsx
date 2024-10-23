import Logout from "./Logout";
import logo from "/assets/logo.svg";

export function LogoutContainer(){

	return(
		<div className="flex items-center justify-start space-x-6 mb-20">
			<Logout />
			<img src={logo} alt="Teachgram" className="h-9"/>
		</div>
	);
} 