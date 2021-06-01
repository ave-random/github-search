import './App.css';
import { Octokit } from '@octokit/core';
import { useState } from 'react';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

const octokit = new Octokit();

function App() {
  const [user, setUser] = useState(null);
  const [isFetched, setIsFetched] = useState(false);

  async function fetchUser(username) {
    try {
      const response = await octokit.request('GET /users/{username}', {
        username: username,
      });

      setUser(response.data);
    } catch (error) {
      setUser(null);
    }

    setIsFetched(true);
  }

  return (
    <div className="layout">
      <Header fetchUser={fetchUser} />
      <div className="content">
        <Sidebar user={user} />
        <Main user={user} isFetched={isFetched} />
      </div>
    </div>
  );
}

export default App;
