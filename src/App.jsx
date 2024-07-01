import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Recipes from "./pages/Recipes";
import Categories from "./pages/Categories";
import Welcome from "./pages/Welcome";
import "./App.css";
import Favourites from "./pages/Favourites";
import NewRecipe from "./pages/NewRecipe";

const router = createBrowserRouter([
  {path: '/', element: <Welcome />},,
  {path: '/recipes', element: <Recipes />},
  {path: '/categories', element: <Categories />},
  {path: '/favourites', element:<Favourites />},
  {path: '/recipies/new', element: <NewRecipe />}
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
