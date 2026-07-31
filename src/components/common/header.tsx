import { NavLink } from "react-router";
import logoImage from "@/assets/images/logo.png";

export function Header() {
  return (
  <header className="absolute top-0 left-0 w-full bg-gradient-to-b from-black/95 via-black/60 to-transparent pb-16 pt-2 border-none z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center">
              <img 
                src={logoImage} 
                alt="Logo" 
                className="h-16 w-auto object-contain drop-shadow-md"
              />
            </NavLink>
          </div>

          <nav className="flex items-center space-x-6 sm:space-x-8">
            <NavLink to="/" className="text-sm font-semibold text-white text-gray-900 hover:text-gray-300 transition-colors drop-shadow-sm">
              Home
            </NavLink>
            <NavLink to="/about" className="text-sm font-semibold text-white text-gray-900 hover:text-gray-300 transition-colors drop-shadow-sm">
              About
            </NavLink>

            <NavLink to="/contact" className="text-sm font-semibold text-white hover:text-gray-300 transition-colors drop-shadow-md">
            Contact
            </NavLink>
          </nav>

        </div>
      </div>
    </header>
  );
}