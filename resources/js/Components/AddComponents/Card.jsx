import { handleDetailProduct } from "@/store/slice/counterSlice";
import { IoMdStar } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

const Card = ({ products }) => {
    const dispath = useDispatch();
    const { inputSeacrh, categories } = useSelector(
        (state) => state.counterSlice
    );

    let filteredData = products.filter((item) =>
        item.name.toLowerCase().includes(inputSeacrh.toLowerCase())
    );

    if (categories.length > 0) {
        filteredData = filteredData.filter((item) =>
            categories.includes(item.category)
        );
    } else {
        filteredData = filteredData;
    }

    if (filteredData.length === 0) {
        return (
            <>
                <div className="2md:w-52 w-full h-96 text-center">
                    Barang tidak ditemukan...
                </div>
                <div className="2md:w-52 w-full h-96"></div>
                <div className="2md:w-52 w-full h-96"></div>
                <div className="2md:w-52 w-full h-96"></div>
            </>
        );
    }

    return filteredData.map((products) => {
        function truncateTextName(text, maxLength) {
            if (text.length > maxLength) {
                return text.slice(0, maxLength) + "...";
            }
            return text;
        }
        const originalText = products.name;
        const truncatedText = truncateTextName(originalText, 17);

        return (
            <div
                key={products.id}
                className="flex flex-col 2md:w-52 w-full h-96 bg-white rounded-lg shadow-md relative"
            >
                <div className="p-1 rounded-full bg-slate-300 absolute right-3 top-3 cursor-pointer">
                    <IoMdHeart size={16} className="text-white" />
                </div>
                <figure className="w-full h-[57%] border p-5 rounded-t-lg">
                    <img
                        src={`images/${products.image}`}
                        alt=""
                        className="w-full h-full object-contain "
                    />
                </figure>
                <div className="flex flex-col gap-2 w-full h-[43%] border p-3">
                    <div>
                        <h1 className="font-semibold">{truncatedText}</h1>
                        <i className="text-sm">{products.category}</i>
                    </div>
                    <div>
                        <h1 className="font-semibold">$ {products.price}</h1>
                        <p className="text-xs flex items-center">
                            <IoMdStar size={18} className="text-yellow-500" />{" "}
                            4.5 | (125 reviews)
                        </p>
                    </div>
                    <div className="flex gap-2 justify-end">
                        <button
                            onClick={() =>
                                dispath(handleDetailProduct(products.id))
                            }
                            className="bg-slate-300 py-1 px-3 rounded-lg text-center cursor-pointer text-xs"
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        );
    });
};

export default Card;
