import React, {Component} from 'react';


export default class Savings extends Component {
	constructor(){
		super();
		this.state = {
		}
	}

	goStep() {
		this.props.goStep();
	}

	subStepChanger(stage){
		switch(stage) {
	    case 0:
	        this.setState({substep: 0});
	        break;
	    case 1:
	        this.goStep();
	        break;
		}
	}

	handleYesNoClick(expression) {
		switch(expression) {
	    case "yes":
	        this.subStepChanger(1);
	        break;
	    case "no":
	        this.goStep();
	        break;
		}
	}

	render() {
		return(
			<div>
				<div className={"doctorsWrap "}>
					<div className="title"><p>The government might pay for some of your health insurance
					 depending on your income. Do you want to see if you qualify?</p></div>
					<button className={"btnYesNo "} onClick={this.handleYesNoClick.bind(this, "yes")}>Yes</button>
					<button className={"btnYesNo "} onClick={this.handleYesNoClick.bind(this, "no")}>No</button>
					<div className="savTitle"><p>Most people qualify for some assistance and it only takes 2
					 additional questions to find out.</p></div>
				</div>
			</div>
		);
	}
}