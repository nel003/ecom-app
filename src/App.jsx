import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';

function App() {

  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/ecom-app' element={<Home/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App