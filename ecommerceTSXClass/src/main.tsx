import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import "./assets/css/reset.css"
import "./assets/css/general.scss"

import {BrowserRouter} from "react-router-dom"

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import NavbarContextProvider from './context/NavbarContextProvider/NavbarContextProvider';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
    <NavbarContextProvider>
    
    <App />
   
    </NavbarContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
