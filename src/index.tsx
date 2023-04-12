import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Action } from './pages/Actions/Action';
import { Actions } from './pages/Actions/Actions';
import { Homepage } from './pages/Homepage';
import { Adherent } from './pages/nous-soutenir/Adherent';
import { Benevole } from './pages/nous-soutenir/Benevole';
import { Don } from './pages/nous-soutenir/Don';
import { NousSoutenir } from './pages/nous-soutenir/Noussoutenir';
import { Partenaire } from './pages/nous-soutenir/Partenaire';
import { Adherents } from './pages/qui-sommes-nous/Adherents';
import { Contact } from './pages/qui-sommes-nous/Contact';
import { Partenaires } from './pages/qui-sommes-nous/Partenaires';
import { QuiSommesNous } from './pages/qui-sommes-nous/Quisommesnous';

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
        <Route path='/qui-sommes-nous/adherents' element={<Adherents />} />
        <Route path='/qui-sommes-nous/partenaires' element={<Partenaires />} />
        <Route path='/qui-sommes-nous/contact' element={<Contact />} />
        <Route path='/nous-soutenir' element={<NousSoutenir />} />
        <Route path='/nous-soutenir/don' element={<Don />} />
        <Route path='/nous-soutenir/benevole' element={<Benevole />} />
        <Route path='/nous-soutenir/partenaire' element={<Partenaire />} />
        <Route path='/nous-soutenir/adherent' element={<Adherent />} />
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
