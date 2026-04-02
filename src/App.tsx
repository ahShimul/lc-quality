import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/ContactPage";
import { ServicesListPage } from "./pages/ServicesListPage";
import { ServicePage } from "./pages/services/ServicePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ProcessPage } from "./pages/ProcessPage";
import { ReviewsPage } from "./pages/ReviewsPage";
import { AreasPage } from "./pages/AreasPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesListPage />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/areas" element={<AreasPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
