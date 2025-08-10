// Home.jsx
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

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
                <div className="flex-1 flex">
                    <h2 className="text-2xl font-bold">The Digital Diner</h2>
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
                        </>

                    )}
                </div>
            </div>
        </>
    );
}

export default Home;
