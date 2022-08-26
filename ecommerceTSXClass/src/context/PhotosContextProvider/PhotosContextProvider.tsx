 import React, { Component } from 'react' 
  import moduleCSS from './PhotosContextProvider.module.scss' 

  import resim1 from "../../assets/images/resim1.jpg"
  import resim2 from "../../assets/images/resim2.jpg"
  import resim3 from "../../assets/images/resim3.jpg"
  import resim4 from "../../assets/images/resim4.jpg"
  import resim5 from "../../assets/images/resim5.jpg"
  import resim6 from "../../assets/images/resim6.jpg"
  import resim7 from "../../assets/images/resim7.jpg"
  import resim8 from "../../assets/images/resim8.jpg"
  import resim9 from "../../assets/images/resim9.png"
  import resim10 from "../../assets/images/resim10.jpg"
  import resim11 from "../../assets/images/resim11.jpg"
  import resim12 from "../../assets/images/resim12.jpg"
  import resim13 from "../../assets/images/resim13.jpg"

import {createContext} from 'react';




  type mainSliderObjectType = (null | {
    itemImageSrc: string;
      alt: string; 
      thumbnailImageSrc?: string;
     }[])
  type mainSliderTypeItem = { itemImageSrc: string; alt: string; thumbnailImageSrc?: string; }
  
  const photosObject :mainSliderObjectType= [
    { itemImageSrc:resim1,
    alt:`resim1`  ,
    thumbnailImageSrc:resim1,
  },
    { itemImageSrc:resim2,
    alt:`resim2`  ,
    thumbnailImageSrc:resim2,
  },
    { itemImageSrc:resim3,
    alt:`resim3`  ,
    thumbnailImageSrc:resim3,
  },
    { itemImageSrc:resim4,
    alt:`resim4`  ,
    thumbnailImageSrc:resim4,
  },
    { itemImageSrc:resim5,
    alt:`resim5`  ,
    thumbnailImageSrc:resim5,
  },
    { itemImageSrc:resim6,
    alt:`resim6`  ,
    thumbnailImageSrc:resim6,
  },
    { itemImageSrc:resim7,
    alt:`resim7`  ,
    thumbnailImageSrc:resim7,
  },
    { itemImageSrc:resim8,
    alt:`resim8`  ,
    thumbnailImageSrc:resim8,
  },
  { itemImageSrc:resim9,
    alt:`resim9`  ,
    thumbnailImageSrc:resim9,
  },
    { itemImageSrc:resim10,
    alt:`resim10`  ,
    thumbnailImageSrc:resim10,
  },
  { itemImageSrc:resim11,
    alt:`resim11`  ,
    thumbnailImageSrc:resim11,
  },
  { itemImageSrc:resim12,
    alt:`resim12`  ,
    thumbnailImageSrc:resim12,
  },
  { itemImageSrc:resim13,
    alt:`resim13`  ,
    thumbnailImageSrc:resim13,
  }
   
  ]
  const photosContext = createContext(null as  mainSliderObjectType )


  export class PhotosContextProvider extends Component<any,any> { 


constructor(props:any){
super(props)
}

value:(mainSliderObjectType | null) =photosObject
render() { 
return ( 
  <photosContext.Provider value={this.value || null}>{this.props.children}</photosContext.Provider>
)
}} 

 export { photosContext}
 export default PhotosContextProvider