import React from "react";
import "./App.css";
import Router from './Assets/Routes'
import { hot } from "react-hot-loader";
import { ResponsiveWrapper } from "./Components";

const App = () => {
	return (
		<div className="App">
			<ResponsiveWrapper>
				<Router />
			</ResponsiveWrapper>
		</div>
	);
};

export default hot(module)(App);
