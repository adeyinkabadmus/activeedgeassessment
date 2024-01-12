import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout: React.FC = () => {
	return (
		<div id="Layout" className="container mx-auto">
			<div>
				<Navbar />
			</div>
			<div className="w-6/6">
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
