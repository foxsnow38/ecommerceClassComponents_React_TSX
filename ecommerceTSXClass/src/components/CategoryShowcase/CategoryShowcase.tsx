 import React, { Component } from 'react' 
  import moduleCSS from './CategoryShowcase.module.scss' 
  import { Button } from 'primereact/button';




  export class CategoryShowcase extends Component<{title :string,desc:string,srcBtn:string,className?:string,linkTO:string}> { 

   constructor(props:any){
      super(props)
    }
 render() { 

   const className =  this.props.className
 return ( 


<div className={className}> 
  <div className={moduleCSS.showFlex}>
    <div className={moduleCSS.title}>
      <h1>
        {this.props.title}
      </h1>
    </div>
    <div className={moduleCSS.desc}>
      <h1>
        {this.props.desc}
      </h1>
    </div>
    <div className={moduleCSS.srcBtnParrent}>
      <Button className={ `${moduleCSS.srcBtn} p-button-text  p-button-secondary`}> 
      <h1>
        {this.props.srcBtn}
      </h1>
      </Button>
    </div>
   
    </div>
  </div>
 ) 
}} 

 export default CategoryShowcase