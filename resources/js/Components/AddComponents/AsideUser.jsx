import { FaRegUserCircle } from "react-icons/fa";
import AsideUserAccount from "./AsideUserAccount";
import Hamburger from "./Hamburger";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { handleLayout } from "@/store/slice/counterSlice";

const AsideUser = ({ auth }) => {
    const { hamburger } = useSelector((state) => state.counterSlice);
    const dispath = useDispatch();
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 925) {
                dispath(handleLayout(true));
            } else if (window.innerWidth < 925) {
                dispath(handleLayout(false));
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [dispath]);

    return (
        <aside
            className={`flex flex-shrink-0 flex-col gap-5 2md:w-[330px] h-full w-full z-10`}
        >
            <div className="flex items-center gap-3 p-5 border rounded-lg shadow-lg relative">
                <FaRegUserCircle size={40} />
                <div className="flex flex-col">
                    <h1 className="font-bold text-xl">
                        Hello {auth.user.name}
                    </h1>
                    <p>{auth.user.email}</p>
                </div>
                <Hamburger />
            </div>
            {/* ${
                    !hamburger ? "h-0 " : "h-full"
                } */}
            <div
                className={`overflow-y-hidden ${hamburger ? "h-full" : "h-0"}`}
            >
                <AsideUserAccount />
            </div>
        </aside>
    );
};

export default AsideUser;
