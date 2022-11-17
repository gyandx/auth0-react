import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  if (!props.isLoggedIn) {
    return <Navigate to="/" replace />
  }

  return props.children;
}

export default ProtectedRoute;