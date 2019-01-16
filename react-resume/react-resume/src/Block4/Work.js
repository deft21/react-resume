import React, {Component} from 'react';

export default class Work extends Component {
	constructor (props){
		super(props)

			this.state = {
				isOpen: false
			}
		
	}

	render () {
		const {place} = this.props
		const {isOpen} = this.state
		const body = isOpen ? <section>{place.text}</section> : null
    	return (
	      <div>
	      	<div className="row">
	      		<div className="col-sm-2">
	      			<button className = "btr-work" onClick = {this.click}>{isOpen ? "Закрыть" : "Открыть"}</button>
	      		</div>
	      		<div className="col-sm-3">
	      			<h2>{place.title}</h2>
	      		</div>
	      		<div className="col-sm-7">
	      			<h3>{place.date}</h3>
	      		</div>
	      	</div>
	      	<div className = "row">
	      		<h2>{place.position}</h2>
	      	</div>
	      	<div className="row">{body}</div>
	      </div>
    );
	}

	click = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
}
