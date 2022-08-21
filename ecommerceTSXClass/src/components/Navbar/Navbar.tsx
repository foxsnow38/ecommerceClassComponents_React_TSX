 import React, { Component } from 'react' 
  import moduleCSS from  './Navbar.module.scss' 
  
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/InputText';
import { Button } from 'primereact/Button';
import { Avatar } from 'primereact/Avatar';
import {  NavbarContext } from '../../context/NavbarContextProvider/NavbarContextProvider';


type navbarStates ={

   items: any; 
     BagIndex: any;
     NavbarContext:any
     bag:any

}
  export class Navbar extends Component<{},navbarStates> {
  
     static contextType=  NavbarContext
 


constructor(props: {} | Readonly<{}>){
super(props)



}

 render(){
   
const {bag} = this.context as {bag:number}


  const  items = [
      {
         label:'NEW ARRIVALS'
   
      },
      {
         label:'SHOP',
         // url: "/shop?",
         className:"navbarItem"
      },
      {
         label:'COLLECTIONS'
      },
      {
         label:'LOGO',
         className:`${moduleCSS.navbarLogo}`
         
      },
      {
         icon:`pi pi-search`,
         label:'SEARCH'
      },
      {
         label:'SIGNIN'
      },
      {
         label:`BAG(${bag})`
      },
      {
         label:'',
         icon:`pi pi-heart`
      },
   
   ]

 return ( 



   
  <div>
    <Menubar
  model={items}

  className={moduleCSS.Navbar}


/> 

</div> ) 
}} 

 export default Navbar