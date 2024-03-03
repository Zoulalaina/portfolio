
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponents from './components/ListEmployeeComponents';
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
      <HeaderComponent />
      <div className="container">
        <Routes>

          <Route path="/" Component={ ListEmployeeComponents}></Route>
          <Route path="/employees" Component={ ListEmployeeComponents}></Route>
          <Route path="/add-employee" Component={ AddEmployeeComponent}></Route>
          <Route path="/edit-employee/:id" Component={ AddEmployeeComponent}></Route>

        </Routes>
      </div>
      <FooterComponent />

      </Router>
    </div>
  );
}

export default App;
