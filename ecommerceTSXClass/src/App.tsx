import {Component, ReactNode, useState } from 'react'

import {
 Route,
  Routes,
  Link,
  useParams
} from "react-router-dom";
import Mainslider from './components/Mainslider';
import Navbar from './components/Navbar';
import NavbarContextProvider from './context/NavbarContextProvider';


type countType ={
  count:number
}


class App extends Component<{},any,any>{

  constructor(props:any){
    super(props)
    
  }
state:any =
{
  count : 0,
  refer:``,
  defer:3
}



render(): ReactNode {
  
  return (

    <div className="App">
    <Navbar/>
    <Mainslider/>


      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
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
          <Route path="/">
          
          </Route>
        </Routes>
      </div>
  
    </div>

  )
}
}

export default App
