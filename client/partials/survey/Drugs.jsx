import React, {Component} from 'react';


export default class Drugs extends Component {
	constructor(){
		super();
		this.state = {
			substep: 0,
			errormsg: false,
			docactive: false,
			mockCard: "hide"
		}
	}

	nextStep() {
		this.props.newStep();
	}

	handleYesNoClick(expression){
		switch(expression) {
	    case "yes":
	        this.setState({substep: 1});
	        break;
	    case "no":
	        this.nextStep();
	        break;
	    case "cancel":
	        this.setState({substep: 0});
	        break;
		} 

	}

	handleDocInputChange(event){
		let iValue = event.target.value;
    if (iValue.length > 2){
    	this.setState({
    		errormsg: false,
    		docactive: true,
    		mockCard: "show"
    	});
    } else if (iValue.length > 0){
    	this.setState({
    		errormsg: true,
    		docactive: true,
    		mockCard: "hide"
    	});
    } else {
    	  this.setState({
    		errormsg: false,
    		docactive: false,
    		mockCard: "hide"
    	});
    }
	}

	render() {
		let start = (this.state.substep === 0 ? 'show' : 'hide');
		let yes = (this.state.substep === 1 ? 'show' : 'hide');
		let no = (this.state.substep === 2 ? 'show' : 'hide');
		let errormsg = (this.state.errormsg === true ? 'show' : 'hide');
		let docActive = (this.state.docactive === true ? 'active' : '');
		let showCancel = (this.state.docactive === true ? 'show' : 'hide');
		return(
			<div>
				<div className={"doctorsWrap " + start}>
					<div className="title"><p>Do you take any prescription drugs regularly?</p></div>
					<button className={"btnYesNo "} onClick={this.handleYesNoClick.bind(this, "yes")}>Yes</button>
					<button className={"btnYesNo "} onClick={this.handleYesNoClick.bind(this, "no")}>No</button>
				</div>
				<div className={"doctorsWrap " + yes}>
				<div className="title"><p>Do you take any prescription drugs regularly?</p></div>
					<div className={"drgInputWrap " + docActive} >
						<i className="docSearch fa fa-search" aria-hidden="true"></i>
						<input
							className="docInput"
							type="text"
							maxLength={30}
							name="docName"
							placeholder="Enter drug name"
							onChange={this.handleDocInputChange.bind(this)} />
						<button className={"addDocCancel " + showCancel} onClick={this.handleYesNoClick.bind(this, "cancel")}>cancel</button>
					</div>
				</div>
			</div>
		);
	}
}