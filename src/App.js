import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import { ReadLaterProvider } from "./readLaterContext";

const App = () => {
  return (
    <ReadLaterProvider>
      <div className="App">
        <Header />
        <Outlet />
        <footer>&copy;Ashraf Alshashaa </footer>
      </div>
    </ReadLaterProvider>
  );
};

export default App;
