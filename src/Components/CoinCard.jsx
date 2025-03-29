import {Link} from 'react-router-dom'
function CoinCard({key,img,url,name,symbol,currencySymbol}) {
  return (
    <div>
      <Link to= {`/coin/${key}`}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
      <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-300 hover:shadow-xl transition-shadow">
        <img
          src={img}
          alt={name}
          className="w-16 h-16 mx-auto mb-4 rounded-full object-cover"
        />
        <h3 className="text-lg font-semibold text-center">{name}</h3>
        <p className="text-sm text-gray-500 text-center"></p>
        <p className="text-sm text-gray-500 text-center">{price?`${currencySymbol}${price}`:"NA"}</p>
      
        <div className="mt-4 text-center"></div>
      </div>
      </Link>
    </div>
  );
}

export default CoinCard;
