 import React, { Component } from 'react' 
  import moduleCSS from './Customerservice.module.scss' 
  import { Accordion, AccordionTab } from 'primereact/accordion';


  export class Customerservice extends Component<{},{activeIndex:number}> { 
    constructor(props:any){
      super(props)
      this.state={
        activeIndex:0
      
      }
      }
      
      setActiveIndex= (e:any) =>{
      this.setState({activeIndex:e})
      }
      
 render() { 

 return ( 


  <div className={moduleCSS.customerService}>
    <div className={moduleCSS.sideBar}>
      <h4>CATEGORIES</h4>
      <ul>
        <li>ORDER ISSUES</li>
        <li>DELIVERY</li>
        <li>RETURNS & REFUNDS</li>
        <li>PAYMENT</li>
        <li>PRODUCT & STOCK</li>
        <li>LEGAL POLICIES</li>
      </ul>
      </div> 
      <div className={moduleCSS.accordionArea}>
    <div id='accordion1' className={moduleCSS.accordionPart}>
    <h4>ORDER ISSUES</h4>
      <Accordion  activeIndex={this.state.activeIndex} onTabChange={(e) =>this. setActiveIndex(e.index)}>
    <AccordionTab className={moduleCSS.accordionTitle}  header="ORDER TRACKING">
    After placing an order, you will receive an email containing all the details. We may also be in touch if we need further information to verify your payment. 
Once your order is confirmed, it will be dispatched within 2 business days.
<br />
Depending on your location and chosen shipping method, delivery takes 2-7 business days after it's dispatched. We will keep you updated with 
tracking information and an estimated delivery date. You can also follow its journey by heading to ‘My Orders’ in your account, or if you opted for guest 
checkout, you can track the status of your order here. 

    </AccordionTab>
    <AccordionTab className={moduleCSS.accordionTitle}   header="DUTIES & TAXES">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem distinctio laborum labore ad facere dolor laudantium asperiores officiis ipsa iusto?
    </AccordionTab>
    <AccordionTab className={moduleCSS.accordionTitle}   header="SAME DAY DELIVERY">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias necessitatibus at quaerat ipsam blanditiis perferendis reiciendis quis? Repudiandae, vero eveniet!
    </AccordionTab>
    <AccordionTab className={moduleCSS.accordionTitle}   header="CAN I CHANGE THE COLLECTION LOCATION FOR MY ORDER?">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias necessitatibus at quaerat ipsam blanditiis perferendis reiciendis quis? Repudiandae, vero eveniet!
    </AccordionTab>
</Accordion>
    </div>



    <div id='accordion2' className={moduleCSS.accordionPart}>
    <h4>DELIVERY</h4>
      <Accordion  activeIndex={this.state.activeIndex} onTabChange={(e) =>this. setActiveIndex(e.index)}>
 
    <AccordionTab className={moduleCSS.accordionTitle}   header="CANCELATION">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem distinctio laborum labore ad facere dolor laudantium asperiores officiis ipsa iusto?
    </AccordionTab>
    <AccordionTab className={moduleCSS.accordionTitle}   header="PREORDERS">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias necessitatibus at quaerat ipsam blanditiis perferendis reiciendis quis? Repudiandae, vero eveniet!
    </AccordionTab>
 
</Accordion>
    </div>




    <div id='accordion3' className={moduleCSS.accordionPart}>
    <h4>RETURNS & REFUNDS</h4>
      <Accordion  activeIndex={this.state.activeIndex} onTabChange={(e) =>this. setActiveIndex(e.index)}>
 
    <AccordionTab className={moduleCSS.accordionTitle}   header="CUSTOMISED ITEMS">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem distinctio laborum labore ad facere dolor laudantium asperiores officiis ipsa iusto?
    </AccordionTab>
    <AccordionTab className={moduleCSS.accordionTitle}   header="REFUNDS">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias necessitatibus at quaerat ipsam blanditiis perferendis reiciendis quis? Repudiandae, vero eveniet!
    </AccordionTab>
    <AccordionTab className={moduleCSS.accordionTitle}   header="FINAL SALE">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias necessitatibus at quaerat ipsam blanditiis perferendis reiciendis quis? Repudiandae, vero eveniet!
    </AccordionTab>
    <AccordionTab className={moduleCSS.accordionTitle}   header="RETURNS PROCESS">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias necessitatibus at quaerat ipsam blanditiis perferendis reiciendis quis? Repudiandae, vero eveniet!
    </AccordionTab>
    <AccordionTab className={moduleCSS.accordionTitle}   header="RETURNS POLICY & PROCESS">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias necessitatibus at quaerat ipsam blanditiis perferendis reiciendis quis? Repudiandae, vero eveniet!
    </AccordionTab>
 
</Accordion>
    </div>


      </div>



  </div> ) 
}} 

 export default Customerservice