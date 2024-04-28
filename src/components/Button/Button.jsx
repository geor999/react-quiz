import "./button.css"
export const Button = ({ text, onCLick, parentDarkMode }) => {
  return (
    <button
      onClick={onCLick}
      className={`button ${parentDarkMode == true ? "dark" : ""}`}
    >
      {text}
    </button>
  );
};
