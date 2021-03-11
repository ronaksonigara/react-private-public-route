import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const propTypes = {
	component: PropTypes.func.isRequired,
	redirect: PropTypes.string,
	restricted: PropTypes.bool,
};

const defaultProps = {
	restricted: false,
	redirect: "/",
};

const PublicRoute = ({
	component: Component,
	redirect: pathname,
	restricted,
	...rest
}) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				restricted ? <Redirect to={{ pathname }} /> : <Component {...props} />
			}
		/>
	);
};

PublicRoute.propTypes = propTypes;
PublicRoute.defaultProps = defaultProps;

export default PublicRoute;
