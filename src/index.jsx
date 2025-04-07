import ReactDOM from "react-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main"
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router'
import Booking from "./components/Booking";
import Signup from "./components/Signup";
import Login from "./components/Login"
import Online from "./components/Online"
import Dining from "./components/Dining";
import Map from "./components/Map";
import Download from "./components/Download";
import Collection from "./components/Collection";


//const paraElement = <p className="text-[blue]">Hello</p>
const Applayout = () =>{
    return(
        <>
            <Header/>
            <Outlet/>
            <Collection/>
            <Main/>
            <Footer/>
        </>
    )
}

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path:"/map",
        element:<Map/>,
    },
    {
        path: "/",
        element: <Applayout />,
        children: [
            {
                path: "/",
                element: <Booking />,
            },
            {
                path: "/online",
                element: <Online />,
            },
            {
                path: "/dining",
                element: <Dining/>,
            },
            {
                path:"/download",
                element:<Download/>,
            },
            {
                path:"/collection",
                element:<Collection/>,
            }
        ],
    },
]);



const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router}/>)