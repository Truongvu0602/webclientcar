import React from "react";
import { Car, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
              <Car className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">
              Fortuner Vietnam
            </h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-red-600">
              Trang chủ
            </Link>
            <Link to="/models" className="text-gray-700 hover:text-red-600">
              Dòng xe
            </Link>
            <Link to="/news" className="text-gray-700 hover:text-red-600">
              Tin tức
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-red-600">
              Liên hệ
            </Link>
            <Link to="/auth" className="text-gray-700 hover:text-red-600">
              Đăng nhập
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link to="/" className="block text-gray-700 hover:text-red-600">
              Trang chủ
            </Link>
            <Link
              to="/models"
              className="block text-gray-700 hover:text-red-600"
            >
              Dòng xe
            </Link>
            <Link to="/news" className="block text-gray-700 hover:text-red-600">
              Tin tức
            </Link>

            <Link
              to="/contact"
              className="block text-gray-700 hover:text-red-600"
            >
              Liên hệ
            </Link>
            <Link to="/auth" className="block text-gray-700 hover:text-red-600">
              Đăng nhập
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
