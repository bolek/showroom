import './App.css';
import Secrets from './Secrets.js';
import { useState, useEffect } from 'react';

const USERNAME = 'rails';

const handleErrors = (response) => {
  if (response.status === 404) throw Error('not found');
  return response.json();
};

const useUser = (username) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${Secrets.GITHUB_AUTHENTICATION_TOKEN}`,
      },
    })
      .then(handleErrors)
      .then((user) => {
        setUser(user);
        setLoading(false);
      })
      .catch(function (error) {
        setError(error.message);
        setLoading(false);
      });
  }, [username]);

  return [user, { loading, error }];
};

function App() {
  const [user, { loading, error }] = useUser(USERNAME);

  if (loading) {
    return (
      <div className='loading'>
        <p>loading profile ...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='loading'>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className='App'>
      <h1>
        <img className='user-avatar' src={user.avatar_url} alt='avatar' />
        <span>{user.name}</span>
      </h1>

      <p>{user.bio}</p>
      <h2>Fancy Stats</h2>

      <dl className='meta'>
        <dt>Followers</dt>
        <dd>{user.followers}</dd>
        <dt>Public repos</dt>
        <dd>{user.public_repos}</dd>
      </dl>

      <h2>Repositories</h2>
      <div className='repository'>
        <h3>Rails</h3>
        <p>Project description - Ruby on Rails</p>

        <dl className='meta'>
          <dt>Topics</dt>
          <dd>ruby, rails, html</dd>
          <dt>Watchers</dt>
          <dd>100</dd>
          <dt>Stargazers</dt>
          <dd>8</dd>
        </dl>
      </div>
      <hr />
      <div className='repository'>
        <h3>sprockets</h3>
        <p>some repository description</p>

        <dl className='meta'>
          <dt>Topics</dt>
          <dd>ruby, rails, html</dd>
          <dt>Watchers</dt>
          <dd>100</dd>
          <dt>Stargazers</dt>
          <dd>8</dd>
        </dl>
      </div>
    </div>
  );
}

export default App;
