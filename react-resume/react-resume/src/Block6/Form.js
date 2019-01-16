import React, { Component } from 'react';
import Input from './Input'

export default function Form({ckick}) { 
		return (
			<form className = "contact_form" onSubmit = {ckick}>
				<Input type = "text" name = "firstname" nameRu="Имя" placeholder = "Сергей"/>
		        <Input type = "text" name = "lastname" nameRu="Фамилия" placeholder = "Засорин"/>
		        <Input type = "email" name = "email" nameRu="Email" placeholder = "sergey2005lesnoy@mail.ru"/>
		        <li>
		        	<label for="comment">Комментарий:</label>
   					<textarea name="comment" cols="40" rows="4"></textarea>
   				</li>
   				<button type = "submit" className="submit">Сохранить</button>
			    <button type="reset" className="submit">Очистить</button>
		    </form>
        )
}
