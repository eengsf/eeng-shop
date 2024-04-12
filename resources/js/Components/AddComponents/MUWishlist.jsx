import { IoMdHeart, IoMdStar } from "react-icons/io";

const MUWishlist = () => {
    return (
        <div className="flex flex-col 2md:w-52 w-full h-96 bg-white rounded-lg shadow-md relative">
            <div className="p-1 rounded-full bg-slate-300 absolute right-3 top-3 cursor-pointer">
                <IoMdHeart size={16} className="text-white" />
            </div>
            <figure className="w-full h-[57%] border p-5 rounded-t-lg">
                <img
                    src={``}
                    alt=""
                    className="w-full h-full object-contain "
                />
            </figure>
            <div className="flex flex-col gap-2 w-full h-[43%] border p-3">
                <div>
                    <h1 className="font-semibold">Nama Produk</h1>
                    <i className="text-sm">category</i>
                </div>
                <div>
                    <h1 className="font-semibold">$ 116</h1>
                    <p className="text-xs flex items-center">
                        <IoMdStar size={18} className="text-yellow-500" /> 4.5 |
                        (125 reviews)
                    </p>
                </div>
                <div className="flex gap-2 justify-end">
                    <button className="bg-slate-300 py-1 px-3 rounded-lg text-center cursor-pointer text-xs">
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MUWishlist;
