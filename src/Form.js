import React ,{Component} from 'react';

const formValid =formErrors=> {
    let valid = true;
    object.values(formErrors).forEach(val =>{
        val.length >0 && (valid = false)
    
    });
    return valid;
}
class Form extends Component{
    constructor(props){
        super(props);
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
    handleChange =e =>{
        e.preventDefault();
        const {name,value}= e.target;
        let formErrors= this.state.formErrors;
        console.log(value);
        switch (name){
            case 'firstName':
             
                formErrors.firstName =value.length<3 && value.length>0 
                 ?"Minimum 3 characters required"
                 :"";
                 
                 
            break;
            case 'lastName':
                formErrors.lastName =value.length<3 && value.length>0 ?'Minimum 3 characters required'
                 :"";
            break;
            default:
            break;

        }
        this.setState({formErrors,[name]:value},()=>console.log(this.state));
    }
    render(){
        
        return(
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
            <div>
                {formErrors.firstName}
            </div>
            <div className="rowSpace">
               <label className="labelCss"><b> Email address</b></label>
               <label className="passwordLabel"> <b>Password</b></label>
            </div>
            <div >
               <input  style={{marginLeft:"120px",height:"30px"}} type="text"/>
               <input  style={{marginLeft:"20px",height:"30px"}}  type="text"/>
            </div>
            <div className="rowSpace">
               <button className="buttonCss"> <b>Claim your free trial</b></button>
            </div>
            <div className="rowSpace">
              <span style={{ marginLeft:"150px"}}> You are agreeing to our <a href="">Terms and conditions</a>
              </span>
            </div>
          </form>
          </div>
        )
    }
}

export default Form;