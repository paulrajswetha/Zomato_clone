

const Download = () => {
  return (
    <>
    <section className="my-6" >
        <div className="2xl:container mx-auto">
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2  space-x-90">
                <div>
                    <img src="https://ik.imagekit.io/npursfgai/Zomato/ce5bc038a8a2d4f8f24465c8826182af1726501431.png"
                        alt="app image"/>
                </div>
                <div className="my-10 p-8 text-2xl">
                    <h1 className="font-semibold text-4xl text-start py-4 mx-20 text-poppins">Get the Zomato app</h1>
                    <h5 className="text-2xl text-start py-4 mx-15 text-poppins">We will send you a link, open it on your
                        phone to download the app</h5>
                    <form action="https://www.zomato.com/" method="get">
                        <table>
                            <tr>
                                <td className="text-xl text-start py-4 mx-15 text-poppins"><label >Email:</label>
                                </td>
                                <td className="text-xl text-start py-4 mx-19 px-3 text-poppins"><input type="email"
                                        placeholder="Enter your email" required /></td>
                            </tr>
                            <tr>
                                <td className="text-xl text-start py-4 mx-15 text-poppins"><label>Phone
                                        no:</label></td>
                                <td className="text-xl text-start py-4 mx-19 px-3 text-poppins"><input type="text"
                                        placeholder="Enter your number" required /></td>
                            </tr>
                            <tr>
                                <td className="text-xl text-start py-4 mx-19 px-3 "><button type="submit"
                                        className="text-xl bg-[black] text-white text-center py-4 px-3 p-2  mx-15 text-poppins rounded-3xl">Submit</button>
                                </td>
                                <td className="text-xl text-start py-4 mx-19 px-3 text-poppins"><a href="tel:8015103637">Call Us!!</a></td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Download