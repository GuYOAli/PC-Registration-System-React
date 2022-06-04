import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Axios from 'axios';
import Select from 'react-select';
import Joi from 'joi-browser';
import { getPcs, savePc } from "../../StudentData/studentInfo";
import './SignUp.css';



function SignUp (history){

  
    const [fullname, setfullname] = useState("")
    const [id, setid] = useState(0)
    const [department, setdepartment] = useState("")
    const [pctype, setpctype] = useState("")
    const [serialone, setserialone] = useState("")
    //const [serialtwo, setserialtwo] = useState("")
   //constructor(){
    
    let state = {
      value : "",
      checked : "",
      account : {username : "", password : "", role : ""},
      erros : {}
    };
  //}

  //  schema = {
  //   username : Joi.string().min(4).max(10).required().label("Username"), 
  //   password : Joi.string().min(6).max(16).required().label("Password")
  // };

   const register = (e) =>{
    try{
      Axios.post("http://localhost3001/sign-up", {
      fname : fullname,
      ID : id,
      deptt : department,
      pcc : pctype,
      serial : serialone
    }).then( (response) =>{
      console.log(response)
    });
    e.preventDefault();
    //e.target.reset();
  }catch(error){
    console.log(error);
  }
  }

   const validate = () =>{
    
    const option = {abortEarly : false};
    const { error } = Joi.validate(state.account,option);
    console.log(error)
    if(!error) return null;

    const errors = {};
    for(let item of error.details)
        errors[item.path[0]] = item.message;

    return errors;
  };

  const textchange = (e) =>{
    this.setState({input: e.target.checked});
  }
 
  //render(){

    const dept = [
        { value : 1, label : "ARCHITECTURE" },
        { value : 2, label : "CHEMICAL" },
        { value : 3, label : "CIVIL" },
        { value : 4, label : "COMPUTER SIANCE" },
        { value : 5, label : "ELECTRICAL" },
        { value : 6, label : "FASHION" },
        { value : 7, label : "MECHANICAL" },
        { value : 8, label : "MECHATRONICS" },
        { value : 9, label : "INFORMATION SYSTEM" },
        { value : 10, label : "INFORMATION TECHNOLOGY" },
        { value : 11, label : "SOFTWARE" },
        { value : 12, label : "TEXTILE" },
        { value : 13, label : "WATER" },
        { value : 14, label : "OTHER" }
  ];

  const pc = [
        { value : 1, label : "HP" },
        { value : 2, label : "TOSHIBA" },
        { value : 3, label : "APPLE" },
        { value : 4, label : "ACCER" },
        { value : 5, label : "DEAL" },
        { value : 6, label : "LINOVO" },
        { value : 7, label : "OTHER" }
  ];

  const [result1, deptvalue] = useState(dept.label)
  const [result2, pcvalue] = useState(pc.label)

  const depthandler = (e) =>{
    deptvalue(e.label);
  };

  const pchandler = (e) =>{
    pcvalue(e.label);
  };

  const handleSubmit = e => {
    //e.preventDefault();

    const errors = validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

 const doSubmit = () => {
    savePc(this.state.data);

    this.props.history.push("/movies");
  };
  return (

      <section className="contact-form">
            <div className="formcontainer">
                <form onSubmit={handleSubmit()}>
                    <h2>Student Registration Form</h2>
                    <input 
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Full Name"
                    onChange = { (e) =>{
                      setfullname(e.target.value)
                    }}
                  />

                  <input 
                    type="text"
                    id="id_num"
                    name="id_num"
                    placeholder="ID"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    onChange ={ (e) =>{
                    setid(e.target.value)
                    }}
                  />

                  <Select options={dept} placeholder="DEPARTMENT" 
                    onChange = { depthandler }/>

                  <Select options={pc} placeholder="PC TYPE"  
                    onChange = { pchandler }/>

                  <input 
                    type="text"
                    id="serial-1"
                    name="serial_num"
                    placeholder="Serial Number One"
                    onChange ={ (e) =>{
                      setserialone(e.target.value)
                    }}
                  />
                  <Link
                      to="./admin"
                      className="btn btn-primary"
                      //style={{ marginBottom: 20,marginTop: 10}}
                  >Register</Link>
                  
            </form>
        </div>
    </section>
  );
}

export default SignUp;


//<button id = "btn" onClick={() => history.pushState("/adminpage")}>Register</button>

{/* <input type="checkbox" id="check" className="check" onChange={textchange.bind(this)}/> 
                  <label className="check-lable">Have another PC</label>

                  <input 
                  type="text" 
                  id="serial-2" 
                  name="serial-2" 
                  placeholder="Serial Number Two" 
                  hidden = {state.input}
                  onChange ={ (e) =>{
                    //setserialtwo(e.target.value)
                  }}
                  /> */}