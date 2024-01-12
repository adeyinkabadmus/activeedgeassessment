import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout: React.FC = () => {
	return (
		<div id="Layout">
			<div>
				<Navbar />
			</div>
			<div className="w-6/6">
				<Outlet />
			</div>
			{/* <div className="flex mt-10 layout-body">
        <div className="w-1/6 text-center">
          <SideMenu />
        </div>
        <div className="w-4/6">
          <Outlet />
        </div>
        <div className="w-1/6 text-center">
          <div>System utility
            <DiskUsageStatus />
          </div>
          <div>Network stuffs
            <NetworkInterface />
          </div>
          <div>Recently viewed</div>
        </div>
      </div> */}
		</div>
	);
};

export default Layout;
