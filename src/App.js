import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="user_wrap">
          <div class="user_info">
            <p class="user_name">Emma Watson</p>
            <p class="user_link">@EmWatson</p>
          </div>
          <button id="plus"></button>
          <div class="social_info">
            <div class="social_info_item">
              <p>Tweets</p>
              <p>1,337</p>
            </div>
            <div class="social_info_item">
              <p>following</p>
              <p>561</p>
            </div>
            <div class="social_info_item">
              <p>followers</p>
              <p>718</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
