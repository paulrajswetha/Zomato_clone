import {Link} from "react-router-dom"

const Header = () => {
  return (
    <>
      <div className="bg">
        <nav>
            <div className="grid grid-cols-1">
                <div className="flex flex-row justify-end my-6 mx-9 text-xl font-semibold text-[white] text-poppins">
                    <p className="un px-2"><Link to="/download">Get the App</Link></p>
                    <p className="un px-2"><Link to="/map">Tracking Locations</Link></p>
                    <p className="un px-2" ><Link to="/login">Login</Link></p>
                    <p className="un px-2"><Link to="/signup">Sign Up</Link></p>
                </div>
            </div>
        </nav>
        <div>
            <h1 className="text-[white] text-8xl font-bold text-center shadow-lg">ZOMATO</h1>
            <p className="text-[white] text-4xl font-semibold text-center py-4">Discover the best foods and drinks.</p>
            <div className="flex flex-row justify-center gap-2 my-3 py-3">
                <select className="rounded">
                    <option className="px-2">Madurai</option>
                    <option className="px-2">Coimbatore</option>
                    <option className="px-2">Chennai</option>
                </select>
                <nav>
                    <a href="https://www.zomato.com/madurai"><input placeholder="Madurai"className="px-9 w-[90] rounded" /></a>
                </nav>
            </div>
        </div>
        </div>
    </>
  );
};

export default Header