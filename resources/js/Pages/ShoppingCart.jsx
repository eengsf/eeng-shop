import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { handleShoppingCart } from "@/store/slice/counterSlice";
import ItemShoppingCart from "@/Components/AddComponents/ItemShoppingCart";
import TotalShoppingCart from "@/Components/AddComponents/TotalShoppingCart";
import { router } from "@inertiajs/react";

const ShoppingCart = ({ orders, viewcart }) => {
    const dispath = useDispatch();
    let totalPrice = 0;
    orders.forEach((order) => {
        totalPrice += parseFloat(order.price * order.quantity);
    });
    totalPrice = totalPrice.toFixed(2);

    const handleCheckout = () => {
        if (orders.length > 0) {
            if (viewcart === "user") {
                router.post(route("user.store"), {
                    total_price: totalPrice,
                });
            } else {
                router.post(route("welcome.store"), {
                    total_price: totalPrice,
                });
            }
        }
    };

    return (
        <div className="bg-black/80 fixed inset-0 z-30 flex items-center justify-center">
            <div className="flex flex-col gap-0 bg-white 2md:w-[50vw] 2md:h-[90vh] w-full h-full 2md:rounded-md px-7 py-7">
                <div className="text-center h-[10%] relative">
                    <h1 className="font-bold text-xl">SHOPPING CART</h1>
                    <button
                        onClick={() => dispath(handleShoppingCart())}
                        className="absolute right-0 top-0 "
                    >
                        <RxCross2 size={24} />
                    </button>
                </div>
                <div className="flex flex-col gap-5 w-full h-[90%] ">
                    <div className="w-full h-[50%] overflow-y-auto custom-scrollbar">
                        <ItemShoppingCart orders={orders} viewcart={viewcart} />
                    </div>
                    <TotalShoppingCart orders={orders} />
                    <div className="flex justify-between items-center w-full h-[10%]">
                        <div className="flex gap-2 items-center cursor-pointer">
                            <input
                                type="checkbox"
                                name="cek-all"
                                id="cek-all"
                            />
                            <label htmlFor="cek-all" id="cek-all">
                                Pilih Semua
                            </label>
                        </div>
                        <div>
                            <button
                                onClick={handleCheckout}
                                className="py-2 px-4 bg-green-500 rounded-lg text-white"
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
