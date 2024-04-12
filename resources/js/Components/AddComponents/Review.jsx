import { CgProfile } from "react-icons/cg";
import { IoMdStar } from "react-icons/io";

const Review = () => {
    return (
        <div className="flex flex-col">
            <div className="flex items-center">
                <IoMdStar size={16} className="text-yellow-500" />
                <IoMdStar size={16} className="text-yellow-500" />
                <IoMdStar size={16} className="text-yellow-500" />
                <IoMdStar size={16} className="text-yellow-500" />
                <IoMdStar size={16} className="text-slate-300" />
                <p className="text-slate-400 ms-3 text-sm">4 hari yang lalu</p>
            </div>
            <div className="flex items-center gap-1">
                <CgProfile size={20} />
                <h1>m***r</h1>
            </div>
            <div>
                <p className="text-sm">
                    Brg sesuai pesanan; pengiriman cepat, packing rapih. Tks Gan
                </p>
            </div>
        </div>
    );
};

export default Review;
