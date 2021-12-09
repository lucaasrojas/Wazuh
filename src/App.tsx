import React from "react";
import "./App.css";
import Router from './Assets/Routes'
import { hot } from "react-hot-loader";

const App = () => {
	return (
		<div className="App">
			<Router />
		</div>
	);
};

export default hot(module)(App);
