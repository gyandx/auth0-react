import { useAuth0 } from "@auth0/auth0-react";

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

  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
}

export default App;
