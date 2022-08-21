 import React, { Component } from 'react' 
  import moduleCSS from './Mainslider.module.scss' 
  import { Galleria } from 'primereact/galleria';
  import './GalleriaDemo.css';
  import images from "../../assets/images/resim1.jpg"
  

  type mainSliderStateType = {
    images:({ itemImageSrc: string; alt: string; thumbnailImageSrc?: string; }[]|null[]),
    images2:({ itemImageSrc: string; alt: string; thumbnailImageSrc?: string; }[]|null[])

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

  export class Mainslider extends Component<{},mainSliderStateType> { 


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
    images2:[]
  }
}



itemTemplate = (item: mainSliderTypeItem ) => {
  return <img src={require(item.itemImageSrc)} onError={(e:any) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
}

    // componentDidUpdate(prevProps:any, prevState:any) {
    //   if (prevState.data !== this.state.data) {
    //     // Now fetch the new data here.
    //   }
    // }

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
      return (
        <div>
            <div className="galleria-demo">
                
                <div className="card">
                    <h5>Positioned at Right</h5>
                    <Galleria value={this.state.images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '500px' }}
                        showThumbnails={false} showIndicators changeItemOnIndicatorHover showIndicatorsOnItem indicatorsPosition="right" item={this.itemTemplate} />
                </div>
            </div>
        </div>
    );
   }} 
   
    export default Mainslider



