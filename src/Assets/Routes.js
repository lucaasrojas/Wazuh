import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Users, Tasks, Layout, UserDetail } from "../Components";

const routes = () => {

	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route path="/users/:id" component={UserDetail} />
					<Route path="/users" component={Users} />
					<Route path="/tasks" component={Tasks} />
					<Route path="/" component={Tasks} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
};

export default routes;
