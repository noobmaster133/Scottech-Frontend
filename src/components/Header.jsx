import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">
        {/* Logo + Title */}
        <Link to="/" className="flex items-center gap-4">
          {/* Logo Image */}
          <img
            src="/images/scottech-logo.png" // place your logo here
            alt="Scottech Logo"
            className="w-20 h-20 object-contain"
          />

          {/* Company Name */}
          <div className="leading-tight">
            <h1 className="text-3xl font-bold text-blue-700">
              SCOTTECH <span className="text-orange-600">LIMITED</span>
            </h1>
            <p className="text-sm text-gray-600 italic">
              ...when performance matters.
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-blue-900 font-medium">
          <Link to="/" className="hover:text-orange-600">
            Home
          </Link>
          <Link to="/products" className="hover:text-orange-600">
            Products
          </Link>
          <Link to="/about" className="hover:text-orange-600">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-orange-600">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
