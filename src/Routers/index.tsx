import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Suspense } from 'react';

import Counter from "../Features/Counter/Counter"
import Example from '../Features/Example/Example';

const Routers = () => {
	return (
		<Router>
			<Suspense fallback={<h1>Loading ...</h1>}>
				<Example/>
				<Counter />
			</Suspense>
		</Router>
	);
};
export default Routers;
