import React, { Component } from "react";
import Index from "./Pages/Index";
import CompanyInfo from "./Pages/CompanyInfo";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Index />} />
					<Route path="/company-info" element={<CompanyInfo />} />
					<Route path="/privacy-policy" element={<PrivacyPolicy />} />
				</Routes>
			</BrowserRouter>
		);
	}
}

export default App;
