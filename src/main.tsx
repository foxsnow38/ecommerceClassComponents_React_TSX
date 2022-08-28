import 'react-app-polyfill/ie11';
import 'core-js/features/array/find';
import 'core-js/features/array/includes';
import 'core-js/features/number/is-nan';

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
import PhotosContextProvider from './context/PhotosContextProvider'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
    <NavbarContextProvider>
      <PhotosContextProvider>
    
    <App />
   
   </PhotosContextProvider>
    </NavbarContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
