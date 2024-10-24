import UserContext from "../context/UserContext";
import formatDate from "../services/formatDate";

import urlIcon from "../assets/icon-website.svg";
import companyIcon from "../assets/icon-company.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import locationIcon from "../assets/icon-location.svg";

import urlIconWhite from "../assets/icon-website-white.svg";
import companyIconWhite from "../assets/icon-company-white.svg";
import twitterIconWhite from "../assets/icon-twitter-white.svg";
import locationIconWhite from "../assets/icon-location-white.svg";

import { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";

function useUserData() {
  const { data } = useContext(UserContext);
  const { darkMode } = useContext(DarkModeContext);

  const userData = {
    image: data?.avatar_url,
    name: data?.name,
    id: data?.login,
    date: formatDate(data?.created_at),
    bio: data?.bio || "This profile has no bio",
    stats: [
      { id: 0, label: "Following", number: data?.following },
      { id: 1, label: "Followers", number: data?.followers },
      { id: 2, label: "Repos", number: data?.public_repos },
    ],
    meta: [
      {
        id: 0,
        info: data?.location,
        icon: darkMode ? locationIconWhite : locationIcon,
      },
      {
        id: 1,
        info: data?.twitter_username,
        icon: darkMode ? twitterIconWhite : twitterIcon,
      },
      {
        id: 2,
        info: data?.blog,
        icon: darkMode ? urlIconWhite : urlIcon,
      },
      {
        id: 3,
        info: data?.company,
        icon: darkMode ? companyIconWhite : companyIcon,
      },
    ],
  };

  return userData;
}

export default useUserData;
