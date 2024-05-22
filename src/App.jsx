import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './MainComponents/Home';
import Log from './MainComponents/log';
import Signup from './MainComponents/Signup';
import { Authcontextprovider } from './Context/firebasecontext';
import Sellproduct from './MainComponents/Sellproduct';
import ProductDetail from './MainComponents/ProductDetail';
import { Postcontextprovider } from './Context/PostContext';


function App() {
  return (
    
  <>
    <Authcontextprovider>
      <Postcontextprovider>
    <Router>
    <Routes> 
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Log/>}/> 
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/sellproduct' element={<Sellproduct/>}/>
    <Route path='/product/:id' element={<ProductDetail/>}/>
    </Routes>
    </Router>
    </Postcontextprovider>
    </Authcontextprovider>
  </>
  );
}

export default App;
