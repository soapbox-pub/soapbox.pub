import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Search, Wrench, Gamepad2, Newspaper, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SoapboxLogo } from "@/components/SoapboxLogo";
import { SearchDropdown } from "@/components/SearchDropdown";

/** Nav links: internal paths ("/ditto") or external URLs ("https://…"). */
interface NavItem {
  label: string;
  to: string;
  logo?: string;
  icon?: LucideIcon;
}

const navLinks: NavItem[] = [
  { label: "Ditto", to: "/ditto", logo: "/ditto-logo-transparent.png" },
  { label: "Agora", to: "/agora", logo: "/assets/media-kit/logos/agora-logo.svg" },
  { label: "Armada", to: "/armada", logo: "/assets/media-kit/logos/armada-logo.svg" },
  { label: "Shakespeare", to: "/shakespeare", logo: "/assets/logos/shakespeare-logo.png" },
  { label: "Mostr", to: "https://mostr.pub", logo: "/assets/toolbox/mostr-icon.svg" },
  { label: "Toolbox", to: "/toolbox", icon: Wrench },
  { label: "Toybox", to: "/toybox", icon: Gamepad2 },
  { label: "Updates", to: "/blog", icon: Newspaper },
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
  const navRef = useRef<HTMLElement>(null);

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
        setIsOpen(false);
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

  // Close the menu when clicking anywhere outside the nav.
  useEffect(() => {
    if (!isOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [isOpen]);

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

  /** Renders every nav link (internal or external) with the given row classes. */
  const renderNavLinks = (baseClass: string) =>
    navLinks.map((link) => {
      const Icon = link.icon;
      const external = link.to.startsWith("http");
      const className = `${baseClass} transition-colors ${
        !external && isActive(link.to)
          ? 'text-azure bg-azure-50'
          : 'text-gray-600 hover:text-azure hover:bg-gray-50'
      }`;
      const content = (
        <>
          {link.logo && (
            <img src={link.logo} alt="" className="h-5 w-5 object-contain" />
          )}
          {Icon && <Icon className="h-5 w-5" />}
          {link.label}
        </>
      );
      if (external) {
        return (
          <a
            key={link.label}
            href={link.to}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
            onClick={() => setIsOpen(false)}
          >
            {content}
          </a>
        );
      }
      return (
        <Link
          key={link.label}
          to={link.to}
          className={className}
          onClick={() => setIsOpen(false)}
        >
          {content}
        </Link>
      );
    });

  return (
    <nav ref={navRef} className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <SoapboxLogo size={32} />
            <span className="font-display font-bold text-xl text-gray-900">Soapbox</span>
          </Link>

          {/* Search + hamburger menu (used at every screen size) */}
          <div className="flex items-center gap-1">
            {/* Inline expanding search on larger screens */}
            <div ref={searchRef} className="relative hidden sm:block">
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

            {/* Mobile search button (opens the full-width dropdown below) */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => (searchOpen ? closeSearch() : openSearch())}
              aria-label="Search"
              className="p-2 sm:hidden"
            >
              <Search className="h-6 w-6" />
            </Button>

            {/* Hamburger */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
              className="p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Menu dropdown on larger screens: anchored under the hamburger, not full-width */}
          {isOpen && (
            <div className="hidden sm:block absolute right-0 top-full mt-2 w-56 rounded-lg border bg-white shadow-lg py-2 divide-y divide-gray-100">
              {renderNavLinks("flex items-center gap-2.5 px-4 py-2 text-sm font-medium")}
            </div>
          )}
        </div>

      </div>

      {/* Mobile search dropdown -- hangs from the nav, full width */}
      {searchOpen && (
        <div className="sm:hidden absolute left-0 right-0 top-full z-50" ref={mobileSearchRef}>
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

      {/* Mobile menu -- full-width overlay on small screens */}
      {isOpen && (
        <div className="sm:hidden absolute left-0 right-0 top-full z-50">
          <div className="px-4 pt-2 pb-3 space-y-1 bg-white border-t shadow-lg">
            {renderNavLinks("flex items-center gap-2.5 px-3 py-2 rounded-md text-base font-medium")}
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
