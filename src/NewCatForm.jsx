import React from "react";
import {useState} from 'react'
export default function NewCatForm({
      handleSubmit,name,image,breed,score,setName,setBreed,setImage,setScore 
}) {

  const[showForm,setShowForm] = useState(true)

  function removeForm(){
    setShowForm(!showForm)
  }


  
  
  return (
    <div className="formDiv">
      {showForm ? 

        <form onSubmit = {handleSubmit} className="newform">
        <label>Name:</label>
        <input 
        value = {name}
        onChange = {(e) => setName(e.target.value)}
        ></input>
        <label>Breed:</label>
        <input></input>
        <label>Image:</label>
        <input></input>
        <label>Score:</label>
        <input></input>
        <button id="tog">Add New Cat!</button>
      </form>
      :
      null
    }
    <button onClick = {removeForm}>Add A Cat</button>
    </div>
  );
}
