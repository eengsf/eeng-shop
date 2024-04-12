import { FaRegUser } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LuClipboardList } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { handleAsideUserAccount } from "@/store/slice/counterSlice";

const AsideUserAccount = () => {
    const { hamburger, asideUserAccount } = useSelector(
        (state) => state.counterSlice
    );
    const dispath = useDispatch();

    return (
        <div
            className={`flex flex-col border rounded-lg shadow-lg
            ${
                hamburger
                    ? "translate-y-0 opacity-100  transition-all duration-1000"
                    : "-translate-y-full opacity-0  transition-all duration-1000"
            }
            `}
        >
            <h1 className="font-bold text-2xl p-5">My Account</h1>
            <div className="flex flex-col">
                <button
                    onClick={() => dispath(handleAsideUserAccount("profile"))}
                    className={`flex justify-between p-5 cursor-pointer ${
                        asideUserAccount === "profile" ? "bg-slate-200" : ""
                    }`}
                >
                    <div className="flex gap-3">
                        <FaRegUser size={20} />
                        <h1>Profile</h1>
                    </div>
                    <IoIosArrowForward size={20} />
                </button>

                <button
                    onClick={() => dispath(handleAsideUserAccount("orders"))}
                    className={`flex justify-between p-5 cursor-pointer ${
                        asideUserAccount === "orders" ? "bg-slate-200" : ""
                    }`}
                >
                    <div className="flex gap-3">
                        <LuClipboardList size={20} />
                        <h1>Orders</h1>
                    </div>
                    <IoIosArrowForward size={20} />
                </button>
                <button
                    onClick={() => dispath(handleAsideUserAccount("reviews"))}
                    className={`flex justify-between p-5 cursor-pointer ${
                        asideUserAccount === "reviews" ? "bg-slate-200" : ""
                    }`}
                >
                    <div className="flex gap-3">
                        <FaRegStar size={20} />
                        <h1>Reviews</h1>
                    </div>
                    <IoIosArrowForward size={20} />
                </button>
                <button
                    onClick={() => dispath(handleAsideUserAccount("wishlist"))}
                    className={`flex justify-between p-5 cursor-pointer ${
                        asideUserAccount === "wishlist" ? "bg-slate-200" : ""
                    }`}
                >
                    <div className="flex gap-3">
                        <FiHeart size={20} />
                        <h1>Wishlist</h1>
                    </div>
                    <IoIosArrowForward size={20} />
                </button>
                <button
                    onClick={() => dispath(handleAsideUserAccount("setting"))}
                    className={`flex justify-between p-5 cursor-pointer ${
                        asideUserAccount === "setting" ? "bg-slate-200" : ""
                    }`}
                >
                    <div className="flex gap-3">
                        <IoSettingsOutline size={20} />
                        <h1>Setting</h1>
                    </div>
                    <IoIosArrowForward size={20} />
                </button>
            </div>
        </div>
    );
};

export default AsideUserAccount;
