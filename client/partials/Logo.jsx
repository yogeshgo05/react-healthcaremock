import React, {Component} from 'react';

export default class Logo extends Component {
	render() {
		let myLogo = "./logos/" + "Stride_large.png"
		return (
					<img className="logo" alt=" LOGO " src={myLogo} width="85" height="32" />
		)
	}
}