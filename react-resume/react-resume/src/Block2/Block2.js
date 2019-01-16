import React from 'react';
import './Block2.css';

export default function Block2 () {
    return (
      <div className="block2">
      <a name="block2"></a>
        <ul className="menu" id="navbar">
          <li><a href="#block2">Главная</a></li>
          <li><a href="#block3">Обо мне</a></li>
          <li><a href="#block4">Работа</a></li>
          <li><a href="#block5">Навыки</a></li>
          <li><a href="#block6">Контакт</a></li>
        </ul>
      </div>
    );


//   Scroll = () => {
//     if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
  }