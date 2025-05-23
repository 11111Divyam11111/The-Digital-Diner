// Home.jsx
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import MenuItems from "./menu";
import { useSelector } from "react-redux";


function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
    const [totalQuantity , setTotal] = useState(0);

    const cart = useSelector(store => store.cart.items);
    useEffect(()=>{
        let total = 0;
        cart.forEach(element => {
            total += element.quantity;
        });
        setTotal(total);
    },[cart]);

    function logout(e) {
        e.preventDefault();
        localStorage.removeItem("token");
        setIsLoggedIn(false); // Update state to re-render UI
    }

    useEffect(() => {
        setIsLoggedIn(!!localStorage.getItem("token"));
    }, []);

    return (
        <>
            <div className="flex justify-between items-center px-6 py-4 bg-gray-100">
                <div className="flex-1 flex justify-center">
                    <h1 className="text-3xl font-bold text-gray-800">The Digital Diner</h1>
                </div>
                <div className="flex gap-4">
                    {!isLoggedIn && (
                        <>
                            <Link to='/signup'>
                                <button className="hover:cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">
                                    Signup
                                </button>
                            </Link>
                            <Link to='/login'>
                                <button className="hover:cursor-pointer px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition duration-200">
                                    Login
                                </button>
                            </Link>
                        </>
                    )}
                    {isLoggedIn && (
                        <>
                        <button onClick={logout} className="hover:cursor-pointer px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition duration-200">
                            Logout
                        </button>
                        <button className="hover:cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">
                            Cart({totalQuantity})
                        </button>
                        </>

                    )}
                </div>
            </div>
            <div className="m-3">
                 <MenuItems/>
            </div>
        </>
    );
}

export default Home;
