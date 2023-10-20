import { useContext } from "react";
import { AuthContext } from "./Providers/AuthProviders";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner text-warning loading-lg"></span>
      </div>
    );

  if (user) return children;

  return <Navigate to="/SignIn" />;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoutes;
