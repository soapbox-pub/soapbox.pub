import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";

import Index from "./pages/Index";
import About from "./pages/About";
import GetInvolved from "./pages/GetInvolved";
import Tools from "./pages/Tools";
import Agora from "./pages/Agora";
// import Communities from "./pages/Communities";
import Showcase from "./pages/Showcase";
import Toybox from "./pages/Toybox";
import BlogIndex from "./pages/blog/BlogIndex";
import BlogPostPage from "./pages/blog/BlogPostPage";
import AuthorPage from "./pages/blog/AuthorPage";
import NotFound from "./pages/NotFound";
import CustomNipPage from "./pages/CustomNipPage";
import ShakespeareResources from "./pages/ShakespeareResources";
import ShakespeareCommunity from "./pages/ShakespeareCommunity";
import SoapboxSessions from "./pages/SoapboxSessions";
import HalloweenHackathon from "./pages/HalloweenHackathon";
import MediaKit from "./pages/MediaKit";
import SoftwareEthicsPledge from "./pages/SoftwareEthicsPledge";
import Transparency from "./pages/Transparency";
import TransparencyReport from "./pages/transparency/TransparencyReport";

// Tool pages
import Ditto from "./pages/tools/Ditto";
import Nostrify from "./pages/tools/Nostrify";
import Stacks from "./pages/tools/Stacks";
import MKStack from "./pages/tools/MKStack";
import Nostrbook from "./pages/tools/Nostrbook";
import NostrHub from "./pages/tools/NostrHub";
import Shakespeare from "./pages/tools/Shakespeare";

export function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/tools" element={<Tools />} />
        {/* Primary routes for promoted tools */}
        <Route path="/ditto" element={<Ditto />} />
        <Route path="/shakespeare" element={<Shakespeare />} />
        <Route path="/mkstack" element={<MKStack />} />
        {/* Other tool pages */}
        <Route path="/tools/nostrify" element={<Nostrify />} />
        <Route path="/tools/stacks" element={<Stacks />} />
        <Route path="/tools/nostrbook" element={<Nostrbook />} />
        <Route path="/tools/nostrhub" element={<NostrHub />} />
        {/* Backwards compatibility redirects */}
        <Route path="/tools/ditto" element={<Navigate to="/ditto" replace />} />
        <Route path="/tools/shakespeare" element={<Navigate to="/shakespeare" replace />} />
        <Route path="/tools/mkstack" element={<Navigate to="/mkstack" replace />} />
        {/* Agora landing page */}
        <Route path="/agora" element={<Agora />} />
        {/* <Route path="/communities" element={<Communities />} /> */}
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/toybox" element={<Toybox />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/author/:slug" element={<AuthorPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/nip/:naddr" element={<CustomNipPage />} />
        <Route path="/shakespeare-resources" element={<ShakespeareResources />} />
        <Route path="/shakespeare-community" element={<ShakespeareCommunity />} />
        {/* Redirect common variations to shakespeare-resources */}
        <Route path="/resource-center" element={<Navigate to="/shakespeare-resources" replace />} />
        <Route path="/resources" element={<Navigate to="/shakespeare-resources" replace />} />
        <Route path="/soapbox-sessions" element={<SoapboxSessions />} />
        <Route path="/halloween-hackathon" element={<HalloweenHackathon />} />
        <Route path="/media-kit" element={<MediaKit />} />
        <Route path="/ethics" element={<SoftwareEthicsPledge />} />
        <Route path="/transparency" element={<Transparency />} />
        <Route path="/transparency/:slug" element={<TransparencyReport />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;