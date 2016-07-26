import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import FormPage from './pages/FormPage.jsx';
FlowRouter.route('/', {
	action(params, queryParams) {
		mount(MainLayout, {
			academy: "Cambridge",
			content: (<FormPage />)
		})
	}
});
