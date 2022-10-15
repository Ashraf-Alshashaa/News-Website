import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { ReadLaterProvider } from "./contexts/readLaterContext";
import { CategoriesProvider } from "./contexts/categoriesContext";
import SmallFooter from "./components/SmallFooter";

const App = () => {
  return (
    <ReadLaterProvider>
      <CategoriesProvider>
        <div className="App">
          <Header />
          <Outlet />
          {window.innerWidth > 820 ? (
            <footer>&copy;Ashraf Alshashaa </footer>
          ) : (
            <SmallFooter />
          )}
        </div>
      </CategoriesProvider>
    </ReadLaterProvider>
  );
};

export default App;
