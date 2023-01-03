import './App.css';
import NavBar from './Components/NavBar/NavBar'
import Home from './Pages/Home'
import Books from './Pages/Books'
import About from './Pages/About'
import Events from './Pages/Events'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from  'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div id="page-container">
        <div id="content-wrap">
        


        </div>
        <footer id="footer"></footer>
      </div>

      <div className="container">
        <div id="content-wrap">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/books" element={<Books/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/events" element={<Events/>}/>
          </Routes>
          
        </div>
        
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
