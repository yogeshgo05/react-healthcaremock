import React, {Component} from 'react';

export default class Contact extends Component {
	render() {
		return (
				<ul className="contact-ul">
					<li className="contact-item"><i className="fa fa-phone fa-fw" aria-hidden="true"></i> Call us: 415-930-XXXX</li>	
					<li className="contact-item"><i className="fa fa-lock fa-fw" aria-hidden="true"></i> Finish later</li>	
				</ul>
		)
	}
}
