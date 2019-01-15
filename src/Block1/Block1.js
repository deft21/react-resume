import React from 'react';
import img from '../img/Fry.jpg';
import './Block1.css';

export default function Block1 () {
    return (
      <div className="block1">
        <a name="top"></a>
        <header className="header">
          <img src={img} className="header-img" />
          <h1 className="header-title">Добро пожаловать в мой профиль</h1>
          <a href="#block2" className = "header-button">Узнать больше обо мне</a>
        </header>
      </div>
    );
  }


