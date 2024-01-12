import React from "react";
import { Button } from "flowbite-react";
import { ConfirmProp } from "../types/confirm.type";

const Confirm: React.FC<ConfirmProp> = ({ confirm, deny, classes }) => {
	return (
		<div className={`${classes} flex flex-col gap-4`}>
			<div className="text-center">
				<h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
					Are you sure?
				</h3>
				<div className="flex justify-center gap-4">
					<Button color="failure" onClick={() => confirm(true)}>
						Yes, I'm sure
					</Button>
					<Button color="gray" onClick={() => deny(false)}>
						No, cancel
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Confirm;
