import React, {Component} from 'react';


export default class Conditions extends Component {
	constructor(){
		super();
		this.state = {
			conditions: [
				{name : "Diabetes", active: false},
			  {name : "Arthritis", active: false},
			  {name : "Depression", active: false},
			  {name : "ADHD", active: false},
			  {name : "High Cholesterol", active: false},
			  {name : "Asthma", active: false},
			  {name : "Heart Disease", active: false},
			  {name : "High blood pressure", active: false},
			  {name : "COPD", active: false}
			]
		}
	}

	handleNoneClick() {

	}

	toggleSelection(index) {
		let conds = this.state.conditions 
		conds[index].active = !conds[index].active;
		this.setState({conditions: conds});
	}

	render(){
	 let conds = this.state.conditions;
		return(
			<div>
				<div className={"doctorsWrap "}>
					<div className="title"><p>Do you have any of the following medical conditions?</p></div>
					<button className={"btnCodition "} onClick={this.handleNoneClick.bind(this)}>
						<span className="btnTXT">None<i className={"hide fa fa-check fa-lg"} aria-hidden="true"></i></span>
					</button>
					{conds.map((cond, index)=>{
						let show = (cond.active === true ? 'show ' : 'hide ');
						return(
						<button key={index} className={"btnCodition "} onClick={this.toggleSelection.bind(this, index)}>
							<span className="btnTXT">{cond.name}<i className={show + " fa fa-check fa-lg"} aria-hidden="true"></i></span>
						</button>	
					)})}
					<button className={"btnGo "} >
						Skip
						<i className="fa-fw fa fa-angle-right fa-lg" aria-hidden="true"></i>
					</button>
				</div>
			</div>
		)
	}
}