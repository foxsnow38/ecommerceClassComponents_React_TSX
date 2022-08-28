import {Component, ReactNode, useState } from 'react'

import {
 Route,
  Routes,
  Link,
  useParams
} from "react-router-dom";

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Footer from "./components/Footer"
import Collections from './pages/Collections';
import Shop from './pages/Shop';
import Bag from './pages/Bag';
import Customerservice from './pages/Customerservice';
import Sign from './pages/Sign/Sign';
import Signup from './pages/Signup';





type countType ={
  count:number
}


class App extends Component<{},any,any>{

  constructor(props:any){
    super(props)
    
  }
render(): ReactNode {
  
  return (

    <div className="App">
        <Routes>

        <Route path="/signin" element={
            <>
          <Sign/>
          </>
          }></Route>
          <Route path="/signup" element={
            <>
          <Signup/>
          </>
          }></Route>


          <Route path="/collections" element={
            <>
             <Navbar color={'black'}/>
          <Collections/>
          <Footer/>
          </>
          }>
             
          </Route>
          <Route path="/bags" element={
            <>
             <Navbar color={'black'}/>
          <Bag/>
          <Footer/>
          </>
          }></Route>


           <Route path="/customerservice" element={
            <>
             <Navbar color={'black'}/>
          <Customerservice/>
          <Footer/>
          </>
          }></Route>
          <Route path="/shop" element={<>
          <Navbar color={'black'}/>
            <Shop/>
            <Footer/>
          </>}>
         
          </Route>
          <Route path="/" element={
          
          <>
           <Navbar color={'white'}/>
           <Home/>
           <Footer/>
          </>
          }>

          </Route>
        </Routes>
  

    </div>

  )
}
}

export default App
