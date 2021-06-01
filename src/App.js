import './App.css';
import { Octokit } from '@octokit/core';
import { useState, useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

const octokit = new Octokit();
const SKY_BLUE = '#00b4eb';

function App() {
  const loadingRef = useRef(null);
  const [user, setUser] = useState(null);
  const [isFetched, setIsFetched] = useState(false);

  async function fetchUser(username) {
    loadingRef.current.continuousStart();
    try {
      const response = await octokit.request('GET /users/{username}', {
        username: username,
      });

      setUser(response.data);
    } catch (error) {
      setUser(null);
    }

    setIsFetched(true);
    loadingRef.current.complete();
  }

  return (
    <div className="layout">
      <LoadingBar color={SKY_BLUE} height={3} ref={loadingRef} />
      <Header fetchUser={fetchUser} />
      <div className="content">
        <Sidebar user={user} />
        <Main user={user} isFetched={isFetched} loadingRef={loadingRef} />
      </div>
    </div>
  );
}

export default App;
