import { Profiler } from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Home from "./components/Home";
import Profile from "./components/Profile";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  const { isAuthenticated } = useAuth0();
  const callback = (
    id,
    phase,
    actualDuration,
    startTime,
    baseDuration,
    commitTime,
    interactions
  ) => {
    console.log(
      "id " +
        id +
        " startTime " +
        startTime +
        " actualDuration " +
        actualDuration +
        " baseDuration " +
        baseDuration +
        " commitTime " +
        commitTime +
        " phase " +
        phase +
        " interactions " +
        interactions
    );
  };

  return (
    <Routes>
      <Route path="/" element={
      <Profiler id="Home" onRender={callback}>
        <Home />
      </Profiler>
      } />
      <Route path="/profile" element={
        <ProtectedRoute isLoggedIn={isAuthenticated}>
          <Profiler id="Home" onRender={callback}>
            <Profile />
          </Profiler>
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default AppRoutes;