import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Action } from './pages/Actions/Action';
import { Actions } from './pages/Actions/Actions';
import { Homepage } from './pages/Homepage';
import { Noussoutenir } from './pages/Noussoutenir';
import { Quisommesnous } from './pages/Quisommesnous';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/quisommesnous' element={<Quisommesnous />} />
        <Route path='/noussoutenir' element={<Noussoutenir />} />
        <Route path='/actions' element={<Actions />} />
        <Route path='/actions/:id' element={<Action />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
