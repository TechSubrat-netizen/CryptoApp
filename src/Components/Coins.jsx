import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";

function Coins() {
  const [coins, setCoins] = useState([]); // State to store coin data
  const [loading, setLoading] = useState(true); // State to manage loader visibility
  const[page,setPage]=useState(1)
  const[currency,setCurrency]=useState()

  useEffect(() => {
    // Fetch data from the API
    axios("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr")
      .then((response) => {
        console.log(response.data); // Log the fetched data
        setCoins(response.data); // Update state with the coin data
        setLoading(false); // Stop loader after data fetch
      })
      .catch((error) => {
        console.error("Error fetching coin data:", error);
        setLoading(false); // Stop loader even if there’s an error
      });
  }, []); // Empty dependency array to run effect only once

  return (
    <div className="container mx-auto p-4">
      {/* Show loader while data is loading */}
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Render coins */}
          {coins.map((coin) => (
            <div
              key={coin.id}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <img
                src={coin.image}
                alt={coin.name}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-center">{coin.name}</h3>
              <p className="text-center text-gray-500">
                Price: ₹{coin.current_price}
              </p>
              <p className="text-center text-sm text-gray-400">
                Market Cap Rank: {coin.market_cap_rank}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Coins;
