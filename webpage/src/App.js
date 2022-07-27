import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>프론트엔드 개발자 이동익의 블로그 입니다.</p>
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <a href="#1" data-transition="slide">네비1</a>
          <a href="#2">네비2</a>
          <a href="#3">네비3</a>
          <a href="#4">네비4</a>
        </nav>
      </header>

      <body>
        <p id="1">바디1</p>
        <p id="2">바디2</p>
        <p id="3">바디3</p>
        <p id="4">바디4</p>
      </body>
    </div>
  );
}

export default App;
