import { useContext } from "react";
import UserContext from "../context/UserContext";

function ErrorContainer() {
  const { error } = useContext(UserContext);

  return (
    <div className="error-container">
      <p className="error">{error}</p>
    </div>
  );
}

export default ErrorContainer;
