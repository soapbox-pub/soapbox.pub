import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SoapboxLogo } from "@/components/SoapboxLogo";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isBlogActive = () => location.pathname === '/blog' || location.pathname.startsWith('/blog/');

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
            <Link
              to="/"
              className={`transition-colors ${
                isActive('/')
                  ? 'text-azure font-medium'
                  : 'text-gray-600 hover:text-azure'
              }`}
            >
              Home
            </Link>
            <Link
              to="/tools"
              className={`transition-colors ${
                isActive('/tools')
                  ? 'text-azure font-medium'
                  : 'text-gray-600 hover:text-azure'
              }`}
            >
              Tools
            </Link>
            <Link
              to="/communities"
              className={`transition-colors ${
                isActive('/communities')
                  ? 'text-azure font-medium'
                  : 'text-gray-600 hover:text-azure'
              }`}
            >
              Communities
            </Link>
            <Link
              to="/showcase"
              className={`transition-colors ${
                isActive('/showcase')
                  ? 'text-azure font-medium'
                  : 'text-gray-600 hover:text-azure'
              }`}
            >
              Showcase
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${
                isActive('/about')
                  ? 'text-azure font-medium'
                  : 'text-gray-600 hover:text-azure'
              }`}
            >
              About
            </Link>
            <Link
              to="/blog"
              className={`transition-colors ${
                isBlogActive()
                  ? 'text-azure font-medium'
                  : 'text-gray-600 hover:text-azure'
              }`}
            >
              Blog
            </Link>

            {/* Special Shakespeare Button */}
            <Button
              asChild
              className="bg-blue-100 hover:bg-blue-200 text-blue-700 border border-blue-200 hover:border-blue-300 transition-all duration-200"
              size="sm"
            >
              <Link to="/tools/shakespeare" className="flex items-center space-x-2">
                <span className="text-sm">🎭</span>
                <span>Shakespeare</span>
              </Link>
            </Button>
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/')
                    ? 'text-azure bg-azure-50'
                    : 'text-gray-600 hover:text-azure hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/tools"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/tools')
                    ? 'text-azure bg-azure-50'
                    : 'text-gray-600 hover:text-azure hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Tools
              </Link>
              <Link
                to="/communities"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/communities')
                    ? 'text-azure bg-azure-50'
                    : 'text-gray-600 hover:text-azure hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Communities
              </Link>
              <Link
                to="/showcase"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/showcase')
                    ? 'text-azure bg-azure-50'
                    : 'text-gray-600 hover:text-azure hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Showcase
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/about')
                    ? 'text-azure bg-azure-50'
                    : 'text-gray-600 hover:text-azure hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/blog"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isBlogActive()
                    ? 'text-azure bg-azure-50'
                    : 'text-gray-600 hover:text-azure hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>

              {/* Special Shakespeare Button for Mobile */}
              <div className="px-3 py-2">
                <Button
                  asChild
                  className="w-full bg-blue-100 hover:bg-blue-200 text-blue-700 border border-blue-200 hover:border-blue-300 transition-all duration-200"
                  size="sm"
                >
                  <Link
                    to="/tools/shakespeare"
                    className="flex items-center justify-center space-x-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-sm">🎭</span>
                    <span>Shakespeare</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}