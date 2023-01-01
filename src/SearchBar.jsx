import React from "react";
import {useState} from 'react'

export default function SearchBar({
  searchTerm,setSearchTerm
}) {
  

  return (
    <div>
      {" "}
      <form id="form">
        <input
         type="text" 
         id="query" 
         name="q" 
         placeholder="Search..." 
         value = {searchTerm}
         onChange = {(e) => setSearchTerm(e.target.value)}
         />
      </form>
    </div>
  );
}
