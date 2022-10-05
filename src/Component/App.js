import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Navbar';
import Apprentissage from './Apprentissage'
import Logiciels from './Logiciels'
import Contacts from './Contacts'
import Partenaires from  './Partenaires'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Accueil from './Accueil';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <MyNavbar />
    </div>
     <Routes>
     <Route path="/" element={<Accueil />} />
     <Route path="/accueil" element={<Accueil />} />
     <Route path="/logiciels" element={<Logiciels />} />
     <Route path="/partenaires" element={<Partenaires />} />
     <Route path="/contacts" element={<Contacts />} />
     <Route path="/apprentissage" element={<Apprentissage />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
