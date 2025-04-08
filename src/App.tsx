import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Loader from "./components/Loader";
import Home from "./pages/Home";

const TodoList = lazy(() => import("./pages/TodoList"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/todo-list",
    element: (
      <Suspense fallback={<Loader />}>
        <TodoList />
      </Suspense>
    ),
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
