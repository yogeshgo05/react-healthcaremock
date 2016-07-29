import React, {Component} from 'react';

import Locat from '../partials/survey/Locat.jsx';
import Binfo from '../partials/survey/Binfo.jsx';
import Doctors from '../partials/survey/Doctors.jsx';
import Drugs from '../partials/survey/Drugs.jsx';
import Conditions from '../partials/survey/Conditions.jsx';


export default class GrpTabs extends Component {
	render(){
		let step = this.props.step;
		let group = this.props.group;
		let tab = this.props.tab
		return(
				<Menu step={step} opened={group} selected={tab}>
					<Group label="Build health profile">
						<Tab label="Location"><Locat /></Tab>
						<Tab label="Basic information"><Binfo /></Tab>
						<Tab label="Doctors"><div><Doctors /></div></Tab>
						<Tab label="Drugs"><div><Drugs /></div></Tab>
						<Tab label="Conditions"><div><Conditions /></div></Tab>
						<Tab label="Savings"><div>0.6 - Savings</div></Tab>
					</Group>
					<Group label="Pick Health plan">
						<Tab label="Pick a plan"><div>1.1 - Pick a plan</div></Tab>
						<Tab label="Compare plans"><div>1.2 - Compare plans</div></Tab>
					</Group>
					<Group label="Fill out application">
						<Tab label="Residential address"><div>2.1 - Residential address</div></Tab>
						<Tab label="Enrollment information"><div>2.2 - Enrollment information</div></Tab>
						<Tab label="Monthly payment"><div>2.3 - Monthly payment</div></Tab>
						<Tab label="Legal Stuff"><div>2.4 - Legal Stuff</div></Tab>
						<Tab label="E-signature"><div>2.5 - E-signature</div></Tab>
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

	grpClick(index, event) {
		event.preventDefault();
		if (index===this.state.opened) {
			this.setState({
				opened: 9999
			});
		}else{
			this.setState({
				opened: index
			});
		}
	},
	tabClick(index, event) {
		event.preventDefault();
		let step = this.props.step;
		console.log(step);
		if (index!==this.state.selected) {
		//if(index < step){
			this.setState({selected: index})
		};
	},

	_renderMenu(){
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
								return(
									<li key={index} >
										<a className={"tab " + selectedClass} onClick={this.tabClick.bind(this, index)}>
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
		if (this.state.selected===9999) {
			return(<div></div>);
		}else{
	    return (
	      <div>
	        {this.props.children[this.state.opened].props.children[this.state.selected]}
	      </div>
	    );}
  },
	render(){
		return(
			<div className="tabbed-body">
				<div className="group-nav">{this._renderMenu()}</div>
				<div className="tab-content">{this._renderContent()}</div>
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