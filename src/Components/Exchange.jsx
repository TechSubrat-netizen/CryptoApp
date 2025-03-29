import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader";
// import Error from "./Error";

function Exchange() {
  const [exchange, setExchange] = useState([]); // State to store exchange data
  const [loading, setLoading] = useState(true); // State to manage loader visibility

  useEffect(() => {
    // Fetch data from the API
    axios("https://api.coingecko.com/api/v3/exchanges")
      .then((response) => {
        setExchange(response.data); // Set the exchange data in state
        console.log(response.data); // Log the data for debugging
        setLoading(false); // Set loading to false after data fetch
      })
      .catch((error) => {
        console.error("Error fetching exchange data:", error);
        setLoading(false); // Stop loading even if there’s an error
      });
  }, []);
  // if(error) {
  //   return <Error/>
  // }

  return (
    <div>
      {/* Show loader while data is loading */}
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {/* Render exchange data */}
          {exchange.map((e) => (
            <ExchangeCard
              key={e.id}
              name={e.name}
              rank={e.trust_score_rank}
              img={e.image}
              url={e.url}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Exchange;

function ExchangeCard({ name, img, rank, url }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-300 hover:shadow-xl transition-shadow">
      <img
        src={img}
        alt={name}
        className="w-16 h-16 mx-auto mb-4 rounded-full object-cover"
      />
      <h3 className="text-lg font-semibold text-center">{name}</h3>
      <p className="text-sm text-gray-500 text-center">Rank: {rank}</p>
      <div className="mt-4 text-center">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Visit Website
        </a>
      </div>
    </div>
  );
}