import React, {Component} from 'react';

import GrpTabs from './GrpTabs.jsx';

export default class Survey extends Component {
	constructor(){
		super();
		this.state = {
			step: 0
		}
	}

	setStep(index) {
		let path = [
			{group: 0, tab: 0},
			{group: 0, tab: 1},
			{group: 0, tab: 2},
			{group: 0, tab: 3},
			{group: 0, tab: 4},
			{group: 0, tab: 5},
			{group: 1, tab: 0},
			{group: 1, tab: 1},
			{group: 2, tab: 0},
			{group: 2, tab: 1},
			{group: 2, tab: 2},
			{group: 2, tab: 3},
			{group: 2, tab: 4},
		]

		return (path[index]);
	}

	goStep(step){
		console.log("step", step);
		if (step === undefined){
			this.setState({step: this.state.step + 1 });
		} else {
			this.setState({step: step});
		}
	}


	render() {
		let index = this.state.step;
		let group = this.setStep(index).group;
		let tab = this.setStep(index).tab;
		return(
			<div id="surveyWrap" className="tabbed-body">
				<GrpTabs step={index} group={group} tab={tab} goStep={this.goStep.bind(this)} />
			</div>
		)
	}
};