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
  const checkValue = (e) => {
    if (buttonText === "Logout") {
      dispatch(thunkLogout());
    }
  };

  return (
    <button
      onClick={checkValue}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderRadius: btnRadius,
        height: size[0],
        width: size[1],
      }}
    >
      {buttonText}
    </button>
  );
};

export default ButtonComponent;
