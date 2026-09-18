import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import AcademicsPage from "./pages/AcademicsPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import PlacementsPage from "./pages/PlacementsPage";
import ContactPage from "./pages/ContactPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function App() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <ScrollToTop />

      <Navbar
        onAskAI={() => setChatOpen(true)}
      />

      <main>
        <Routes>

          <Route
            path="/"
            element={
              <Home
                onAskAI={() => setChatOpen(true)}
              />
            }
          />

          <Route
            path="/about"
            element={<AboutPage />}
          />

          <Route
            path="/academics"
            element={<AcademicsPage />}
          />

          <Route
            path="/admissions"
            element={<AdmissionsPage />}
          />

          <Route
            path="/placements"
            element={<PlacementsPage />}
          />

          <Route
            path="/contact"
            element={<ContactPage />}
          />

        </Routes>
      </main>

      <Chatbot
        open={chatOpen}
        setOpen={setChatOpen}
      />

      <Footer />
    </>
  );
}

export default App;