import React, { useEffect } from 'react';

const Alert = ({ msg, type, removeAlert, list }) => {
	useEffect(
		() => {
			// Calls removeAlert() after 3 sec
			// removeAlert() will use the default values, meaning show: false  resulting in the alert not being displayed anymore
			const timeout = setTimeout(() => {
				removeAlert();
			}, 3000);
			return () => clearTimeout(timeout);
		},
		[ list ]
	);
	return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
