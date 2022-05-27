import React, { useState } from "react";
import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";
import DeleteUserAccount from "./DeleteUserAccount";
const EditAccount = () => {
	const [formData, setFormData] = useState({ email: "", password: "" });

	const { email, password } = formData;

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<div>
			<ChangeEmail handleChange={handleChange} email={email} />
			<ChangePassword handleChange={handleChange} password={password} />
			<DeleteUserAccount />
		</div>
	);
};

export default EditAccount;