 import React, { Component, createContext, useContext } from 'react' 
  import moduleCSS from './NavbarContextProvider.module.scss' 


  export const NavbarContext = createContext<any|null>(null)
  
  export class NavbarContextProvider extends Component<any,any>  { 
 
  setBag = (item:number) =>{
    this.setState(()=>({bag:item}))
  
  }

  value: any

  constructor(props:any) {
    super(props)

  this.state={
    bag:0
    
  }

  this.value={
    bag:this.state.bag,
    setBag:this.setBag
    }
    
      
}
 
 render() { 
 return ( <NavbarContext.Provider value={this.value}>{this.props.children}
 </NavbarContext.Provider> ) 

}
} 
export const useNavbarContext = () => useContext(NavbarContext)

 export default NavbarContextProvider
