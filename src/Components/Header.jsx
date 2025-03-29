import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-teal-400">CryptoTracker</h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          {[
            { name: "Home", path: "/" },
            { name: "Coins", path: "/coins" },
            { name: "Coin Exchange", path: "/coinExchange" },
          ].map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="text-lg font-medium hover:text-teal-300 transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
