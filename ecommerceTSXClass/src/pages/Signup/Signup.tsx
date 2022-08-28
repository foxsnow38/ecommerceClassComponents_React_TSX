import React, { Component } from 'react' 
import moduleCSS from './Signup.module.scss' 
import { Navigate } from 'react-router-dom'


export class Signup extends Component<{},{nagivate:string|null}> { 


constructor(props:any){
super(props)
this.state={
  nagivate:null
}
}




render() { 

return ( 
<>
{this.state.nagivate!=null?<Navigate to={this.state.nagivate}/>:null}
<div className={moduleCSS.signUp}> 

<div className={moduleCSS.signUpForm}>
<div className={moduleCSS.signUpTitle}>
<label> CREATE ACCOUNT</label>
<svg width="15" height="15" viewBox="0 0 429 430" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M22.492 22.998L0.00600052 45.501L84.498 129.998L168.991 214.495L84.495 298.995L0 383.494L22.748 406.242L45.496 428.99L129.995 344.495L214.495 259.999L299.25 344.75L384.006 429.501L406.25 407.24C418.485 394.996 428.495 384.533 428.495 383.989C428.495 383.445 390.583 345.086 344.247 298.747L259.999 214.495L344.495 129.995L428.99 45.496L406.242 22.748L383.494 0L298.995 84.495L214.495 168.991L130.243 84.743C83.904 38.407 45.763 0.494999 45.484 0.494999C45.206 0.494999 34.859 10.621 22.492 22.998Z" fill="black"/>
</svg>
</div>

<div className={moduleCSS.formInputArea}>

<div className={moduleCSS.formInput}>
  <input type="text" placeholder='First Name' />
  </div>

  <div className={moduleCSS.formInput}>
  <input type="text" placeholder='Last Name' />
  </div>


  <div className={moduleCSS.formInput}>
  <input type="text" placeholder='Email' />
  </div>

  <div className={moduleCSS.formInput}>
  <input type="password"  placeholder='Password'  />
  </div>

  
<div className={moduleCSS.personalData}>
<div className={moduleCSS.personalCheck}>

<input type="checkbox" />
</div>
<div className={moduleCSS.personalDesc}>
  <label>

  Let's get personal! We'll send you only the good stuff: Exclusive early access to Sale, new arrivals and promotions. No nasties.

  </label>
</div>
</div>
<div className={moduleCSS.personalSigningTerm}>
By signing up you agree to <span>Terms of Service</span> and <span>Privacy Policy</span>
</div>




  <div className={moduleCSS.SignUpBtn}>
  <button>SIGN UP</button>  
  </div>
</div>



<div onClick={()=>this.setState({nagivate:"/signin"})} className={moduleCSS.doYouHaveAcc}>



<label>I HAVE ACCOUNT</label>

</div>
</div>





 </div>
 </> ) 
}} 

export default Signup