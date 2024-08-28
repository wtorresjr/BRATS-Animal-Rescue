import { useDispatch } from "react-redux";
import { thunkLogout } from "../../redux/session";

const ButtonComponent = ({
  buttonText,
  size,
  bgColor,
  textColor,
  btnRadius,
}) => {
  const dispatch = useDispatch();
  const logOutNow = (e) => {
    if (buttonText === "Log Out") {
      dispatch(thunkLogout());
    }
  };

  return (
    <button
      onClick={logOutNow}
    >
      {buttonText}
    </button>
  );
};

export default ButtonComponent;
