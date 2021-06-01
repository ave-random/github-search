import './Repositories.css';
import { Octokit } from '@octokit/core';
import Pagination from '../Pagination/Pagination';
import { useState, useEffect } from 'react';

const octokit = new Octokit();

function Repositories({ user }) {
  const PER_PAGE = 4;
  const [page, setPage] = useState(1);
  const [repos, setRepos] = useState(null);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await octokit.request('GET /users/{username}/repos', {
          username: user.login,
          page: page,
          per_page: PER_PAGE,
          sort: 'updated',
        });

        setRepos(response.data);
      } catch (error) {}

      setIsFetched(true);
    }

    fetchRepos();
  }, [page, user.login]);

  if (!isFetched) {
    return <span>Loading</span>;
  }

  return (
    <main>
      <h2>Repositories ({user.public_repos})</h2>
      <ul class="repoList">
        {repos.map((repo) => (
          <li key={repo.id} className="repo">
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              {repo.name}
            </a>
            <span>{repo.description}</span>
          </li>
        ))}
      </ul>
      <Pagination
        perPage={PER_PAGE}
        setPage={setPage}
        page={page}
        totalItems={user.public_repos}
      />
    </main>
  );
}

export default Repositories;
