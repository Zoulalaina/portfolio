
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import Register from './components/Register';
import Login from './components/Login';
import HeaderComponent2 from './components/HeaderComponent2';
import ListeUniv from './components/ListeUniv';
import AddUniv from './components/AddUniv';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
      <div className="header">
        <Routes>
          <Route path="/" Component={HeaderComponent}></Route>
          <Route path="/register" Component={HeaderComponent}></Route>
          <Route path="/login" Component={HeaderComponent}></Route>
          <Route path="/home" Component={HeaderComponent2}></Route>

        </Routes>
      </div>
      <div className="container">
    
        <Routes>
        <Route path="/home" Component={Home}></Route>
        <Route path="/edit-univ/:id" Component={ AddUniv}></Route>
        <Route path="/add-univ" Component={ AddUniv}></Route>
        <Route path="/" Component={ Home}></Route>
        <Route path="/admin" Component={ ListeUniv}></Route>
        <Route path="/register" Component={ Register}></Route>
        <Route path="/login" Component={ Login}></Route>
        </Routes>
      </div>
      <div className="footer">
      <FooterComponent />
      </div>
      </Router>
    </div>
  );
}

export default App;
