import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import GrpTabs from './pages/GrpTabs.jsx';
FlowRouter.route('/', {
	action(params, queryParams) {
		mount(MainLayout, {
			academy: "Cambridge",
			content: (<GrpTabs />)
		})
	}
});
