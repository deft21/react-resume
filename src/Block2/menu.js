import React, {Component} from 'react';

export default class menu extends Component {
	constructor (props){
		super(props)

			this.state = {
				isScroll: false
			}
		
	}



	Scroll = () => {
		if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
		this.setState({
			isScroll: !this.state.isOpen
		})
	}
}
