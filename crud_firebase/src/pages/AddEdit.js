import React,{useState,useEffect} from 'react';
import { useParams} from "react-router-dom";
import './AddEdit.css';
import fireDb from "../";
import {toast} from "react-toastify";

const intialState = {
    name:"",
    email:"",
    password:""
}
function AddEdit() {
    const [state,setState]= useState(intialState);
    const [data,setData]= useState({});

    const {name, email, password}= state;
    
    const handleInputChange=(e)=>{
    const {name, value }= e.target;
    setState({...state, [name]:value})

    }

    const handleSubmit= (e)=>{
    e.preventDefault();
    if(!name || !email || !password){
        toast.error("Please Provide Value Each input value")
    }
    else{
    fireDb.collection("contacts").push(state,(err)=>{
        if(err){
            toast.error(err)
        }
        else{
            toast.success("Contact added Sucessfully")
        }
    });
    
    }
    };
    
  return (
    <div style={{marginTop:"100px"}}>
      <form style={{margin:"auto", padding:"20px", maxWidth:"100px", alignContent:"center"}}onSubmit={handleSubmit}>
      
      <label htmlFor='name'>name:</label>
      <input type='text' id='name' name='name'
      placeholder='enter your name..' value={name} onChange={handleInputChange} />

<label htmlFor='email'>Email:</label>
      <input type='email' id='email' name='email'
      placeholder='enter your email..' value={email} onChange={handleInputChange} />

<label htmlFor='password'>Password:</label>
      <input type='password' id='password' name='password'
       value={password} onChange={handleInputChange} />
   <input type='submit' value="save" />

      </form>
    </div>
  )
}

export default AddEdit
