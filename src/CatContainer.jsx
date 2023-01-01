import React from "react";
import CatCard from "./CatCard";
import DropDown from "./DropDown";
import NewCatForm from "./NewCatForm";
import SearchBar from "./SearchBar";
import {useState,useEffect} from 'react'

export default function CatContainer() {

  const[catArray,setCatArray] = useState([])

  const fetchCats = async () => {
    let req = await fetch('http://localhost:3000/cats')
    let res = await req.json()
    setCatArray(res)
  }

  useEffect(() =>{
    fetchCats()
  },[])

const[name,setName] = useState('')
const[breed,setBreed] = useState('')
const[image,setImage] = useState('')
const[score,setScore] = useState('')


  function handleSubmit(e){
    e.preventDefault()
    fetch('http://localhost:3000/cats',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        name:name,
        breed:breed,
        image:image,
        score:score
      }),
    })
    .then(res => res.json())
    .then(res => setCatArray([...catArray,res]))
    }

    function removeCat(id){
      
      fetch(`http://localhost:3000/cats/${id}`,{
        method:'DELETE',
      })
      .then(res  => res.json())
      .then(res => setCatArray(catArray.filter(cat =>{
        if(cat.id !== id) return true
      })))
  
    }
    

    const[searchTerm,setSearchTerm] = useState('')

    const filteredCats = catArray.filter(kitty =>{
      if(kitty.name == '') return true
      else return kitty.name.toLowerCase().includes(searchTerm.toLowerCase())


    })

    const[options,setOptions] = useState("All")

    const selectedCats = filteredCats.filter(cat => {
      if(options == "All") return true
      else return cat.breed == options
    })

  return (
    <div>
      <h1 className="title">MY FAVORITE CATS 🤍</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <DropDown options = {options} setOptions={setOptions}/>
      <NewCatForm 
      handleSubmit = {handleSubmit}
      setName = {setName}
      setBreed = {setBreed}
      setImage = {setImage}
      setScore = {setScore}
      name = {name}
      breed = {breed}
      image = {image}
      score = {score}
      
      />
      {selectedCats.map((cat) =>{
        return(
          <CatCard id = {cat.id} key = {cat.id} cat = {cat} removeCat={removeCat}/>
        )
      })}
    </div>
  );
}
