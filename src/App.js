import './App.css';
import NavBar from './Components/NavBar/NavBar'
import Home from './Pages/Home'
import Books from './Pages/Books'
import About from './Pages/About'
import Events from './Pages/Events'
import { Route, Routes } from  'react-router-dom'

function App() {
  /*
  // Note: never modify state manually within useEffect. Be sure to use the setter for that state.
  useEffect(() => {
  });
  */

  //<Counter startVal={10} incrementVal={1} decrementVal={1}/>
  
  // Commented code for routing is not that scalable.

  /*
  let Component
  switch(window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/books":
      Component = Books
      break
    case "/about":
      Component = About
      break;
    case "/events":
      Component = Events
      break
  }
  */

  return (
    <div className="App">
      <NavBar/>
      
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/books" element={<Books/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/events" element={<Events/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
