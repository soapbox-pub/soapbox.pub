import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SoapboxLogo } from "@/components/SoapboxLogo";
import { SearchDropdown } from "@/components/SearchDropdown";

const navLinks = [
  { label: "Ditto", to: "/ditto" },
  { label: "Shakespeare", to: "/shakespeare" },
  { label: "Agora", to: "/agora" },
  { label: "Toolbox", to: "/toolbox" },
  { label: "Toybox", to: "/toybox" },
  { label: "Updates", to: "/blog" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const searchRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);
  const desktopInputRef = useRef<HTMLInputElement>(null);

  const openSearch = () => {
    setIsOpen(false);
    setSearchOpen(true);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  // Global Cmd/Ctrl+K shortcut to toggle search.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen((open) => !open);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Focus the desktop input whenever search opens.
  useEffect(() => {
    if (searchOpen) {
      desktopInputRef.current?.focus();
    } else {
      setSearchQuery("");
    }
  }, [searchOpen]);

  // Close the dropdown when clicking outside the search area.
  useEffect(() => {
    if (!searchOpen) return;
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      const insideDesktop = searchRef.current?.contains(target);
      const insideMobile = mobileSearchRef.current?.contains(target);
      if (!insideDesktop && !insideMobile) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [searchOpen]);

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = searchQuery.trim();
    if (!trimmed) return;
    setSearchOpen(false);
    navigate(`/search?q=${encodeURIComponent(trimmed)}`);
  };

  const isActive = (path: string) => {
    if (path === "/blog") {
      return location.pathname === "/blog" || location.pathname.startsWith("/blog/");
    }
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <SoapboxLogo size={32} />
            <span className="font-display font-bold text-xl text-gray-900">Soapbox</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-colors ${
                  isActive(link.to)
                    ? 'text-azure font-medium'
                    : 'text-gray-600 hover:text-azure'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Desktop search (expands inline, results drop down from nav) */}
            <div ref={searchRef} className="relative">
              <form
                onSubmit={onSearchSubmit}
                className={`flex items-center rounded-md border bg-white/60 text-gray-500 transition-all duration-200 ${
                  searchOpen
                    ? 'w-64 border-azure px-3'
                    : 'w-9 border-gray-200 hover:border-azure hover:text-azure'
                }`}
              >
                <button
                  type="button"
                  onClick={() => (searchOpen ? closeSearch() : setSearchOpen(true))}
                  aria-label="Search"
                  className={`flex h-9 shrink-0 items-center justify-center ${
                    searchOpen ? 'pr-2' : 'w-9'
                  }`}
                >
                  <Search className="h-4 w-4" />
                </button>
                {searchOpen && (
                  <input
                    ref={desktopInputRef}
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-9 w-full min-w-0 bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
                  />
                )}
              </form>

              {/* Results dropdown anchored under the input */}
              {searchOpen && (
                <div className="absolute right-0 top-full mt-2 w-96 max-w-[calc(100vw-2rem)] rounded-lg border bg-white shadow-lg">
                  <SearchDropdown query={searchQuery} onClose={closeSearch} />
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => (searchOpen ? closeSearch() : openSearch())}
              aria-label="Search"
              className="p-2"
            >
              <Search className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

      </div>

      {/* Mobile search dropdown -- hangs from the nav, full width */}
      {searchOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full z-50" ref={mobileSearchRef}>
          <div className="bg-white border-t shadow-lg">
            <form onSubmit={onSearchSubmit} className="flex items-center gap-2 border-b px-4 py-3">
              <Search className="h-5 w-5 shrink-0 text-gray-400" />
              <input
                autoFocus
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-8 w-full bg-transparent text-base text-gray-700 outline-none placeholder:text-gray-400"
              />
              <button type="button" onClick={closeSearch} aria-label="Close search">
                <X className="h-5 w-5 text-gray-400" />
              </button>
            </form>
            <SearchDropdown query={searchQuery} onClose={closeSearch} />
          </div>
        </div>
      )}

      {/* Mobile Navigation -- overlays content */}
      {isOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full z-50">
          <div className="px-4 pt-2 pb-3 space-y-1 bg-white border-t shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(link.to)
                    ? 'text-azure bg-azure-50'
                    : 'text-gray-600 hover:text-azure hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={openSearch}
              className="flex w-full items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-600 transition-colors hover:text-azure hover:bg-gray-50"
            >
              <Search className="h-5 w-5" />
              Search
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
