import { useEffect, useState, type FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, BookOpen, Home, Search } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSEO } from "@/hooks/useSEO";

const destinations = [
  {
    name: "Ditto",
    description: "Social media with your own themes",
    to: "/ditto",
    icon: "/ditto-logo-transparent.png",
  },
  {
    name: "Shakespeare",
    description: "Build Nostr apps by chatting with AI",
    to: "/shakespeare",
    icon: "/assets/logos/shakespeare-logo.png",
  },
  {
    name: "Agora",
    description: "Fundraise without borders",
    to: "/agora",
    icon: "/assets/media-kit/logos/agora-logo.svg",
  },
  {
    name: "Armada",
    description: "Encrypted community chat",
    to: "/armada",
    icon: "/assets/media-kit/logos/armada-logo.svg",
  },
];

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  useSEO({
    title: "Page Not Found - Soapbox",
    description: "The page you're looking for doesn't exist. Search the site or head back to the Soapbox home page.",
  });

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    navigate(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
  };

  return (
    <Layout>
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-wider text-azure mb-4">
              Error 404
            </p>
            <h1 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-6">
              We couldn't find that page
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              The link may be broken, or the page may have moved. Try searching for it,
              or head somewhere below.
            </p>

            <form onSubmit={handleSearch} className="flex gap-2 max-w-md mx-auto lg:mx-0 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search soapbox.pub"
                  aria-label="Search soapbox.pub"
                  className="pl-9 bg-white"
                />
              </div>
              <Button type="submit" className="bg-azure hover:bg-azure-600 text-white">
                Search
              </Button>
            </form>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Button variant="outline" asChild>
                <Link to="/">
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/blog">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Blog
                </Link>
              </Button>
            </div>
          </div>

          {/* Echoes the browser window on the home page, pointed at the missing URL. */}
          <div className="rounded-xl border border-gray-200 shadow-2xl overflow-hidden bg-white" aria-hidden="true">
            <div className="flex items-center gap-3 px-4 py-3 bg-gray-100 border-b border-gray-200">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
              </div>
              <div className="flex-1 min-w-0 px-3 py-1 rounded-md bg-white border border-gray-200 text-xs text-gray-400 font-mono truncate">
                soapbox.pub{location.pathname}
              </div>
            </div>
            <div className="aspect-[10/7] flex flex-col items-center justify-center bg-gradient-to-br from-azure-50 via-white to-gray-50 px-6">
              <span className="text-8xl md:text-9xl font-bold font-display text-azure leading-none tracking-tight">
                404
              </span>
              <span className="mt-4 text-gray-500">Nothing to see here</span>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-6 text-center lg:text-left">
            Popular pages
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {destinations.map((d) => (
              <Link
                key={d.to}
                to={d.to}
                className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-azure/40 hover:shadow-md"
              >
                <img src={d.icon} alt="" className="w-10 h-10 object-contain flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-gray-900 flex items-center gap-1">
                    {d.name}
                    <ArrowRight className="h-3.5 w-3.5 text-azure opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </div>
                  <div className="text-sm text-gray-500">{d.description}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
