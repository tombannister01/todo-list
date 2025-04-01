import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { TodoList } from "./pages/TodoList";

const router = createBrowserRouter([
  { path: "/", element: <Home />},
  { path: "/Todo-list", element: <TodoList />}
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
