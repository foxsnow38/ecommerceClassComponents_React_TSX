import {Component, ReactNode, useState } from 'react'

import {
 Route,
  Routes,
  Link,
  useParams
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './pages/Home';



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

    <Navbar/>
  

   

      <div style={{zIndex:1}}>
        <ul>
          <li>
            <Link to="/"></Link>
          </li>
          {/* <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li> */}
        </ul>

        <Routes>
          <Route path="/about">
        
          </Route>
          <Route path="/topics">
         
          </Route>
          <Route path="/" element={<Home/>}>

          </Route>
        </Routes>
      </div>
  
    </div>

  )
}
}

export default App
