namespace Users {
	type RegisterUserRes = {
		id: number;
		email: string;
		username: string;
		password: string;
	};
	type RegisterUserReq = {
		email: string;
		username: string;
		password: string;
	};
}
