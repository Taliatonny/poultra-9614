import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { siteConfig } from "@/config";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold text-green-600">POULTRA</div>
            <p className="text-sm text-gray-600">
              Your smart partner in poultry farming.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-600 hover:text-green-600"
                >
                  About Poultra
                </Link>
              </li>
              <li>
                <Link
                  to="/learn"
                  className="text-sm text-gray-600 hover:text-green-600"
                >
                  Learn
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-gray-600 hover:text-green-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products"
                  className="text-sm text-gray-600 hover:text-green-600"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=birds"
                  className="text-sm text-gray-600 hover:text-green-600"
                >
                  Birds
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=equipment"
                  className="text-sm text-gray-600 hover:text-green-600"
                >
                  Equipment
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=vaccines"
                  className="text-sm text-gray-600 hover:text-green-600"
                >
                  Vaccines
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="h-4 w-4" />
                <span>{siteConfig.contact.email}</span>
              </div>
              <div className="flex space-x-4 mt-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link
              to="/privacy"
              className="text-sm text-gray-600 hover:text-green-600"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-gray-600 hover:text-green-600"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
