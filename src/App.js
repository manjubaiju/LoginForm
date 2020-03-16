import React, {Component} from 'react';

import './App.css';
//import Form from './Form';
let formErrors="";
const usernameRegExp = RegExp(/^[a-zA-Z\-]+$/)
const pwdRegExp =  RegExp(/^[a-zA-Z0-9\-]+$/)
const emailRegExp = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
class App extends Component {
  constructor(){
    super();
    this.state={
        firstName:null,
        lastName:null,
        email:null,
        password:null,
        formErrors :{
            firstName :"",
            lastName:"",
            email:"",
            password:""
        }
    };             
}
handleSubmit = e=>{
  e.preventDefault();
 
}
handleChange =e =>{
  e.preventDefault();
  const {name,value}= e.target;
  formErrors= this.state.formErrors;
  console.log(value);
  switch (name){
      case 'firstName':
       
      formErrors.firstName =
      usernameRegExp.test(value)  && value.length>0 
           ?''
           :"Invalid First name";
           
           
      break;
      case 'lastName':
      formErrors.lastName =
      usernameRegExp.test(value)  && value.length>0
          ?''
          :"Invalid Last name";
      break;

      case 'email':
      formErrors.email =
      emailRegExp.test(value)  && value.length>0
          ?''
          :"Invalid Email";
      break;
      case 'password':
      formErrors.password =
      pwdRegExp.test(value) && value.length==8  && value.length>0
      ?''
      :"Invalid password";
      break;

      default:
      break;

  }
 
  this.setState({formErrors,[name]:value},()=>console.log(this.state));
}
  render(){
  return (
    <div>
      <div className="Container">
        <div className="Header">
                Get Started Today !
        </div>  
        <div>
        <form>
          
            <div>
               <label className="labelCss"><b> First name</b></label>
               <label className="labelCss"> <b>Last name</b></label>
            </div>
            <div>
              
               <input  style={{marginLeft:"120px",height:"30px"}} 
               type="text"
               name="firstName"
               onChange={this.handleChange}/>           
                             
               <input  style={{marginLeft:"20px",height:"30px"}}  
               type="text"
               name="lastName"
               noValidate
               onChange={this.handleChange}/>
            </div>
            <div><span className="firstColerrorMsg">{formErrors.firstName}</span>
                 <span className="secondColerrorMsg">{formErrors.lastName}</span>
            </div>
            <div className="rowSpace">
               <label className="labelCss"><b> Email address</b></label>
               <label className="passwordLabel"> <b>Password</b></label>
            </div>
            <div >
               <input  style={{marginLeft:"120px",height:"30px"}} 
               type="text"
               name="email"
               onChange={this.handleChange}
               />
               <input  style={{marginLeft:"20px",height:"30px"}}  
               type="password"
               name="password"
               onChange={this.handleChange}
               />
            </div>
            <div><span className="firstColerrorMsg">{formErrors.email}</span>
                 <span className="secondColerrorMsg">{formErrors.password}</span>
            </div>
            <div className="rowSpace">
               <button className="buttonCss"> <b>Claim your free trial</b></button>
            </div>
            <div className="rowSpace">
              <span className="linkText"><b> You are agreeing to our </b><a href="">Terms and conditions</a>
              </span>
            </div>
          </form>
        </div>    
      </div>
    </div>
  );
}
}

export default App;
