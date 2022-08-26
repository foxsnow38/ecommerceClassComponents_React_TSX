  import React, { Component } from 'react' 
  import moduleCSS from './Mainslider.module.scss' 
  import { Galleria } from 'primereact/galleria';
  import './GalleriaDemo.css';
  import { photosContext } from '../../context/PhotosContextProvider/PhotosContextProvider';



  type mainSliderStateType = {
    images:({ itemImageSrc: string; alt: string; thumbnailImageSrc?: string; }[]|null[]),
    images2:({ itemImageSrc: string; alt: string; thumbnailImageSrc?: string; }[]|null[]),
    images3?:any

  }
  type mainSliderTypeItem = { itemImageSrc: string; alt: string; thumbnailImageSrc?: string; }
  
  const photosObject= [
   { itemImageSrc:`../../assets/images/resim1.jpg`,
    alt:`resim1`  ,
    thumbnailImageSrc:`../../assets/images/resim1.jpg`,
  },
   { itemImageSrc:`../../assets/images/resim2.jpg`,
    alt:`resim2`  ,
    thumbnailImageSrc:`../../assets/images/resim2.jpg`,
  },
   { itemImageSrc:`../../assets/images/resim3.jpg`,
    alt:`resim3`  ,
    thumbnailImageSrc:`../../assets/images/resim3.jpg`,
  },
   { itemImageSrc:`../../assets/images/resim4.jpg`,
    alt:`resim4`  ,
    thumbnailImageSrc:`../../assets/images/resim4.jpg`,
  },
   { itemImageSrc:`../../assets/images/resim5.jpg`,
    alt:`resim5`  ,
    thumbnailImageSrc:`../../assets/images/resim5.jpg`,
  },
   { itemImageSrc:`../../assets/images/resim6.jpg`,
    alt:`resim6`  ,
    thumbnailImageSrc:`../../assets/images/resim6.jpg`,
  },
   { itemImageSrc:`../../assets/images/resim7.jpg`,
    alt:`resim7`  ,
    thumbnailImageSrc:`../../assets/images/resim7.jpg`,
  },
   { itemImageSrc:`../../assets/images/resim8.jpg`,
    alt:`resim8`  ,
    thumbnailImageSrc:`../../assets/images/resim8.jpg`,
  },
   
  ]

 
  

// console.log(importAllImages(require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/)))

 export class Mainslider extends Component<{},mainSliderStateType> { 

static contextType?= photosContext

thumbnailTemplate = (item:mainSliderTypeItem) => {
    return <img src={item.thumbnailImageSrc} onError={(e:any) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ width: '100%', display: 'block' }} />
  }

   indicatorTemplate = (index:number) => {
    return (
        <span className="indicator-text">
            {index + 1}
        </span>
    )
}

componentDidMount= ():void =>{
  this.setState({images:photosObject,images2:this.state.images?.slice(0,5)!})

  }



constructor(props:any){
  super(props)


  this.state={
    images:[],
    images2:[],
    images3:[]
    
  }
}



itemTemplate = (item: mainSliderTypeItem ) => {
  return <img src={(item.itemImageSrc)} onError={(e:any) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
}

   
    render() { 
   
      const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    const photosObject = this.context as any
     
  
      return (
        <div>
            <div className="galleria-demo">
            
                <div className="card">
                 
                    <Galleria   value={[photosObject[0],photosObject[1],photosObject[2],photosObject[3]]} responsiveOptions={responsiveOptions} numVisible={5} 
                        showThumbnails={false} showIndicators changeItemOnIndicatorHover showIndicatorsOnItem indicatorsPosition="right" item={this.itemTemplate} />
                </div>
            </div>
        </div>
    );
   }} 
   
    export default Mainslider



