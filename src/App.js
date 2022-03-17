// import './App.css';
import Navbar from './containers/navBar/Navbar'
import Home from '../src/containers/home/home'

function App() {
  return (
    <div className="App">
            <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <Navbar/>
      <Home />
      {/* <div className='container'>
        <h1>Initial comment</h1>
      </div> */}
    </div>
  );
}

export default App;
