import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import Survey from './pages/Survey.jsx';

FlowRouter.route('/', {
	action(params, queryParams) {
		mount(MainLayout, {
			academy: "Cambridge",
			content: (<Survey />)
		})
	}
});
