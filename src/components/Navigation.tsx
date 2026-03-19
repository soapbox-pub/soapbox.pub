import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SoapboxLogo } from "@/components/SoapboxLogo";

const navLinks = [
  { label: "Ditto", to: "/ditto" },
  { label: "Shakespeare", to: "/shakespeare" },
  { label: "Agora", to: "/blog/agora-connecting-freedom-fighters" },
  { label: "About", to: "/about" },
  { label: "Ethics", to: "/ethics" },
  { label: "Updates", to: "/blog" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
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
          </div>
        </div>
      )}
    </nav>
  );
}
