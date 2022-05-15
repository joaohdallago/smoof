import { AiFillPlusCircle } from "react-icons/ai";

export default function Loader({nextPage}) {
	return (
		<AiFillPlusCircle 
			fontSize='40px'
			onClick={nextPage}
		/>
	);
}