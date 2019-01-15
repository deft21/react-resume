import React, { Component } from 'react';


export default function Input({type, name, placeholder,nameRu}) { 
		return (
				<li>
					<label for={name}>{nameRu}:</label>
					<input 
					type = {type}
					name = {name}
					placeholder = {placeholder}
					className = "form_hint"
					/>
				</li>
        )
}

