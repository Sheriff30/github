import { useContext } from "react";
import UserContext from "../context/UserContext";
import DetailsBoxDesktop from "./DetailsBoxDesktop";
import LoadingDesktop from "./LoadingDesktop";
import NoData from "./NoData";
import ErrorContainer from "./ErrorContainer";
import DetailsBoxMobile from "./DetailsBoxMobile";
import LoadingMobile from "./LoadingMobile";

function UserDetails() {
  const { data, error, isLoading } = useContext(UserContext);
  return (
    <div className="details-box">
      {isLoading && (
        <>
          <LoadingDesktop />
          <LoadingMobile />
        </>
      )}
      {error && <ErrorContainer />}
      {!data && !error && <NoData />}

      {data && (
        <>
          <DetailsBoxDesktop />
          <DetailsBoxMobile />
        </>
      )}
    </div>
  );
}

export default UserDetails;
