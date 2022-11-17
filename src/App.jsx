import { useAuth0 } from "@auth0/auth0-react";
import { Profiler } from "react";

import Header from "./components/Header";
import AppRoutes from "./AppRoutes";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="spinner-container">
        <div id="loading"></div>
      </div>
    );
  }

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
    <>
      <Profiler id="Header" onRender={callback}>
        <Header />
      </Profiler>
      <AppRoutes />
    </>
  );
}

export default App;
