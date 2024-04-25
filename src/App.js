
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
import HeaderAdmin from './components/HeaderAdmin';
import AddFiliereForm from './components/AddFiliereForm';
import ListeFiliere from './components/ListeFiliere';
import ListeFaculte from './components/ListeFaculte';
import AddFaculte from './components/AddFaculte';
import ListeEcole from './components/ListeEcole';
import AddEcole from './components/AddEcole';
import ListeInstitut from './components/ListeInstitut';
import AddInstitut from './components/AddInstitut';

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
          <Route path="/admin" Component={HeaderAdmin}></Route>
          <Route path="/edit-univ/:id" Component={HeaderAdmin}></Route>
          <Route path="/admin/filiere" Component={HeaderAdmin}></Route>
          <Route path="/admin/add-filiere" Component={HeaderAdmin}></Route>
          <Route path="/faculte" Component={HeaderAdmin}></Route>
          <Route path="/edit-faculte/:id" Component={HeaderAdmin}></Route>
          <Route path="/admin/add-faculte" Component={HeaderAdmin}></Route>
          <Route path="/ecole" Component={HeaderAdmin}></Route>
          <Route path="/edit-ecole/:id" Component={HeaderAdmin}></Route>
          <Route path="/admin/add-ecole" Component={HeaderAdmin}></Route>
          <Route path="/institut" Component={HeaderAdmin}></Route>
          <Route path="/admin/add-institut" Component={HeaderAdmin}></Route>
          <Route path="/edit-institut/:id" Component={HeaderAdmin}></Route>


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
        <Route path="/admin/add-filiere" Component={AddFiliereForm}></Route>
        <Route path="/admin/filiere" Component={ListeFiliere}></Route>
        <Route path="/faculte" Component={ListeFaculte}></Route>
        <Route path="/admin/add-faculte" Component={AddFaculte}></Route>
        <Route path="/edit-faculte/:id" Component={AddFaculte}></Route>
        <Route path="/ecole" Component={ListeEcole}></Route>
        <Route path="/admin/add-ecole" Component={AddEcole}></Route>
        <Route path="/edit-ecole/:id" Component={AddEcole}></Route>
        <Route path="/institut" Component={ListeInstitut}></Route>
        <Route path="/admin/add-institut" Component={AddInstitut}></Route>
        <Route path="/edit-institut/:id" Component={AddInstitut}></Route>

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
