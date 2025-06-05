import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";

import Index from "./pages/Index";
import Tools from "./pages/Tools";
import Showcase from "./pages/Showcase";
import BlogIndex from "./pages/blog/BlogIndex";
import BlogPostPage from "./pages/blog/BlogPostPage";
import NotFound from "./pages/NotFound";

// Tool pages
import Ditto from "./pages/tools/Ditto";
import Nostrify from "./pages/tools/Nostrify";
import Stacks from "./pages/tools/Stacks";
import MKStack from "./pages/tools/MKStack";
import Nostrbook from "./pages/tools/Nostrbook";
import NostrHub from "./pages/tools/NostrHub";

export function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/tools/ditto" element={<Ditto />} />
        <Route path="/tools/nostrify" element={<Nostrify />} />
        <Route path="/tools/stacks" element={<Stacks />} />
        <Route path="/tools/mk-stack" element={<MKStack />} />
        <Route path="/tools/nostrbook" element={<Nostrbook />} />
        <Route path="/tools/nostrhub" element={<NostrHub />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;