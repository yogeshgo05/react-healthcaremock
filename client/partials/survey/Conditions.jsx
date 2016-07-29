import React, {Component} from 'react';


export default class Conditions extends Component {
	constructor(){
		super();
		this.state = {
			conditions: [
				{name : "Diabetes", selected:false, active: false},
			  {name : "Arthritis", selected:false, active: false},
			  {name : "Depression", selected:false, active: false},
			  {name : "ADHD", selected:false, active: false},
			  {name : "High Cholesterol", selected:false, active: false},
			  {name : "Asthma", selected:false, active: false},
			  {name : "Heart Disease", selected:false, active: false},
			  {name : "High blood pressure", selected:false, active: false},
			  {name : "COPD", selected:false, active: false}
				],
			resumen: false,
			selection: 0,
			substep: 0,
			condCounter: 0,
			remove: -1
		}
	}

	resetActive(){
		let CpCond = this.state.conditions;
		let counter = 0;
		for (var i = CpCond.length - 1; i >= 0; i--) {
			if (CpCond[i].active === true) {
				CpCond[i].selected = CpCond[i].active;
			};
			if (CpCond[i].selected === true) {
				counter += 1;
			};
			CpCond[i].active = false;
		}
		this.setState({	conditions: CpCond,
										condCounter: counter});
	}

	goStep() {
		this.props.goStep();
	}

	nextsubStep(){
		this.setState({substep: 1});
	}

	handleNoneClick() {
		this.setState({substep: 1});
	}

	handleBtn(){
		if (this.state.selection === 0){
			this.setState({substep: 1});
		} else {
			this.setState({substep: 2});
		}
		this.resetActive();
	}

	addingBtn(){
		this.setState({substep: 2});
	}

	addCond(){
		this.setState({
			substep: 0,
			remove: -1
		});
	}

	toggleSelection(index) {
		let conds = this.state.conditions;
		let counter = this.state.selection; 
		if (conds[index].active === false) {
			counter = counter + 1;
		} else {
			counter = counter - 1;
		}
		conds[index].active = !conds[index].active;
		this.setState({	conditions: conds,
										selection	: counter
									});
	}

	showRemove(index){
		this.setState({remove: index});
	}

	removeCondition(index){
		let conds = this.state.conditions;
		conds[index].selected = false
		this.setState({	consitions: conds,
										remove : -1});

	}

	render(){
		let start = (this.state.substep === 0 ? 'show' : 'hide');
		let smoke = (this.state.substep === 1 ? 'show' : 'hide');
		let confirm = (this.state.substep === 2 ? 'show' : 'hide');
		let conds = this.state.conditions;
		let BtnTxt = this.state.selection != 0 ? 'Next' : 'Skip'
		let noneShow = this.state.condCounter != 0 ? 'hide' : 'show'

		return(
			<div>
				<div ref="start" className={"doctorsWrap " + start}>
					<div className="title"><p>Do you have any of the following medical conditions?</p></div>
					<button className={"btnCodition " + noneShow} onClick={this.handleNoneClick.bind(this)}>
						<span className="btnTXT">None<i className={"hide fa fa-check fa-lg"} aria-hidden="true"></i></span>
					</button>
					{conds.map((cond, index)=>{
						let display = (cond.selected === true ? 'hide ' : 'show ');
						let show = (cond.active === true ? 'show ' : 'hide ');
						return(
						<button key={index} className={"btnCodition " + display} onClick={this.toggleSelection.bind(this, index)}>
							<span className="btnTXT">{cond.name}<i className={show + " fa fa-check fa-lg"} aria-hidden="true"></i></span>
						</button>	
						)})}
					<button className={"btnGo "} onClick={this.handleBtn.bind(this)} >
						{BtnTxt}
						<i className="fa-fw fa fa-angle-right fa-lg" aria-hidden="true"></i>
					</button>
				</div>
				<div ref="smoke" className={"doctorsWrap " + smoke}>
					<div className="title"><p>Do you smoke cigarettes or use other tobacco products?</p></div>
					<button className={"btnYesNo "} onClick={this.goStep.bind(this)}>Yes</button>
					<button className={"btnYesNo "} onClick={this.goStep.bind(this)}>No</button>
				</div>
				<div ref="confirm" className={"doctorsWrap " + confirm}>
					<div className="title"><p>My conditions</p></div>
					{conds.map((cond, index)=>{
					let display = (cond.selected === true ? 'show ' : 'hide ');
					let showRemove = (this.state.remove === index ? 'show ' : 'hide ');
					let hideCross = (this.state.remove === index ? 'hide ' : 'show ');
					return(
						<div className={"confirmCard " + display}>
							<div>
								<p className="condTitle" >{cond.name}</p>	
								<p className="condMe" > Me </p>
							</div>
							<div className="condRemoveWrap">
								<p className={"condCross " + hideCross } onClick={this.showRemove.bind(this, index)}>{'\u00D7'}</p>
								<p className={"condRemove " + showRemove} onClick={this.removeCondition.bind(this, index)}> remove?</p>
							</div>
						</div>
					)})}
					<a className="condAdd" onClick={this.addCond.bind(this)}>+ Add a condition</a>
					<button className={"btnGo "} onClick={this.nextsubStep.bind(this)} >
						Next
						<i className="fa-fw fa fa-angle-right fa-lg" aria-hidden="true"></i>
					</button>
				</div>
			</div>
		)
	}
}