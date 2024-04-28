export const Title = ({ text, darkMode }) => {
  return <div className={`text-wrapper ${darkMode ? "dark" : ""}`}>{text}</div>;
};
