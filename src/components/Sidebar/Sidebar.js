import './Sidebar.css';
import followersIcon from './Followers_Icon.svg';
import followingIcon from './Following_Icon.svg';

function formatAmount(amount) {
  if (amount >= 1e6) {
    return Number(amount / 1e6).toFixed(1) + 'm';
  }

  if (amount >= 1e3) {
    return Number(amount / 1e3).toFixed(1) + 'k';
  }

  return amount;
}

function Sidebar({ user }) {
  if (user === null) {
    return null;
  }

  return (
    <div className="userProfile">
      <img className="avatar" src={user.avatar_url} alt="avatar" />
      <div className="userInfo">
        <h2 className="userFullName">{user.name}</h2>
        <a
          className="userName"
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
        >
          {user.login}
        </a>
        <div className="follow">
          <div className="figure">
            <img
              className="followersIcon"
              src={followersIcon}
              alt="followers"
            />
            <span>{formatAmount(user.followers)} followers</span>
          </div>

          <div className="figure">
            <img
              className="followingIcon"
              src={followingIcon}
              alt="following"
            />
            <span>{formatAmount(user.following)} following</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
