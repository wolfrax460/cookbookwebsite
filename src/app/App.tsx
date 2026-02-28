import { BrowserRouter as Router, Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { RecipeListingPage } from "./pages/RecipeListingPage";
import { RecipeDetailPage } from "./pages/RecipeDetailPage";
import { UserProfilePage } from "./pages/UserProfilePage";
import { UploadRecipePage } from "./pages/UploadRecipePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<RecipeListingPage />} />
        <Route path="/recipe/:id" element={<RecipeDetailPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/upload" element={<UploadRecipePage />} />
      </Routes>
    </Router>
  );
}
