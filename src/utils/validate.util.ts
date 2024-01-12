const isEmpty = (content: unknown) => {
	if (typeof content === "string") {
		return content.length < 1;
	}
	return false;
};

const isValidEmail = (email: unknown) => {
	if (typeof email === "string") {
		return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
			email
		);
	}
	return false;
};

export { isEmpty, isValidEmail };
