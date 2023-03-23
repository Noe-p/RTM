import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Action } from './pages/Actions/Action';
import { Actions } from './pages/Actions/Actions';
import { Adherents } from './pages/Adherents';
import { Contact } from './pages/Contact';
import { Homepage } from './pages/Homepage';
import { NousSoutenir } from './pages/Noussoutenir';
import { QuiSommesNous } from './pages/Quisommesnous';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/qui-sommes-nous' element={<QuiSommesNous />} />
        <Route path='/nous-soutenir' element={<NousSoutenir />} />
        <Route path='/actions' element={<Actions />} />
        <Route path='/actions/:id' element={<Action />} />
        <Route path='/adherents' element={<Adherents />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
