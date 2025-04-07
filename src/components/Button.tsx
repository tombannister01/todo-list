import { useNavigate } from "react-router-dom";
import { IButton } from "../types/types";

const Button: React.FC<IButton> = ({ navigateTo, text }) => {

  const navigate = useNavigate();

  return <button onClick={() => navigate(navigateTo)}>{text}</button>

}

export default Button;