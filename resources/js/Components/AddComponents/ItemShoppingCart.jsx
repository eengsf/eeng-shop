import { router } from "@inertiajs/react";
import { useState } from "react";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const ItemShoppingCart = ({ orders, viewcart }) => {
    const handleDelete = (id) => {
        router.delete(route("user.destroy", id));
    };

    return orders.map((order, key) => {
        const [quantity, setQuantity] = useState(order.quantity);
        const handleQuantity = (action, id) => {
            let newQuantity = quantity;
            if (action === "plus") {
                newQuantity = quantity + 1;
            } else if (action === "minus") {
                if (quantity > 1) {
                    newQuantity = quantity - 1;
                }
            }
            setQuantity(newQuantity);
            const data = {
                qnt: newQuantity,
            };
            if (viewcart === "user") {
                router.put(route("user.update", id), data);
            } else {
                router.put(route("welcome.update", id), data);
            }
        };
        let totalPrice = order.product.price * quantity;
        return (
            <div key={key} className="flex gap-5 border-b-2 border-black py-3">
                <figure className="w-1/12">
                    <img
                        src={`images/${order.product.image}`}
                        alt="gambar"
                        className="w-full h-full object-contain "
                    />
                </figure>
                <div className="flex flex-col gap-2 w-11/12">
                    <div>
                        <h1>{order.product.name}</h1>
                        <h1>$ {totalPrice.toFixed(2)}</h1>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1">
                            <button
                                onClick={() =>
                                    handleQuantity("minus", order.id)
                                }
                            >
                                <FaCircleMinus size={16} />
                            </button>
                            <input
                                type="text"
                                disabled
                                placeholder={quantity}
                                className="appearance-none w-16 h-7 rounded-md text-center"
                            />
                            <button
                                onClick={() => handleQuantity("plus", order.id)}
                            >
                                <FaCirclePlus size={16} />
                            </button>
                        </div>
                        <div className="flex items-center">
                            <button onClick={() => handleDelete(order.id)}>
                                <MdDelete size={24} className="text-red-500" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
};

export default ItemShoppingCart;
