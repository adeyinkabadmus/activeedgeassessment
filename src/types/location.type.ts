export type GeoLocation = {
	lat: string;
	long: string;
};

export type Address = {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: GeoLocation;
};
