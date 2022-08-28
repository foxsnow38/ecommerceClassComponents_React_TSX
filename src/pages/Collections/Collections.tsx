 import React, { Component } from 'react' 
import { photosContext } from '../../context/PhotosContextProvider/PhotosContextProvider'
  import moduleCSS from './Collections.module.scss' 
  import { DataView} from 'primereact/dataview';


  export class Collections extends Component { 

    static contextType?: React.Context<any> | undefined= photosContext 

 render() { 

  let images=this.context as any
  images = images.map((item:any)=>item.itemImageSrc )
  images= images.splice(-18)
  const itemTemplate = (data:any, layout:any) => {
   
    if (layout === 'list') {
        return (
          ``
        );
    }

    if (layout === 'grid') {
         return (<img src={data}/>)
    }
}

 return ( 
<>
<div className={moduleCSS.Collections}>
    <div className={moduleCSS.sideBar}>
    <div className={moduleCSS.categoryList}>
      <h4>CATEGORIES</h4>
      <ul >
        <li>TOPS</li>
        <li>TEES AND TANKS</li>
        <li>SHIRTS</li>
        <li>DRESSES</li>
        <li>JACKETS</li>
        <li>KNITWEAR</li>
        <li>JUMPSUIT</li>
        <li>BOOTOMS</li>
        <li>INTIMATES</li>
        <li>SHORTS</li>
        <li>JEANS</li>
        <li>SKIRTS</li>
        <li>SALE</li>
        <li>SHOP ALL</li>
      </ul>
    </div>
    <div className={moduleCSS.filterList}>
      <h4>FILTERS</h4>
<ul>
  <li>+<span>SIZE</span></li>
  <li>+<span>PRICE</span></li>
  <li>+<span>COLOR</span></li>
  <li>+<span>FABRIC</span></li>
  <br />
 
  <li><span>SORT: NEWEST</span></li>
</ul>
    </div>


    </div>
    
    <div className={moduleCSS.gridArea}>



    </div >
    <div className={moduleCSS.dataViewArea}>
    <DataView className={moduleCSS.dataView}  value={images} layout={"grid"} itemTemplate={itemTemplate}></DataView>
    </div>
     </div> 
</>
 ) 
}
} 

 export default Collections