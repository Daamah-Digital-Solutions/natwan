import { createBrowserRouter } from "react-router";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Sectors from "./pages/Sectors";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Branches from "./pages/Branches";
import Branch from "./pages/Branch";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import AtheerLanding from "./pages/AtheerLanding";

export const router = createBrowserRouter([
  // Standalone Snapchat campaign landing page (no site header/footer).
  { path: "/atheer", element: <AtheerLanding /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "sectors", element: <Sectors /> },
      { path: "projects", element: <Projects /> },
      { path: "gallery", element: <Gallery /> },
      { path: "branches", element: <Branches /> },
      { path: "branches/:slug", element: <Branch /> },
      { path: "faq", element: <Faq /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
