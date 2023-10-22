import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import LojaCarro from './pages/LojaCarro';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={LojaCarro}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);