// import logo from './logo.svg';
import './Home.css';

function Home() {
  return (
    <div className="App">
      

      <header className="navbar">
        <div className="logo">GirlMath</div>
        <nav>
          <ul>
            <li><a href="http://localhost:3000/">Home</a></li>
            <li><a href="https://google.com/">Stocks</a></li>
            <li><a href="http://localhost:3001/">Tips</a></li>
          </ul>
        </nav>
      </header>
      {/* image of the barbie logo */}
      <h1>Hi Barbie!</h1> 
      <h2> Let's do some girl math.</h2>
      {/* <MyComponent /> */}
      <header className="missionBox"> 
        <h3>Our Mission</h3>
        <h2>Improve financial literacy of women</h2>
      </header>
      {/* hey */}
    </div>
  );
}

export default Home;
