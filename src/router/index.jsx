import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Projects from "../pages/services/Projects";
import AboutMe from "../pages/services/AboutMe";
import Development from "../pages/services/Development";
import Products from "../pages/services/Products";

export default function Router() {
      return (
            <>
                  <BrowserRouter>
                        <Routes>
                              <Route path="/" element={<Welcome />} />
                        </Routes>

                        <Routes>
                              <Route path="/project" element={<Projects />} />
                        </Routes>

                        <Routes>
                              <Route path="/about" element={<AboutMe />} />
                        </Routes>

                        <Routes>
                              <Route path="/development" element={<Development />} />
                        </Routes>

                        <Routes>
                              <Route path="/product" element={<Products />} />
                        </Routes>
                  </BrowserRouter>
            </>
      )
}