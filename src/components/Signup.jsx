import {Link} from "react-router-dom"

const Signup = () => {
  return (
    <>
    <section className="bg4">
    <div className="bg-[white] h-70 w-55 ml-80 mr-80 pt-10 pb-20 p-2 rounded-xl">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-row justify-between">
                <h2 className="mt-8 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Create New Account</h2>
                <Link to="/"><img src="https://ik.imagekit.io/npursfgai/Zomato/clipart-cross-black-and-white-3.png?updatedAt=1733994704499" alt="crosssymbol" className="w-10 h-10" /></Link>
              </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="/" method="get">
                <div>
                  <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">Full Name</label>
                  <div className="mt-2">
                    <input type="text" name="name" id="name"  required className="block w-full rounded-md bg-white px-2 py-1.0 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email</label>
                  </div>
                  <div className="mt-2">
                    <input type="email" name="email" id="email" required className="block w-full rounded-md bg-white px-2 py-1.0 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                  </div>
                </div>
                <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
                      <div className="text-sm">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                      </div>
                    </div>
                    <div className="mt-2">
                      <input type="password" name="password" id="password"  required className="block w-full rounded-md bg-white px-2 py-1.0 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                    </div>
                  </div>
                <div>
                  <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-2 py-1.0 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
                </div>
              </form>
              <p className="mt-10 text-center text-sm/6 text-gray-500">
                Already have an Account?
                <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">Log in</Link>
              </p>
            </div>
          </div>

    </div>   
    </section>
    </>
  )
}

export default Signup