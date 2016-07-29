import React, {Component} from 'react';


export default class Binfo extends Component {
	constructor() {
		super();
		this.state = {
			zipOk: false,
			zipWarning:false,
			errormsg: false
		}
	}

	nextStep() {
		this.props.newStep();
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
		let zipIsOk = (this.state.zipOk === true ? 'zipIsOk ' : '');
		let zipWarning = (this.state.zipWarning === true ? 'warning ' :'');
		let errorShow = (this.state.errormsg === true ? 'show ' :'');
		return(
			<div className="formWrap ">
				<div><p>Who are you buying health insurance for today?</p></div>
				<div className={"cardWrap "} >
					<div className={"cardHead"}>
						<span className="fa-stack ">
							<i className="fa fa-circle fa-stack-2x"></i>
							<i className="fa fa-check fa-stack-1x fa-inverse"></i>
						</span>
						<p>Me</p>
					</div>
					<div className={"cardBody"}>
						<form >
							<div className="cadrBody-gender">
							Gender:
							<input type="radio" id="male" name="gender" value="male"/>
							<label for="male">Option A</label>
						  <input type="radio" name="gender" value="female"/> Female
						  </div>
							<input
							type="text"
							maxLength={5}
							pattern="[0-9]"
							name="zipcode"
							placeholder="Search by zip code"
							onChange={this.handleInputChange.bind(this)}/>
						</form>
					</div>
				</div>
				<div className={"error " + errorShow}><p>Try again! Please enter a valid 5-digit ZIP code.</p></div>
				<button className={"btnNext " + zipIsOk} onClick={this.nextStep.bind(this)}>
					Find insurance for myself
					<i className="fa-fw fa fa-angle-right fa-lg" aria-hidden="true"></i>
				</button>
			</div>
		)
	}
}