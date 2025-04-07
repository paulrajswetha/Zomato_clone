

const Map = () => {
  return (
    <>
    <section className="bg-[white]">
    
    <div><img src="https://ik.imagekit.io/npursfgai/Zomato/food.jpg?updatedAt=1737023040976" alt="Map image" className="bg-opacity-80 w-full" useMap="#workmap"/></div>
    
    <map name="workmap">
  <area shape="circle" coords="398,154,78" alt="Food" href="/"/>
  <area shape="circle" coords="316,421,90" alt="Online" href="/online"/>
  <area shape="circle" coords="797,401,67" alt="Dining" href="/dining"/>
  <area shape="circle" coords="1153,333,92" alt="Collections" href="/collection"/>
  
    </map>
    <h1 className="text-[black] text-4xl font-bold text-center shadow-lg pt-10 pb-10">Wherever you are, your meal is not far!</h1>
    <div className="flex">
    <video src="https://ik.imagekit.io/npursfgai/Zomato/zomato.mp4?updatedAt=1737023673440" controls autoPlay height={600} width={600}></video>
     <p className="text-[black] font-semibold text-xl  py-4 px-3">At Zomato, we know that life comes with its fair share of challenges—99 problems, to be exact. But when hunger strikes, we have got the ultimate solution! From mouth-watering pizzas to soul-soothing biryanis, our menu is crafted to tackle every craving. Whether you are juggling a hectic workday, battling a late-night food emergency, or just looking to indulge in something delicious, we deliver satisfaction right to your doorstep. Say goodbye to the hassle of cooking and hello to a world of flavors with just a tap. Zomato: one solution for all your hunger woes!!</p>
    </div>
    
    </section>
    </>
  )
}

export default Map