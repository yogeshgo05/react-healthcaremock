import React, {Component} from 'react';

import Locat from '../partials/survey/Locat.jsx';
import Binfo from '../partials/survey/Binfo.jsx';
import Doctors from '../partials/survey/Doctors.jsx';
import Drugs from '../partials/survey/Drugs.jsx';
import Conditions from '../partials/survey/Conditions.jsx';
import Savings from '../partials/survey/Savings.jsx';



export default class GrpTabs extends Component {

	goStep(index){
		this.props.goStep(index);
	}

	render(){
		let step = this.props.step;
		let group = this.props.group;
		let tab = this.props.tab
		return(
				<Menu step={step} opened={group} selected={tab}>
					<Group label="Build health profile">
						<Tab label="Location" goStep={this.goStep.bind(this)}><Locat goStep={this.goStep.bind(this)} /></Tab>
						<Tab label="Basic information" goStep={this.goStep.bind(this)}><Binfo goStep={this.goStep.bind(this)} /></Tab>
						<Tab label="Doctors" goStep={this.goStep.bind(this)}><div><Doctors goStep={this.goStep.bind(this)} /></div></Tab>
						<Tab label="Drugs" goStep={this.goStep.bind(this)}><div><Drugs goStep={this.goStep.bind(this)} /></div></Tab>
						<Tab label="Conditions" goStep={this.goStep.bind(this)}><div><Conditions goStep={this.goStep.bind(this)} /></div></Tab>
						<Tab label="Savings" goStep={this.goStep.bind(this)}><div><Savings goStep={this.goStep.bind(this)} /></div></Tab>
					</Group>
					<Group label="Pick Health plan">
						<Tab label="Pick a plan" goStep={this.goStep.bind(this)}><div>1.1 - Pick a plan</div></Tab>
						<Tab label="Compare plans" goStep={this.goStep.bind(this)}><div>1.2 - Compare plans</div></Tab>
					</Group>
					<Group label="Fill out application" goStep={this.goStep.bind(this)}>
						<Tab label="Residential address" goStep={this.goStep.bind(this)}><div>2.1 - Residential address</div></Tab>
						<Tab label="Enrollment information" goStep={this.goStep.bind(this)}><div>2.2 - Enrollment information</div></Tab>
						<Tab label="Monthly payment" goStep={this.goStep.bind(this)}><div>2.3 - Monthly payment</div></Tab>
						<Tab label="Legal Stuff" goStep={this.goStep.bind(this)}><div>2.4 - Legal Stuff</div></Tab>
						<Tab label="E-signature" goStep={this.goStep.bind(this)}><div>2.5 - E-signature</div></Tab>
					</Group>
				</Menu>
			)
	}
}

const Menu = React.createClass({
	displayName: 'Menu',
	propTypes: {
		opened: React.PropTypes.number,
		selected: React.PropTypes.number,
		showPanel: React.PropTypes.bool,
		step: React.PropTypes.number,
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.element
		]).isRequired
	},
	getDefaultProps() {
		return {
			opened: 0,
			selected: 0,
			step: 0
		};
	},
	getInitialState() {
		return {
			opened: this.props.opened,
			selected: this.props.selected,
			step: this.props.step
		};
	},

	componentWillReceiveProps(nextProps) {
	    this.setState({
	    	opened: nextProps.opened,
				selected: nextProps.selected,
				step: nextProps.step
	    });  
	},

	grpClick(index, event) {
		event.preventDefault();
		if (index===this.state.opened) {
			this.setState({opened: 9999});
		}else{
			this.setState({
				opened: index
			});
		}
	},
	tabClick(index, child, event) {
		event.preventDefault();
		let step = this.props.step;
		//if (index!==this.state.selected) {
		if(index < step){
			//this.setState({selected: index});
			child.props.goStep(index);
		};
	},

	_renderMenu(step){
		function labels (child, index) {
			let openedClass = (this.state.opened === index ? 'open' : '');
			let GrpLabel = child.props.label;
			let GrpChildren = child.props.children;
			return(
				<li key={index} >
					<a href="#" className={"grpTab " + openedClass} onClick={this.grpClick.bind(this, index)}>
						{GrpLabel}
						<i className="arrow fa fa-angle-right fa-lg" aria-hidden="true"></i>
					</a>
					<div className={"tabs-wrap " + openedClass}>
						<ul>
							{GrpChildren.map((child,index)=>{
								let selectedClass = (this.state.selected === index ? 'active' : '');
								step += 1;
								return(
									<li key={index} >
										<a className={"tab " + selectedClass} onClick={this.tabClick.bind(this, step, child )}>
											{child.props.label}
										</a>
									</li>
							)})}
						</ul>
					</div>
				</li>
			)
		}
		return(
			<div className="menu">
				<ul className="menu-ul">
					{this.props.children.map(labels.bind(this))}
				</ul>
			</div>
		)
	},
	_renderContent() {
		if (this.state.selected===9999 || this.state.opened===9999) {
			return(<div></div>);
		}else{
	    return (
	      <div>
	        {this.props.children[this.state.opened].props.children[this.state.selected]}
	      </div>
	    );}
  },
	render(){
		let step = -1;
		return(
			<div className="tabbed-body">
				<div className="group-nav">{this._renderMenu(step)}</div>
				<div className="tab-content">{this._renderContent() }</div>
			</div>
		)
	}
});

const Group = React.createClass({
	displayName: 'Group',
	propTypes: {
		label: React.PropTypes.string.isRequired,
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.element
		]).isRequired
	},
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
});

const Tab = React.createClass({
	displayName: 'Tabs',
	propTypes: {
		selected: React.PropTypes.number,
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.element
		]).isRequired
	},
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
});