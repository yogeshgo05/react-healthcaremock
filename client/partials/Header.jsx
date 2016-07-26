import React, {Component} from 'react';

import Contact from './Contact.jsx';
import Logo from './Logo.jsx';

export default class Header extends Component {

	render() {
		return (
			<div className="header-info">
				<Logo />
				<Contact />
			</div>
		);
	}
};
