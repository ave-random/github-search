import searchBig from './Search_Big.svg';
import repIcon from './Rep_Icon.svg';
import userIcon from './User_Icon.svg';
import Repositories from '../Repositories/Repositories';
import Placeholder from '../Placeholder/Placeholder';

function Main({ user, isFetched }) {
  if (!isFetched) {
    return (
      <Placeholder text="Start with searching a GitHub user" img={searchBig} />
    );
  }

  if (user === null) {
    return <Placeholder text="User not found" img={userIcon} />;
  }

  if (user.public_repos === 0) {
    return <Placeholder text="Repositories not found" img={repIcon} />;
  }

  return <Repositories user={user} />;
}

export default Main;
