import React, {Component} from 'react';


export default class Locat extends Component {
	constructor() {
		super();
		this.state = {
			zipOk: false,
			zipWarning:false,
			errormsg: false
		}
	}

	nextStep() {
		if (this.state.zipOk === true){
			this.setState({errormsg: false});
		console.log("Next Step");
		} else {
			this.setState({errormsg: true});
		}
	}

	handleInputChange(event){
		let iValue = event.target.value;
		let pattern = /[0-9]/g;
    let result = iValue.match(pattern);
    if (result.length === 5){
    	this.setState({
    		zipOk: true,
    		errormsg: false,
    		zipWarning: false
    	});
    } else {
    	this.setState({zipOk: false, zipWarning: true});
    }
	}

	render(){
		console.log(this.state.zipOk);
		let zipIsOk = (this.state.zipOk === true ? 'zipIsOk ' : '');
		let zipWarning = (this.state.zipWarning === true ? 'warning ' :'');
		let errorShow = (this.state.errormsg === true ? 'show ' :'');
		return(
			<div className="formWrap ">
				<div><p>We need to know your location in order to find the best plan for you</p></div>
				<div className={"inputWrap "  + zipIsOk + zipWarning} >
					<i className="fa fa-search" aria-hidden="true"></i>
					<form ><input
						className="locInput"
						type="text"
						maxLength={5}
						pattern="[0-9]"
						name="zipcode"
						placeholder="Search by zip code"
						onChange={this.handleInputChange.bind(this)}/></form>
				</div>
				<div className={"error " + errorShow}><p>Try again! Please enter a valid 5-digit ZIP code.</p></div>
				<button className={"btnNext " + zipIsOk} onClick={this.nextStep.bind(this)}>
					Find my plan
					<i className="fa-fw fa fa-angle-right fa-lg" aria-hidden="true"></i>
				</button>
			</div>
		)
	}
}