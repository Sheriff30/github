import { useContext } from "react";
import UserContext from "../context/UserContext";
import DetailsBoxDesktop from "./DetailsBoxDesktop";
import useUser from "../services/useUser";
import LoadingDesktop from "./LoadingDesktop";
import NoData from "./NoData";
import ErrorContainer from "./ErrorContainer";
import DetailsBoxMobile from "./DetailsBoxMobile";
import LoadingMobile from "./LoadingMobile";

function UserDetails() {
  const { user } = useContext(UserContext);
  const { data, isError, isLoading } = useUser(user);
  return (
    <div className="details-box">
      {!data && !isLoading && !isError && <NoData />}
      {isError && <ErrorContainer />}
      {data && <DetailsBoxDesktop />}
      {data && <DetailsBoxMobile />}
      {isLoading && <LoadingDesktop />}
      {isLoading && <LoadingMobile />}
    </div>
  );
}

export default UserDetails;
