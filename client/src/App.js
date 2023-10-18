import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

import Rooms from './Component/Rooms/Rooms';



function App() {
  return (
    <div className="App">
      <header className="App-header">
    <BrowserRouter>
    <Routes>
    <Route exact path='/room' element={<Rooms/>} />


    </Routes>
    </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
