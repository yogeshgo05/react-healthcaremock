import React, {Component} from 'react';

export default class BuildHealthProfile extends Component {

	render() {
		let panes = [	{label: "Build health profile", faIcon: "fa-angle-right", panel:"<div>This is my tab 1 contents!</div>"},
									{label: "Test", faIcon: "fa-angle-right", panel:"<div>This is my tab 1 contents!</div>"},
									{label: "User", faIcon: "fa-angle-right", panel:"<div>This is my tab 1 contents!</div>"}
								]

		return(
				<Tabs label="Build health profile" faIcon="fa-angle-right">
					<Pane label="Location" faIcon="fa-angle-right">
            <div>This is my tab 1 contents!</div>
          </Pane>
          <Pane label="Tests" faIcon="fa-angle-right">
            <div>This is my tab 2 contents!</div>>
          </Pane>
          <Pane label="Users" faIcon="fa-angle-right">
            <div>This is my tab 3 contents!</div>
          </Pane>
				</Tabs>
		)
	}
}
const Tabs = React.createClass({
  displayName: 'Tabs',
  propTypes: {
    selected: React.PropTypes.number,
    children: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.element
    ]).isRequired
  },
  getDefaultProps() {
    return {
      selected: false
    };
  },
  getInitialState() {
    return {
      selected: this.props.selected
    };
  },
  handleClick(index, event) {
    event.preventDefault();
    if (index===this.state.selected) {
      this.setState({selected: false});
    }else{
      this.setState({selected: index});
    }
  },
  _renderTitles() {
    function labels(child, index) {
      let activeClass = (this.state.selected === index ? 'active' : '');
      return (
        <li key={index} >
          <a href="#" className={activeClass} onClick={this.handleClick.bind(this, index)} >
            {child.props.label}
            <div className="ItemIcon">
              <i className={"fa " + child.props.faIcon + " fa-lg"}></i>
            </div>
          </a>
        </li>
      );
    }
    return (
    	<div className="admin-menu">
      	<ul className="my-ul">
        	{this.props.children.map(labels.bind(this))}
      	</ul>
      </div>
    );
  },
  _renderContent() {
    return (
      <div>
        {this.props.children[this.state.selected]}
      </div>
    );
  },
  render() {
    return (
      <div className="admin-body">
      	<div className="admin-nav">{this._renderTitles()}</div>
      	<div className="admin-content">{this._renderContent()}</div>
      </div>
    );
  }
});

const Pane = React.createClass({
  displayName: 'Pane',
  propTypes: {
    label: React.PropTypes.string.isRequired,
    children: React.PropTypes.element.isRequired
  },
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});
