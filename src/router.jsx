import { createBrowserRouter } from "react-router";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Sectors from "./pages/Sectors";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "sectors", element: <Sectors /> },
      { path: "projects", element: <Projects /> },
      { path: "gallery", element: <Gallery /> },
      { path: "faq", element: <Faq /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
