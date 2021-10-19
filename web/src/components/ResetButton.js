import "../styles/components/resetButton.scss";
import ls from "../services/localStorage";

function ResetButton() {
  const handleClickReset = () => {
    ls.clear("data");
    window.location.reload(true);
  };

  return (
    <button className="main__cards--button" onClick={handleClickReset}>
      <i className="far fa-trash-alt"></i> Reset
    </button>
  );
}

export default ResetButton;
