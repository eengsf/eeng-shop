import { FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Review from "./Review";
import { useDispatch, useSelector } from "react-redux";
import { handleDetailProduct } from "@/store/slice/counterSlice";
import { router } from "@inertiajs/react";
import { useState } from "react";

const DetailProduct = ({ products }) => {
    const [quantity, setQuantity] = useState(1);
    const dispath = useDispatch();
    const { detailProductData } = useSelector((state) => state.counterSlice);

    const handleAddToCart = () => {
        router.post("/order", {
            quantity: quantity,
            data: products[detailProductData - 1],
        });
        dispath(handleDetailProduct());
    };
    const handleQuantity = (action) => {
        if (action === "plus") {
            setQuantity(quantity + 1);
        } else if (action === "minus") {
            if (quantity > 1) {
                setQuantity(quantity - 1);
            }
        }
    };

    return (
        <div className="bg-black/80 fixed inset-0 z-30 flex items-center justify-center">
            <div className="flex flex-col gap-0 bg-white 2md:w-[70vw] 2md:h-[70vh] w-full h-full 2md:rounded-md px-7 py-7">
                <div className="text-center h-[15%] relative">
                    <h1 className="font-bold text-xl">DETAIL PRODUCT</h1>
                    <button
                        onClick={() => dispath(handleDetailProduct())}
                        className="absolute right-0 top-0 "
                    >
                        <RxCross2 size={24} />
                    </button>
                </div>
                <div className="flex 2md:flex-row flex-col gap-5 w-full h-[85%]">
                    <div className="2md:w-1/4 w-full 2md:h-full h-1/2 flex 2md:flex-col flex-row gap-3">
                        <figure className="2md:w-full 2md:h-3/4 w-3/5 h-full">
                            <img
                                src={`images/${
                                    products[detailProductData - 1].image
                                }`}
                                alt="gamabar"
                                className="w-full h-full object-contain "
                            />
                        </figure>
                        <div className="flex flex-col justify-center 2md:gap-1 gap-3">
                            <div className="flex 2lg:flex-row flex-col 2lg:justify-between items-center gap-1">
                                <div className="flex items-center gap-1">
                                    <button
                                        onClick={() => handleQuantity("minus")}
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
                                        onClick={() => handleQuantity("plus")}
                                    >
                                        <FaCirclePlus size={16} />
                                    </button>
                                </div>
                                <div className="m-auto">
                                    <p className="text-sm">Stok : 100</p>
                                </div>
                            </div>
                            <div className="text-center w-full p-1 rounded-md">
                                <button
                                    onClick={handleAddToCart}
                                    className="text-sm bg-slate-300 py-1 px-3 rounded-md w-full"
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="2md:w-3/4 w-full flex flex-col gap-2 overflow-y-auto custom-scrollbar">
                        <div className="flex flex-col gap-3">
                            <div>
                                <h1 className="font-bold">
                                    {products[detailProductData - 1].name}
                                </h1>
                                <i className="text-sm">
                                    {products[detailProductData - 1].category}
                                </i>
                            </div>
                            <div>
                                <h1 className="text-lg font-bold">
                                    $ {products[detailProductData - 1].price}
                                </h1>
                                <p className="text-sm flex">
                                    <IoMdStar
                                        size={18}
                                        className="text-yellow-500"
                                    />{" "}
                                    4.5 | (125 reviews)
                                </p>
                            </div>
                            <div>
                                <p className="text-justify text-sm">
                                    {
                                        products[detailProductData - 1]
                                            .description
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <hr className="border-slate-400" />
                            <div>
                                <h1 className="font-bold">Ulasan</h1>
                            </div>
                            <Review />
                            <Review />
                            <Review />
                            <Review />
                            <Review />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailProduct;
