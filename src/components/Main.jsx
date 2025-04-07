

const Main = () => {
  return (
    <>
    <h1 className="font-semibold text-3xl text-start py-4 mx-20 text-roboto">Popular Localities In and Around Madurai</h1>
    <section>
        <div className="2xl:container mx-auto">
            <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  space-x-90">
                <div
                    className="bg1 bg-[#d1d2cd]  py-5 mr-4 rounded text-end pr-4 text-[400] text-xl text-poppins  mt-7 ml-4 ">
                    <h1>KK Nagar</h1>
                    <p>300 Places</p>
                </div>
                <div
                    className="bg1 bg-[#d1d2cd]  py-5 mr-4 rounded text-end pr-4  text-[400] text-xl text-poppins mt-7 ml-4">
                    <h1>Periyar</h1>
                    <p>202 Places</p>
                </div>
                <div
                    className="bg1 bg-[#d1d2cd]  py-5 mr-4 rounded text-end pr-4 text-[400] text-xl text-poppins mt-7 ml-4">
                    <h1>SS Colony</h1>
                    <p>166 Places</p>
                </div>
                <div
                    className="bg1 bg-[#d1d2cd]  py-5 mr-4 rounded text-end pr-4 text-[400] text-xl text-poppins mt-7 ml-4">
                    <h1>Iyer Bungalow</h1>
                    <p>158 Places</p>
                </div>
                <div
                    className="bg1 bg-[#d1d2cd]  py-5 mr-4 rounded text-end pr-4 text-[400] text-xl text-poppins mt-7 ml-4">
                    <h1>Sathamangalam</h1>
                    <p>134 Places</p>
                </div>
                <div
                    className="bg1 bg-[#d1d2cd]  py-5 mr-4 rounded text-end pr-4 text-[400] text-xl text-poppins mt-7 ml-4">
                    <h1>Arrapalayam</h1>
                    <p>154 Places</p>
                </div>
                <div
                    className="bg1 bg-[#d1d2cd]  py-5 mr-4 rounded text-end pr-4 text-[400] text-xl text-poppins mt-7 ml-4">
                    <h1>BB Kulam</h1>
                    <p>9 Places</p>
                </div>
                <div
                    className="bg1 bg-[#d1d2cd]  py-5 mr-4 rounded text-end pr-4 text-[400] text-xl text-poppins mt-7 ml-4">
                    <h1>Melur</h1>
                    <p>13 Places</p>
                </div>
                <div
                    className="bg1 bg-[#d1d2cd]  py-5 mr-4 rounded text-end pr-4 text-[400] text-xl text-poppins mt-7 ml-4">
                    <h1>Villapuram</h1>
                    <p>47 Places</p>
                </div>
            </div>
        </div>
    </section>
    
    <section className="p-5">
        <h1 className="font-semibold text-3xl text-start py-7 mx-20 text-roboto">Explore Options Near Me</h1>
        <div
            className="bg1 bg-[#d1d2cd] mr-80 ml-40 pl-7 rounded text-start text-[400] text-xl text-poppins flex flex-row gap-7">
            <select className="p-3 bg-[#d1d2cd] w-full">
                <option>
                    <h1>Popular Cuisines for me</h1>
                </option>
                <option>BBQ near me</option>
                <option>Bakery near me</option>
                <option>Beverages near me</option>
                <option>Biryani near me</option>
                <option>Chinese near me</option>
                <option>Desserts near me</option>
                <option>Ice Cream near me</option>
                <option>Juices near me</option>
                <option>Lebanese near me</option>
                <option>Momos near me</option>
                <option>North Indian near me</option>
                <option>Pizza near me</option>
                <option>Sandwich near me</option>
                <option>Seafood near me</option>
                <option>Shake near me</option>
                <option>Shawarma near me</option>
                <option>Sichuan near me</option>
                <option>South Indian near me</option>
                <option>Street near me</option>
            </select>
        </div>

        <div
            className="bg1 bg-[#d1d2cd] mr-80 ml-40 pl-7 mt-5 rounded text-start text-[400] text-xl text-poppins justify-between">
            <select className="p-3 bg-[#d1d2cd] w-full">
                <option>
                    <h1>Popular Restaurant Types Near Me</h1>
                </option>
                <option>Bars near me</option>
                <option>Bakery near me</option>
                <option>Beverages shops near me</option>
                <option>Bhojanalya near me</option>
                <option>Cafés near me</option>
                <option>Casual Dining near me</option>
                <option>Dessert Parlors near me</option>
                <option>Fine Dining near me</option>
                <option>Food Courts near me</option>
                <option>Food Trucks near me</option>
                <option>Kiosks near me</option>
                <option>Quick Bites near me</option>
                <option>Sweet Shops near me</option>

            </select>
        </div>

        <div
            className="bg1 bg-[#d1d2cd] mr-80 ml-40 pl-7 mt-5 rounded text-start text-[400] text-xl text-poppins justify-between">
            <select className="p-3 bg-[#d1d2cd]  w-full">
                <option>
                    <h1>Top Restaurant Chains</h1>
                </option>
                <option>KFC</option>

            </select>
        </div>
    </section>
    </>
  )
}

export default Main