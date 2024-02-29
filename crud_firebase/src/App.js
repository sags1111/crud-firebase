// import './App.css';
// import {BrowserRouter, Route,Routes }from "react-router-dom";
// import React from 'react';
// import Home from './pages/Home';
// import AddEdit from './pages/AddEdit';
// import View from './pages/View';
// import About from './pages/About';
// import {ToastContainer} from "react-toastify";
// import Header from './Components/Header';
// function App() {
//   return (
//     <BrowserRouter>
//     <div className="App">
//       <Header/>
//   <ToastContainer position= "top-center"/>
//       <Routes>
      
//         <Route exact path = "/" Component={Home}/>
//         <Route exact path = "/add" Component={AddEdit}/>
//         <Route exact path = "/update/:id" Component={AddEdit}/>
//         <Route exact path = "/view/:id" Component={View}/>
//         <Route exact path = "/about" Component={About}/>
      
//       </Routes>
//     </div>
//     </BrowserRouter>
//   );
// }

// export default App;
import React, { useEffect, useState } from 'react'
import './App.css';
import { database } from './config'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import New from './Hooks/New';
function App(){
    const [fname,setFname] =useState('')
    const [lname,setLname] =useState('')
    const [id,setId] =useState('')

    const [show,setShow] =useState(false)
    


    const [val,setVal] =useState([])    
    const value = collection(database,"demo")

  // const value2= collection(database, "Validation")
    useEffect(()=>{
        const getData= async()=>{
          const dbVal = await getDocs(value)
          setVal(dbVal.docs.map(doc=>({...doc.data(),id:doc.id})))
        }
        getData()
    })

    const handleCreate =async()=>{
        await addDoc(value,{name1:fname,name2:lname})
        setFname("")
        setLname("")
    }

    const handleDelete =async(id)=>{
       const deleteVal =  doc(database,"demo",id)
       await deleteDoc(deleteVal)
    }

    const handleEdit =async(id,name1,name2)=>{
        setFname(name1)
        setLname(name2)
        setId(id)
        setShow(true)
    }

    const handleUpdate =async()=>{
        const updateData = doc(database,"demo",id)
        await updateDoc(updateData,
          {name1:fname,name2:lname})
        setShow(false)
        setFname("")
        setLname("")
    }

    return(
        <div className='container'>
          <New/>
          First Name: <input value={fname} onChange={(e) => setFname(e.target.value)} />
        <br/>  Last Name: <input value={lname} onChange={(e) => setLname(e.target.value)} />
           {!show?<button onClick={handleCreate}>Create</button>:
           <button onClick={handleUpdate}>Update</button>}
           {
            val.map(values=>
            <div>
                <h1>{values.name1}</h1>
                <h1>{values.name2}</h1>
                <button onClick={()=>handleDelete(values.id)}>Delete</button>
                <button onClick={()=>handleEdit(values.id,values.name1,values.name2)}>Edit</button>
            </div>)
           }
        </div>
    )
}
export default App;