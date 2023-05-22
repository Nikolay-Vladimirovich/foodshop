import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "@hooks/useAuth";

const RequireAuth = ({ children }) => {
	const location = useLocation();
	const { user } = useAuth();

	if (!user) {
		return <Navigate to="/auth" state={{ from: location }} />;
	}

	return children;
};

const RequireExited = ({ children }) => {
	const location = useLocation();
	const { user } = useAuth();

	if (user) {
		return <Navigate to="/" state={{ from: location }} />;
	}

	return children;
};

export { RequireAuth, RequireExited };
