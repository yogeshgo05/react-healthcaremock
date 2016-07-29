import React, {Component} from 'react';

import GrpTabs from './GrpTabs.jsx';

export default class Survey extends Component {
	constructor(){
		super();
		this.state = {
			step: 4
		}
	}

	setStep(step) {
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

	return (path[step]);
}

	render() {
		let step = this.state.step;
		let group = this.setStep(step).group;
		let tab = this.setStep(step).tab
		return(
			<div id="surveyWrap" className="tabbed-body">
				<GrpTabs step={step} group={group} tab={tab} />
			</div>
		)
	}
};