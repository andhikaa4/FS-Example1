import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './component/pages/Auth';
import Home from './component/pages/Home';

function App() {
  
  return (
    <div className="d-flex " style={{minHeight:"100vh"}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
