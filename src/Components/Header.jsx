import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="header">
        <div className=" flex justify-between bg-black text-white p-4">
             <button>
                <Link to='/'>Home</Link>
             </button>
             <button>
                <Link to='/coins'>Coin</Link>
             </button>
             <button>
                <Link to='/coinExange'>
                  Coin Exchange
                </Link>
             </button>


        </div>

    </div>
  )
}

export default Header