import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>
        <img className='user-avatar' src='placeholder.png' alt='avatar' />
        <span>John Doe</span>
      </h1>

      <dl className='meta'>
        <dt>Followers</dt>
        <dd>100</dd>
        <dt>Public repos</dt>
        <dd>50</dd>
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
