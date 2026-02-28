import { Search, User, ChefHat } from "lucide-react";
import { Link, useLocation } from "react-router";
import { Button } from "./ui/button";

interface HeaderProps {
  onSearch?: (query: string) => void;
  isLoggedIn?: boolean;
  currentUser?: { name: string; id: number };
}

export function Header({ onSearch, isLoggedIn = true, currentUser }: HeaderProps) {
  const location = useLocation();

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <ChefHat className="w-8 h-8 text-orange-500" />
            <span className="text-xl font-semibold">Cookbook</span>
          </Link>

          {/* Search Bar - Only show on certain pages */}
          {(location.pathname === "/" || location.pathname === "/recipes") && (
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for recipes..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  onChange={(e) => onSearch?.(e.target.value)}
                />
              </div>
            </div>
          )}

          {/* Navigation */}
          <nav className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost">Home</Button>
            </Link>
            <Link to="/recipes">
              <Button variant="ghost">Recipes</Button>
            </Link>
            {isLoggedIn ? (
              <>
                <Link to="/upload">
                  <Button variant="default" className="bg-orange-500 hover:bg-orange-600">
                    Upload Recipe
                  </Button>
                </Link>
                <Link to="/profile">
                  <Button variant="ghost" size="icon">
                    <User className="w-5 h-5" />
                  </Button>
                </Link>
              </>
            ) : (
              <Button variant="default" className="bg-orange-500 hover:bg-orange-600">
                Login / Sign Up
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
