import { useContext } from "react";
import UserContext from "../context/UserContext";
import DetailsBoxDesktop from "./DetailsBoxDesktop";
import LoadingDesktop from "./LoadingDesktop";
import NoData from "./NoData";
import ErrorContainer from "./ErrorContainer";
import DetailsBoxMobile from "./DetailsBoxMobile";
import LoadingMobile from "./LoadingMobile";

function UserDetails() {
  const { error, status } = useContext(UserContext);
  return (
    <div className="details-box">
      {!status && <NoData />}
      {error && <ErrorContainer />}
      {status === "success" && <DetailsBoxDesktop />}
      {status === "success" && <DetailsBoxMobile />}
      {status === "loading" && <LoadingDesktop />}
      {status === "loading" && <LoadingMobile />}
    </div>
  );
}

export default UserDetails;
