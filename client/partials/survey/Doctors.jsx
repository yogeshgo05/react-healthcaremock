import React, {Component} from 'react';


export default class Locat extends Component {
	constructor(){
		super();
		this.state = {
			substep: 0,
			errormsg: false,
			docactive: false,
			mockCard: "hide"
		}
	}

	goStep() {
		this.props.goStep();
	}

	cardClick(){
		this.handleYesNoClick("no");
	}

	handleYesNoClick(expression){
		switch(expression) {
	    case "yes":
	        this.setState({substep: 1});
	        break;
	    case "no":
	        this.setState({substep: 2});
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
		return(
			<div>
				<div className={"doctorsWrap " + start}>
					<div className="title"><p>Is there a doctor that you would like covered by your new plan?</p></div>
					<button className={"btnYesNo "} onClick={this.handleYesNoClick.bind(this, "yes")}>Yes</button>
					<button className={"btnYesNo "} onClick={this.handleYesNoClick.bind(this, "no")}>No</button>
				</div>
				<div className={"doctorsWrap " + yes}>
					<div className={"docInputWrap " + docActive} >
						<i className="docSearch fa fa-search" aria-hidden="true"></i>
						<input
							className="docInput"
							type="text"
							maxLength={30}
							name="docName"
							placeholder="Add your doctor"
							onChange={this.handleDocInputChange.bind(this)} />
						<button className={"addDocCancel "} onClick={this.handleYesNoClick.bind(this, "cancel")}>cancel</button>
					</div>
					<div className={"adrInputWrap " + "active"} >
						<i className="docMapPin fa fa-map-marker fa-lg" aria-hidden="true"></i>
						<input
							className="docInput"
							type="text"
							maxLength={30}
							name="docName"
							placeholder="Add your doctor" 
							value="San Francisco, CA 94121"/>
					</div>
					<div className={errormsg}>
						<h3>Unfortunately, we are not mind readers!</h3>
						<p>We need a few more letters to complete your search.</p>
					</div>
					<div className={"mockCard " + this.state.mockCard}>
						<div className="cardDist">
							5.6mi<i className="docMapPin fa-fw fa fa-map-marker" aria-hidden="true"></i>
						</div>
						<div className="cardDocData" onClick={this.cardClick.bind(this)}>
							<span className="cardName">Juan Gonzalez Velez</span>
							<span className="cardSpeciality">Emergency Medicine</span>
							<span className="cardAdr">505 Parnassus Ave</span>
							<span className="cardCity">San Francisco, CA 94143</span>
						</div>
						<div className="angleRight">
							<i className="fa-fw fa fa-angle-right fa-2x" aria-hidden="true"></i>
						</div>
					</div>
					<div className={"mockCard " + this.state.mockCard}>
						<div className="cardDist">
							2.4mi<i className="docMapPin fa-fw fa fa-map-marker" aria-hidden="true"></i>
						</div>
						<div className="cardDocData" onClick={this.cardClick.bind(this)}>
							<span className="cardName">Juan Zorrilla</span>
							<span className="cardSpeciality">Obstetrics & Gynecology</span>
							<span className="cardAdr">1825 4th St</span>
							<span className="cardCity">San Francisco, CA 94158</span>
						</div>
						<div className="angleRight">
							<i className="fa-fw fa fa-angle-right fa-2x" aria-hidden="true"></i>
						</div>
					</div>
				</div>
				<div className={"doctorsWrap " + no}>
					<div className="title"><p>Next up, let's estimate your medical expenses in a typical year</p></div>
					<p className="text" >To help you make a smart choice, we are going to ask
					 a few questions about your medical history and needs.
					  This information will never affect the price you pay
					   for insurance and your answers are protected by our personal <span><a href="#" >privacy policy</a></span>.</p>
					<button className={"btnGo "} onClick={this.goStep.bind(this)} >
						Let's go
						<i className="fa-fw fa fa-angle-right fa-lg" aria-hidden="true"></i>
					</button>
				</div>
			</div>
		);
	}
}