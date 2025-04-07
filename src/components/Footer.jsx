

const Footer = () => {
  return (
    <>
         <footer className="mt-12 bg-[#f8f8f8]">
            <div>
                <h1 className="text-roboto text-black text-5xl font-bold ml-6 p-5">ZOMATO</h1>
            </div>

            <div className="2xl:container mx-auto">
                <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 space-x-90">
                    <div className="p-2">
                        <h3 className="font-semibold text-xl pb-2">About Zomato</h3>
                        <h3>Who We Are</h3>
                        <h3>Blog</h3>
                        <h3>Work with us</h3>
                        <h3>Investor</h3>
                        <h3>Relations</h3>
                        <h3>Report Fraud</h3>
                        <h3>Contact us</h3>
                    </div>
                    <div className="p-2">
                        <h3 className="font-semibold text-xl pb-2">Zomaverse</h3>
                        <h3>Zomato</h3>
                        <h3>Blinkit</h3>
                        <h3>District</h3>
                        <h3>Feeding India</h3>
                        <h3>Hyper pure</h3>
                        <h3>Zomato Live</h3>
                        <h3>Weather Union</h3>
                    </div>
                    <div className="p-2">
                        <h3 className="font-semibold text-xl pd-2">For Restaurants</h3>
                        <h3>Partner With Us</h3>
                        <h3>Apps htmlFor You</h3>
                        <h3 className="font-semibold text-xl pd-2 pt-4">Social Links</h3>
                        <div className="flex space-x-5 py-2">
                            <a href="https://www.linkedin.com/company/zomato/?originalSubdomain=in" target="_blank">
                                <img src="https://ik.imagekit.io/npursfgai/Zomato/OIP.u2p6-g3wwhqpGuJfeNaVOAHaHa_w=500&h=500&rs=1&pid=ImgDetMain" className="w-8 h-8 " />
                            </a>

                            <a href="https://www.instagram.com/zomato/" target="_blank" >
                                <img src="https://ik.imagekit.io/npursfgai/Zomato/instagram-application-logo_23-2151544104.jpg_t=st=1733911886~exp=1733915486~hmac=fcab5d862fe7e20ef4d7a7a4b724a5bb0ef464121971362619c817ccf29c86e6&w=740" className="w-8 h-8 "/>
                            </a>

                            <a href="https://x.com/zomato" target="_blank" >
                                <img src="https://ik.imagekit.io/npursfgai/Zomato/instagram-vector-social-media-icon_459124-681.jpg_w=740" className="w-8 h-8 "/>
                            </a>
                        </div>
                    </div>
                    <div className="p-2">
                        <h3 className="font-semibold text-xl pb-2">Learn More
                        </h3>
                        <h3>Privacy</h3>
                        <h3>Security</h3>
                        <h3>Terms</h3>
                    </div>
                </div>
            </div>
    </footer>
    </>
  )
}

export default Footer