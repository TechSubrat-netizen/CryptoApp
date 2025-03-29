
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CoinDetails() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr")
      .then((response) => response.json())
      .then((data) => setCoins(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center text-teal-400 mb-6">Crypto Dashboard</h1>
      
      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search Coin..."
          className="p-2 text-black rounded-md"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Coins Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {coins
          .filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()))
          .map((coin) => (
            <motion.div
              key={coin.id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
            >
              <img src={coin.image} alt={coin.name} className="w-16 h-16 mx-auto mb-2" />
              <h2 className="text-lg font-bold">{coin.name}</h2>
              <p className="text-gray-400">₹{coin.current_price.toLocaleString()}</p>
              <p className={coin.price_change_percentage_24h > 0 ? "text-green-400" : "text-red-400"}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </p>
            </motion.div>
          ))}
      </div>
    </div>
  );
}

export default CoinDetails;
