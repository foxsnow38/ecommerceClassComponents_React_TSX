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
  import resim14 from "../../assets/images/resim14.jpg"
  import resim15 from "../../assets/images/resim15.jpg"
  import resim16 from "../../assets/images/resim16.jpg"
  import resim17 from "../../assets/images/resim17.jpg"
  import resim18 from "../../assets/images/resim18.jpeg"
  import resim19 from "../../assets/images/resim19.jpg"
  import resim20 from "../../assets/images/resim20.jpg"
  import resim21 from "../../assets/images/resim21.jpg"
  import resim22 from "../../assets/images/resim22.jpg"
  import resim23 from "../../assets/images/resim23.jpg"
  import resim24 from "../../assets/images/resim24.jpg"
  import resim25 from "../../assets/images/resim25.jpg"
  import resim26 from "../../assets/images/resim26.jpg"
  import resim27 from "../../assets/images/resim27.jpg"
  import resim28 from "../../assets/images/resim28.jpg"
  import resim29 from "../../assets/images/resim29.jpg"
  import resim30 from "../../assets/images/resim30.jpg"
  import resim31 from "../../assets/images/resim31.jpg"
  import resim32 from "../../assets/images/resim32.jpg"
  import resim33 from "../../assets/images/resim33.jpg"
  import resim34 from "../../assets/images/resim34.jpg"
  import resim35 from "../../assets/images/resim35.jpg"
  import resim36 from "../../assets/images/resim36.jpg"
  import resim37 from "../../assets/images/resim37.jpg"






  

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
  },
  { itemImageSrc:resim14,
    alt:`resim14`  ,
    thumbnailImageSrc:resim14,
  },
  { itemImageSrc:resim15,
    alt:`resim15`  ,
    thumbnailImageSrc:resim15,
  },
  { itemImageSrc:resim16,
    alt:`resim16`  ,
    thumbnailImageSrc:resim16,
  },
  { itemImageSrc:resim17,
    alt:`resim17`  ,
    thumbnailImageSrc:resim17,
  },
  { itemImageSrc:resim18,
    alt:`resim18`  ,
    thumbnailImageSrc:resim18,
  },
   
  { itemImageSrc:resim19,
    alt:`resim19`  ,
    thumbnailImageSrc:resim19,
  },
   
  { itemImageSrc:resim20,
    alt:`resim20`  ,
    thumbnailImageSrc:resim20,
  },
   
  { itemImageSrc:resim21,
    alt:`resim21`  ,
    thumbnailImageSrc:resim21,
  },
   
  { itemImageSrc:resim22,
    alt:`resim22`  ,
    thumbnailImageSrc:resim22,
  },
   
  { itemImageSrc:resim23,
    alt:`resim23`  ,
    thumbnailImageSrc:resim23,
  },
   
  { itemImageSrc:resim24,
    alt:`resim24`  ,
    thumbnailImageSrc:resim24,
  },
   
  { itemImageSrc:resim25,
    alt:`resim25`  ,
    thumbnailImageSrc:resim25,
  },
   
  { itemImageSrc:resim26,
    alt:`resim26`  ,
    thumbnailImageSrc:resim26,
  },
   
  { itemImageSrc:resim27,
    alt:`resim27`  ,
    thumbnailImageSrc:resim27,
  },
   
  { itemImageSrc:resim28,
    alt:`resim28`  ,
    thumbnailImageSrc:resim28,
  },
   
  { itemImageSrc:resim29,
    alt:`resim29`  ,
    thumbnailImageSrc:resim29,
  },
   
  { itemImageSrc:resim30,
    alt:`resim30`  ,
    thumbnailImageSrc:resim30,
  },
   
  { itemImageSrc:resim31,
    alt:`resim31`  ,
    thumbnailImageSrc:resim31,
  },
   
  { itemImageSrc:resim32,
    alt:`resim32`  ,
    thumbnailImageSrc:resim32,
  },
   
  { itemImageSrc:resim33,
    alt:`resim33`  ,
    thumbnailImageSrc:resim33,
  },
   
  { itemImageSrc:resim34,
    alt:`resim34`  ,
    thumbnailImageSrc:resim34,
  },
   
  { itemImageSrc:resim35,
    alt:`resim35`  ,
    thumbnailImageSrc:resim35,
  },
   
  { itemImageSrc:resim36,
    alt:`resim36`  ,
    thumbnailImageSrc:resim36,
  },
   
  { itemImageSrc:resim37,
    alt:`resim37`  ,
    thumbnailImageSrc:resim37,
  },

  



   
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