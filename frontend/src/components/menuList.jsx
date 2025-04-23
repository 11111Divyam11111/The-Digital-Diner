import React from "react";
import {useSelector,useDispatch} from 'react-redux';
import {addToCart} from '../store/cart'

const MenuList = ({ menu }) => {

    const carts = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    console.log(carts);

    const handleAddToCart = (item) => {
       dispatch(addToCart({
            productId : item._id,
            quantity : 1
       }))
        
    };

    return (
        <div className="flex flex-wrap gap-4 p-4 justify-center">
            {menu.map((data) => (
                <div
                    key={data._id}
                    className="w-72 bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
                >
                    <img
                        src={data.imageUrl}
                        alt={data.name}
                        className="h-48 w-full object-cover"
                    />
                    <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                            <h2 className="text-xl font-semibold mb-2">{data.name}</h2>
                            <p className="text-gray-600 text-sm mb-3">{data.description}</p>
                        </div>
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-lg font-bold">${data.price}</span>
                            <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full">
                                {data.category}
                            </span>
                        </div>
                        <button
                            onClick={() => handleAddToCart(data)}
                            className="hover:cursor-pointer w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MenuList;
