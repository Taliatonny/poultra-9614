import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Navigation() {
  const location = useLocation();
  const [cartCount] = useState(0);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-green-600">POULTRA</div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive("/")
                  ? "text-green-600"
                  : "text-gray-600 hover:text-green-600"
              }`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`text-sm font-medium transition-colors ${
                isActive("/products")
                  ? "text-green-600"
                  : "text-gray-600 hover:text-green-600"
              }`}
            >
              Products
            </Link>
            <Link
              to="/learn"
              className={`text-sm font-medium transition-colors ${
                isActive("/learn")
                  ? "text-green-600"
                  : "text-gray-600 hover:text-green-600"
              }`}
            >
              Learn
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "text-green-600"
                  : "text-gray-600 hover:text-green-600"
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive("/contact")
                  ? "text-green-600"
                  : "text-gray-600 hover:text-green-600"
              }`}
            >
              Contact
            </Link>
          </div>

          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5 text-gray-600" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
