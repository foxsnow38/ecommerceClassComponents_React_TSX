 import React, { Component } from 'react' 
import { photosContext } from '../../context/PhotosContextProvider/PhotosContextProvider'
  import moduleCSS from './Shop.module.scss' 
  import { Accordion, AccordionTab } from 'Primereact/accordion';

  export class Shop extends Component<any,any> { 
    static contextType?: React.Context<any> | undefined= photosContext


constructor(props:any){
super(props)
this.state={
  activeIndex:0

}
}

setActiveIndex= (e:any) =>{
this.setState({activeIndex:e})
}



 render( ) {
  const context = this.context  as any

 return ( 
  <>
    <div className={moduleCSS.shop}>
      <div className={moduleCSS.topPage}>
      <div className={moduleCSS.photoPart}>
        <img src={context[27].itemImageSrc} alt="resim1" />
        <img src={context[28].itemImageSrc} alt="resim2" />

      </div>  
      <div className={moduleCSS.detailPart}>

    <div className={moduleCSS.productTitle}>
<label> CHALK SAINTS BOYFRIEND</label></div>
<div className={moduleCSS.offerPart}>
<div className={moduleCSS.productPrice}>
<label> USD $300.00</label>
</div>
<div className={moduleCSS.productOffer}>
<label> PRE-ORDER</label>
</div>
</div>
<div className={moduleCSS.colorSizeArea}>
<div className={moduleCSS.productColor}>
<label> COLOR</label>
</div>
<div className={moduleCSS.productColorRectangles}>

</div>
</div>

<div className={moduleCSS.productSizeArea}>
<div className={moduleCSS.productSize}>
<label > SIZE</label>
</div>
<div className={moduleCSS.productSizeList}>
<ul>
  <li>S</li>
  <li>M</li>
  <li>L</li>
  <li>XL</li>
</ul>
</div>

</div>
<div className={moduleCSS.productAddToBagBtn}>

</div>

<div className={moduleCSS.accordionPart}>
<Accordion  activeIndex={this.state.activeIndex} onTabChange={(e) =>this. setActiveIndex(e.index)}>
    <AccordionTab className={moduleCSS.accordionTitle}  header="PRODUCT DESCRIPTION">
    Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight fit across the hips, bow shape legs, with knee darts and tapered leg. Back pockets dropped slightly for slouch feel. 

    </AccordionTab>
    <AccordionTab className={moduleCSS.accordionTitle}   header="SHIPPING & RETURNS">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem distinctio laborum labore ad facere dolor laudantium asperiores officiis ipsa iusto?
    </AccordionTab>
    <AccordionTab className={moduleCSS.accordionTitle}   header="FABRIC COMPOSITION">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias necessitatibus at quaerat ipsam blanditiis perferendis reiciendis quis? Repudiandae, vero eveniet!
    </AccordionTab>
</Accordion>
</div>


     
        
        
      </div> 
    
    
    
     </div> 
     </div>


<div className={moduleCSS.secondPage}>
  <div className={moduleCSS.titlePart}>
<label>Complete the look</label>
  </div>

   <div className={moduleCSS.photoPart}>
        <img src={context[29].itemImageSrc} alt="resim1" />
        <img src={context[30].itemImageSrc} alt="resim2" />

      </div>  


</div>
<div className={moduleCSS.thirdPage}>


  <div className={moduleCSS.thirdPageTitle}> <label> YOU  MAY ALSO LIKE</label></div>
  <div className={moduleCSS.PhotoPart}>
  <img src={context[31].itemImageSrc} alt="resim1" />
        <img src={context[32].itemImageSrc} alt="resim2" />
        <img src={context[33].itemImageSrc} alt="resim2" />
        <img src={context[34].itemImageSrc} alt="resim2" />




</div>


</div>
  
  </>
     ) 
}} 

 export default Shop