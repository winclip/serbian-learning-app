import { Outlet } from "react-router-dom";
import AppHeader from "./components/AppHeader";

const App = () => (
  <>
    <AppHeader />
    <main>
      <Outlet />
    </main>
  </>
);

export default App;
