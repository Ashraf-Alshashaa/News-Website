import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { ReadLaterProvider } from "./contexts/readLaterContext";
import { CategoriesProvider } from "./contexts/categoriesContext";

const App = () => {
  return (
    <ReadLaterProvider>
      <CategoriesProvider>
        <div className="App">
          <Header />
          <Outlet />
          <footer>&copy;Ashraf Alshashaa </footer>
        </div>
      </CategoriesProvider>
    </ReadLaterProvider>
  );
};

export default App;
