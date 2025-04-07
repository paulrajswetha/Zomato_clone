

const Collection = () => {
  return (
   <>
    <section>
        <h1 className="font-semibold text-4xl text-start py-4 mx-20 text-poppins">Collections</h1>
        <p className=" text-xl text-start py-2 mx-20 text-poppins">Explore curated lists of top restaurants, cafes,
            pubs, and bars in Madurai, based on trends</p>
    </section>
    <section>
        <div className="2xl:container mx-auto">
            <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-x-90">
                <div className="container flex-col justify-center items-center rounded-xl m-8 mx-6 p-2">
                    <img src="https://ik.imagekit.io/npursfgai/Food%20Store%20Projects/em-grilled-seafood-img.png"
                        className="rounded"/>
                    <h1 className=" text-xl text-start py-2 text-poppins">Non Vegies !!!</h1>
                </div>
                <div className="container flex flex-col justify-center items-center rounded-xl m-8 p-2">
                    <img src="https://ik.imagekit.io/npursfgai/Food%20Store%20Projects/em-veg-starters-img.png"
                        className="rounded"/>
                    <h1 className=" text-xl text-start py-2 text-poppins">Paneer Tikka !!!</h1>
                </div>
                <div className="container flex flex-col justify-center items-center rounded-xl m-8 p-2">
                    <img src="https://ik.imagekit.io/npursfgai/Food%20Store%20Projects/em-hyderabadi-biryani-img.png"
                        className="rounded"/>
                    <h1 className=" text-xl text-start py-2 text-poppins">Biryani specials !!!</h1>
                </div>
                <div className="container flex flex-col justify-center items-center rounded-xl m-8 p-2">
                    <img src="https://ik.imagekit.io/npursfgai/Food%20Store%20Projects/em-coffee-bourbon-img.png"
                        className="rounded"/>
                    <h1 className=" text-xl text-start py-2 text-poppins">Ice Scoops !!!</h1>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}

export default Collection