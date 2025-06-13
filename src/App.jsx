import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import BlogList from "./components/BlogList";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import BlogPost from "./pages/BlogPost";
import PostCreator from "./pages/PostCreator";
import "./App.css";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      {
        path: "/posts",
        element: <BlogList />,
      },
      {
        path: "/posts/:id",
        element: <BlogPost />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/posts/create",
        element: <PostCreator />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
