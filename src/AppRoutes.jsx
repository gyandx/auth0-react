import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Home from "./components/Home";
import Profile from "./components/Profile";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Routes>
      <Route path="/auth0-react" element={<Home />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute isLoggedIn={isAuthenticated}>
            <Profile />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
