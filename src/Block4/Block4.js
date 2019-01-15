import React from 'react';
import './Block4.css';
import WorkList from './WorkList.js'
import place from './resume.js'



export default function Block4 () {
    return (
      <div className = "block4">
      <a name="block4"></a>
      	<h1>Трудовой стаж</h1>
      	<WorkList place = {place}/>
      </div>
    );
  }
