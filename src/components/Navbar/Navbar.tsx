 import React, { Component } from 'react' 
  import moduleCSS from  './Navbar.module.scss' 
  
import { Menubar } from 'primereact/menubar';
import {  NavbarContext } from '../../context/NavbarContextProvider/NavbarContextProvider';
import { Navigate } from 'react-router-dom';



type navbarStates ={
 
   items:object[]
     nagivate:any,
 


}
  export class Navbar extends Component<{color:(`white`| `black` | null)},navbarStates> {
  
     static contextType=  NavbarContext



 



     
constructor(props:any ){
super(props)

this.state = {
nagivate:null,



items:[
   {
      label:'NEW ARRIVALS'

   },
   {
      label:'SHOP',
      // url: "/shop?",
      className:"navbarItem",
      command:()=>{this.nagivateNavbar(`/shop`)}
   },
   {
      label:'COLLECTIONS',
      command:()=>{this.nagivateNavbar(`/collections`)}
   },
   {
      label:'LOGO',
      className:`${moduleCSS.navbarLogo}`,
      command:()=>{this.nagivateNavbar(`/`)}
      
   },
   {
      icon:`pi pi-search`,
      label:'SEARCH',
   
   },
   {
      label:'SIGNIN',
      command:()=>{this.nagivateNavbar(`/signin`)}
   },
   {
      label:`BAG(2)`,
      command:()=>{this.nagivateNavbar(`/bags`)}
   },
   {
      label:'',
      icon:`pi pi-heart`
   }

]

}
}

nagivateNavbar=(nagivate:string)=>{
   this.setState(state=>({nagivate: nagivate}))
   setTimeout(() => {
      this.setState(state=>({nagivate: null}))
   }, 10);
   console.log(this.state)

}





 render(){



 return ( 


<>

{this.state.nagivate!=null? <Navigate to={`${this.state.nagivate}`}/>:null}
    <Menubar
  model={this.state.items}

  className={`${moduleCSS.Navbar} ${this.props.color==`black`?moduleCSS.black:moduleCSS.white} `}
/> 
</>
 ) 
}} 

 export default Navbar