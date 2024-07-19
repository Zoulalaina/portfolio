
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contenu from './components/Contenu';
import Home from './components/Home';
import Apropos from './components/Apropos';
import Cv from './components/CV';

function App() {
  return (
    <div>
      <Router>

       <div>
        <Routes>
          
        <Route path="/" Component={Home}></Route>
        <Route path="/cv" Component={Home}></Route>
        <Route path="/apropos" Component={Home}></Route>

        

        

        </Routes>
        </div>
        <div>
        <Routes>
          
        
        <Route path="/" Component={Contenu}></Route>
        <Route path="/cv" Component={Cv}></Route>
        <Route path="/apropos" Component={Apropos}></Route>

        

        </Routes>
        </div>
        <div>
        <Routes>
          
        
        <Route path="/" Component={Apropos}></Route>

        

        </Routes>
        </div>
    
      
      
      
      </Router>
    </div>
  );
}

export default App;
