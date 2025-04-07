import {Link} from "react-router-dom"
const Booking = () => {
  return (
    <>
    <h1 className="font-semibold text-4xl text-start py-4 mx-20 my-10 text-roboto">Booking Fashion:</h1>
    <section className="my-7">
        <div className="2xl:container mx-auto">
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 space-x-90">
                <div className="bg3 flex flex-col justify-center items-center rounded-xl m-2 mx-6 p-2 bg-[#d1d2cd]">
                    <Link to="/online">
                        <img src="https://ik.imagekit.io/npursfgai/Zomato/Oxrxpqa6SyOaHCeBWDed_slow_cooker_landscape.jpg"
                        className="rounded" />
                    <h1 className="text-[black] font-semibold text-2xl text-start py-2">Order Online</h1>
                    <p className="text-[black] font-semibold text-xl py-2">Stay Home and Order to your Doorstep.</p>
                    </Link>
                </div>
                <div className="bg3 flex flex-col justify-center items-center rounded-xl m-2 p-2 bg-[#d1d2cd]">
                    <Link to="/dining">
                        <img src="https://ik.imagekit.io/npursfgai/Zomato/dining1_Ajjr3Johh" className="rounded"/>
                        <h1 className="text-[black] font-semibold text-2xl text-start py-2">Dining</h1>
                        <p className="text-[black] font-semibold text-xl  py-2">View the Citys Favourite Dining Menus.</p>
                    </Link>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Booking