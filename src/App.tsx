import React from "react";
import "./App.css";
import Router from './Assets/Routes'
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

export default App;
