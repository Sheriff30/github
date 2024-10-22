import formatDate from "../services/formatDate";
import locationIcon from "../assets/icon-location.svg";
import companyIcon from "../assets/icon-company.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import urlIcon from "../assets/icon-website.svg";

/* eslint-disable react/prop-types */
function UserDetailsDesktop({ data, isError, isLoading }) {
  const userData = {
    userImg: data?.avatar_url,
    name: data?.name,
    date: formatDate(data?.created_at),
    id: `@${data?.login}`,
    bio:
      data?.bio ??
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",

    stats: [
      { label: "Repos", data: data?.public_repos },
      { label: "Followers", data: data?.followers },
      { label: "Following", data: data?.following },
    ],

    meta: [
      { id: 1, icon: locationIcon, data: data?.location ?? "Not Available" },
      {
        id: 2,
        icon: twitterIcon,
        data: data?.twitter_username ?? "Not Available",
      },
      {
        id: 3,
        icon: urlIcon,
        data: data?.blog === "" ? "Not Available" : data?.blog,
      },
      { id: 4, icon: companyIcon, data: data?.company ?? "Not Available" },
    ],
  };

  return (
    <div className="user-details-desktop">
      {!data && !isLoading && !isError && (
        <div className="no-data-message">
          <div className="github-logo">
            <img src="/src/assets/github-logo.png" alt="" />
          </div>
          <p>Enter a GitHub username to view user profiles</p>
        </div>
      )}
      {isError && (
        <div className="error-container">
          <p>User Not Found </p>
        </div>
      )}
      {isLoading && (
        <>
          <div className="loading-user-img"></div>
          <div className="loading-items">
            <div className="loading-item"></div>
            <div className="loading-item"></div>
            <div className="loading-item"></div>
            <div className="loading-item"></div>
          </div>
        </>
      )}
      {!isLoading && !isError && data && (
        <>
          <div className="user-img">
            <img
              src={userData.userImg}
              alt={`${userData.name}'s profile picture`}
            />
          </div>
          <div className="user-details-group">
            <div className="user-info">
              <div>
                <span className="user-name">{userData.name}</span>
                <span className="user-date">{userData.date}</span>
              </div>
              <span className="user-id">{userData.id}</span>
            </div>
            <div className="user-bio">{userData.bio}</div>
            <div className="user-stats">
              {userData.stats.map((e) => {
                return (
                  <div className="user-stats__item" key={e.label}>
                    <span className="user-stats__label">{e.label}</span>
                    <span className="user-stats__value">{e.data}</span>
                  </div>
                );
              })}
            </div>
            <div className="user-meta">
              {userData.meta.map((e) => {
                return (
                  <div className="user-meta__item" key={e.id}>
                    <div className="user-meta__icon">
                      <img src={e.icon} alt={e.data} />
                    </div>
                    <div className="user-meta__data">{e.data}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default UserDetailsDesktop;
