import React from 'react';
import './Block6.css';
import Form from './Form.js'
import avatar from '../img/auto_07-40-25_7867120.jpeg'


export default function Block6 () {
    return (
      <div className= "block6">
      <a name="block6"></a>
      		<div className="row">
          <div className = "col-md-4">
      		  <h1 className="required_notification">Контакты</h1>
      		  <Form />
          </div>
          <div className = "col-md-4 offset-md-2">
            <img src={avatar} className = "img_block6" />
          </div>
	        <div className="col-md-4 offset-md-6">
            <a href="#top">Наверх</a>
          </div>
       </div>
       </div>
    );
  }
