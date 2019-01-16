import React from 'react';
import './Block3.css';
import avatar from '../img/A_Fishful_of_Dollars.jpg'

export default function Block3 () {
    return (
      <div className= "block3">
      <a name="block3"></a>
      	<div className="row">
	        <div className="col-sm-8">
	        	<h1>Обо мне</h1>
	        	<h3>Привет! Я Засорин Сергей Александрович</h3>
				<p>Мужчина, 29 лет, родился 21 апреля 1989</p>
				<p>+7 (904) 5464226 — предпочитаемый способ связи
				Email: sergey2005lesnoy@mail.ru
				Проживаю: Екатеринбург/Cочи
				Гражданство: Россия, есть разрешение на работу: Россия
				</p>
	        </div>
	        <div className="col-sm-4">
	        	<img src={avatar} className = "img_block3" />
	        </div>
	        <div className="row">
		        <div className="col-sm">
		        	<button className = "btm_resume">Загрузить мое резюме</button>
		        </div>
	        </div>
        </div>
      </div>
    );
  }

