import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center text-white bg-gray-900"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('./assets/Crypto.jpg')" }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl p-6">
        <motion.h1 
          className="text-6xl font-extrabold text-teal-400 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          CryptoTracker
        </motion.h1>
        <p className="text-lg text-gray-300 mt-4">
          Stay updated with real-time crypto prices, market trends, and insights.
        </p>

        {/* Crypto Stats - Animated */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { name: "Bitcoin", value: "$42,000", change: "+2.4%" },
            { name: "Ethereum", value: "$3,200", change: "-1.1%" },
            { name: "BNB", value: "$480", change: "+0.9%" },
            { name: "Solana", value: "$140", change: "-0.5%" },
          ].map((crypto, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-20 p-6 rounded-xl shadow-lg backdrop-blur-md"
              whileHover={{ scale: 1.1 }}
            >
              <h3 className="text-xl font-semibold">{crypto.name}</h3>
              <p className="text-lg">{crypto.value}</p>
              <span
                className={`text-sm font-bold ${
                  crypto.change.includes("+") ? "text-green-400" : "text-red-400"
                }`}
              >
                {crypto.change}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Explore Button */}
        <motion.button
          className="mt-8 px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-bold rounded-lg shadow-lg transition-all"
          whileHover={{ scale: 1.1 }}
        >
          <Link to="/coindetails">Explore Now</Link>
        </motion.button>
      </div>
    </div>
  );
}

export default Home;
