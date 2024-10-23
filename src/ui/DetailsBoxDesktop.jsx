import { useContext } from "react";
import UserContext from "../context/UserContext";
import useUser from "../services/useUser";
import formatDate from "../services/formatDate";

import urlIcon from "../assets/icon-website.svg";
import companyIcon from "../assets/icon-company.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import locationIcon from "../assets/icon-location.svg";

import urlIconWhite from "../assets/icon-website-white.svg";
import companyIconWhite from "../assets/icon-company-white.svg";
import twitterIconWhite from "../assets/icon-twitter-white.svg";
import locationIconWhite from "../assets/icon-location-white.svg";
import DarkModeContext from "../context/DarkModeContext";

function DetailsBoxDesktop() {
  const { user } = useContext(UserContext);
  const { data } = useUser(user);
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

  return (
    <div className="detials-box-desktop">
      <div className="user-img">
        <img src={userData.image} alt={userData.name} />
      </div>
      <div className="user-details">
        <div className="user-info">
          <div>
            <span className="user-name">{userData.name ?? userData.id} </span>
            <span className="user-date">{userData.date}</span>
          </div>
          <span className="user-id">{userData.id}</span>
        </div>

        <div className="user-bio">{userData.bio}</div>

        <div className="user-stats">
          {userData.stats.map((stat) => {
            return (
              <div className="user-stat" key={stat.id}>
                <span className="stat-label">{stat.label}</span>
                <span className="stat-number">{stat.number}</span>
              </div>
            );
          })}
        </div>

        <div className="user-meta">
          {userData.meta.map((meta) => {
            return (
              <div
                className={`user-meta-item ${meta.info || "opacity50"}`}
                key={meta.id}
              >
                <div className="user-meta-icon">
                  <img src={meta.icon} alt="meta icon" />
                </div>
                {meta.id !== 2 ? (
                  <div className="user-meta-info">
                    {meta.info || "Not Available"}
                  </div>
                ) : (
                  <a className="blog-link" href={meta.info || null}>
                    {meta.info ? "https://github.blog" : "Not Available"}
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DetailsBoxDesktop;
