import useUserData from "../hooks/useUserData";

function DetailsBoxDesktop() {
  const userData = useUserData();
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
