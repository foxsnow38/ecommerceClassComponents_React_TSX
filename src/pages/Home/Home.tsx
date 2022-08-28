  import{ Component, Context } from 'react' 
  import Mainslider from '../../components/Mainslider'
  import moduleCSS from './Home.module.scss' 

import CategoryShowcase from '../../components/CategoryShowcase'

import { Image } from 'Primereact/image';
import { photosContext } from '../../context/PhotosContextProvider/PhotosContextProvider';


  export class Home extends Component<any,any,any> { 

    static contextType?:( Context<any> | undefined)  = photosContext

    componentDidMount(): void {

    
    }
    constructor(props:any){
      super(props)
      {  console.log()}
    }

 render= ()=> { 
  const   context = this.context as any

 return ( 

  <div>

<div style={{position:"relative"}}>
<div className={moduleCSS.homeTopPage} >
    <Mainslider/>
    
    <CategoryShowcase title='NEW COLLECTION' desc="
    Our easiest chuck-on-and-go staples come with a serious style heritage that’s liberating, sexy, comfy and supremely cool. 
    " srcBtn='SHOP NEW ARRIVALS' className={`${moduleCSS.CategoryShowCase}`} linkTO='/'/>

</div>
</div> 

<div style={{position:"relative"}}>
<div className={moduleCSS.secondPage}>
      
      
      
      <img style={{display:"block"}} src={context[7].itemImageSrc} width='100%' alt="Image Text" />
      <CategoryShowcase title='NEW COLLECTION' desc="
    Our easiest chuck-on-and-go staples come with a serious style heritage that’s liberating, sexy, comfy and supremely cool. 
    " srcBtn='SHOP NEW ARRIVALS' className={`${moduleCSS.CategoryShowCase} ${moduleCSS.case1}`} linkTO='/'/>
            

</div> 
</div>  

<div style={{position:"relative"}}>
<div className={moduleCSS.thirdPage}>
      
      
      
      <img style={{display:"block"}} src={context[8].itemImageSrc} width='100%' alt="Image Text" />
      
            

</div> 
</div>


<div style={{position:"relative"}}>
<div className={moduleCSS.fourtPage}>
      
      
      
      <img style={{display:"block"}} src={context[2].itemImageSrc} width='100%' alt="Image Text" />
      <CategoryShowcase title='SUSTAINABLE DENIM' desc="
  What started as a true ‘80s vintage pair of jeans, finished as a re-energised, wider leg vintage jean with versatile detailing. 
    " srcBtn='SHOP DENIM' className={`${moduleCSS.CategoryShowCase} ${moduleCSS.case1}`} linkTO='/'/>
            

</div> 
</div>  
    
<div style={{position:"relative"}}>
<div className={moduleCSS.fifthPage}>
      

       <img style={{display:"block"}} src={context[2].itemImageSrc} width='100%' alt="Image Text" className={moduleCSS.fifthPageBackground}/>


      
      <div className={moduleCSS.fifthPageAbsolute}>

        
       <div className={moduleCSS.fifthPageTitle}>
       <p>NEW ARRIVALS</p>
        </div>
     <div className={moduleCSS.fifthPageFlex}>
     
    
 
      <img style={{display:"block"}} src={context[12].itemImageSrc} alt="Image Text" />
      <img style={{display:"block"}} src={context[11].itemImageSrc} alt="Image Text" />
      <img style={{display:"block"}} src={context[10].itemImageSrc} alt="Image Text" />
      <img style={{display:"block"}} src={context[9].itemImageSrc} alt="Image Text" />

  
     </div>
     </div>
        
            

</div> 
</div>  



<div style={{position:"relative"}}>
<div className={moduleCSS.sixthtPage}>
      
      
      
      <img style={{display:"block"}} src={context[4].itemImageSrc} width='100%' alt="Image Text" />
      <CategoryShowcase title='PRAY FOR ROCK' desc="Beloved and forever relevant, there’s a convenience
factor in a well-built pair of all-in-ones." srcBtn='SHOP COLLECTION' className={`${moduleCSS.CategoryShowCase} ${moduleCSS.case2}`} linkTO='/'/>
            

</div> 
</div>  
    
<div style={{position:"relative"}}>
<div className={moduleCSS.seventhPage}>

    <div className={moduleCSS.gridPart}>
    <div className={moduleCSS.labelPart}>
    <label > {`SHOP INSTAGRAM`}</label>
    <label className={moduleCSS.LabelShop} > {`SHOP >`}</label>
    </div>

    <div className={ moduleCSS.photoPart}>
    <div className={moduleCSS.bigRectangle}>
    <img  src={context[17].itemImageSrc} width='100%' alt="Image Text" />
    </div>
    <div className={`${moduleCSS.gridPhotoPart} ui-grid-col-6`}>
   
      <img  src={context[13].itemImageSrc} width='100%' alt="Image Text" />
    <img  src={context[14].itemImageSrc} width='100%' alt="Image Text" />
    <img  src={context[15].itemImageSrc} width='100%' alt="Image Text" />
    <img  src={context[16].itemImageSrc} width='100%' alt="Image Text" />

    </div>
    </div>
    

    <div className={moduleCSS.footerLabel}>
      <label>#MODNINKY</label>
    </div>
    </div>

      
      
      
      
            

</div> 
</div>  
    






    



   


  </div> )
} 

} 

 export default Home