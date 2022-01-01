import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Users, Tasks, Layout, UserDetail } from "../Components";

const routes = () => {

	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/users/:id" element={<UserDetail />} />
					<Route path="/users" element={<Users />} />
					<Route path="/tasks" element={<Tasks />} />
					<Route path="/" element={<Tasks />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default routes;
