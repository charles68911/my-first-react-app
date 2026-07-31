import { NavLink } from "react-router";

export function Footer() {
  return (
    <footer className="bg-[#3F2A96] border-t border-[#5A3FC0]-0 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white text-center sm:text-left">
            © {new Date().getFullYear()} MyApp. All rights reserved.
          </p>

          <nav className="flex items-center space-x-6">
            <NavLink to="/" className="text-sm text-white hover:text-gray-300 transition-colors">Home</NavLink>
            <NavLink to="/about" className="text-sm text-white hover:text-gray-300 transition-colors">About</NavLink>
            <NavLink to="/contact" className="text-sm text-white hover:text-gray-300 transition-colors">Contact</NavLink>
          </nav>
        </div>
      </div>
    </footer>
  );
}