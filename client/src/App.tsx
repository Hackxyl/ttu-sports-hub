import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import HomePage from "./pages/public/HomePage";
import SportsPage from "./pages/public/SportsPage";
import SportDetailsPage from "./pages/public/SportDetailsPage";
import FixturesPage from "./pages/public/FixturesPage";
import ResultsPage from "./pages/public/ResultsPage";
import AnnouncementsPage from "./pages/public/AnnouncementsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sports" element={<SportsPage />} />
        <Route path="/sports/:slug" element={<SportDetailsPage />} />
        <Route path="/fixtures" element={<FixturesPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route
          path="/announcements"
          element={<AnnouncementsPage />}
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;