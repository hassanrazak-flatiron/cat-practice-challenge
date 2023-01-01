import React from "react";
import {useState} from 'react'

export default function DropDown({setOptions}) {
  

  return (
    <div className="dropdown">
      <select onChange = {(e) => setOptions(e.target.value)}className="dropdown" name="cats" id="cats">
        <option value="all">All</option>
        <option value="bangal">Bangal</option>
        <option value="persian">Persian</option>
        <option value="siamese">Siamese</option>
      </select>
    </div>
  );
}
