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
					<Route exact path="/horizon-hills" element={<Index />} />
					<Route path="/horizon-hills/company-info" element={<CompanyInfo />} />
					<Route path="/horizon-hills/privacy-policy" element={<PrivacyPolicy />} />
				</Routes>
			</BrowserRouter>
		);
	}
}

export default App;
