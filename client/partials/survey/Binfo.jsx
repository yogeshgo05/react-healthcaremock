import React, {Component} from 'react';


export default class Binfo extends Component {
	constructor() {
		super();
		this.state = {
			zipOk: false,
			zipWarning: true,
			gender: "male"
		}
	}

	goStep() {
		if (this.state.zipOk === true) {
			this.props.goStep();
		}
	}

	handleInputChange(event){
		let iValue = event.target.value;
		let pattern = /[0-9]/g;
    let result = iValue.match(pattern);
    console.log(result)
    if (iValue > 17 && iValue < 65){
    	this.setState({
    		zipOk: true,
    		gender: "male",
    		zipWarning: false
    	});
    } else {
    	this.setState({zipOk: false, zipWarning: true});
    }
	}

	changeGender(gender){
		this.setState({gender: gender});
	}

	render(){
		let zipIsOk = (this.state.zipOk === true ? 'zipIsOk ' : '');
		let zipWarning = (this.state.zipWarning === true ? 'warning ' :'');
		let chkmale = (this.state.gender === "male" ? 'checked' : '');
		let chkfemale = (this.state.gender === "female" ? 'checked' : '');
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
							<div className="cadrBody-radio" onClick={this.changeGender.bind(this, "male")}>
								<input className="cardRbtn" type="radio" id="male" name="gender" value="male" checked={chkmale} />
								<label for="male">Male</label>
							</div>
							<div className="cadrBody-radio" onClick={this.changeGender.bind(this, "female")}>
							  <input className="cardRbtn" type="radio" id="female" name="gender" value="female" checked={chkfemale} />
							  <label for="female">Female</label>
							</div>
						  </div>
						  <div className="ageSection">
							  Age:
								<input
								className={zipWarning}
								id="ageInput"
								type="text"
								maxLength={2}
								pattern="[0-9]"
								name="zipcode"
								placeholder="Enter Age"
								onChange={this.handleInputChange.bind(this)}/>
							</div>
						</form>
					</div>
				</div>
				<div className={"cardWrap close "} >
					<div className={"cardHead close"}>
						<span className="fa-stack close ">
							<i className="fa fa-circle fa-stack-2x"></i>
							<i className="fa fa-plus fa-stack-1x fa-inverse"></i>
						</span>
						<p>Add spouse</p>
					</div>
				</div>
				<div className={"cardWrap close "} >
					<div className={"cardHead close"}>
						<span className="fa-stack close ">
							<i className="fa fa-circle fa-stack-2x"></i>
							<i className="fa fa-plus fa-stack-1x fa-inverse"></i>
						</span>
						<p>Add a dependent</p>
					</div>
				</div>
				<button className={"btnNext " + zipIsOk} onClick={this.goStep.bind(this)}>
					Find insurance for myself
					<i className="fa-fw fa fa-angle-right fa-lg" aria-hidden="true"></i>
				</button>
			</div>
		)
	}
}