import { handleHamburger } from "@/store/slice/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Hamburger = () => {
    const { hamburger } = useSelector((state) => state.counterSlice);
    const dispath = useDispatch();
    return (
        <label
            htmlFor="burger"
            className={`z-30 2md:hidden cursor-pointer absolute right-5`}
        >
            <input
                type="checkbox"
                checked={hamburger}
                onChange={() => dispath(handleHamburger())}
                id="burger"
                className="hidden"
            />
            <span
                className={`bg-black  w-6 h-[3px] block mb-[4px] rounded-sm ${
                    hamburger
                        ? "transform origin-top-left rotate-45 transition duration-1000 translate-x-px -translate-y-[2px]"
                        : "transform origin-top-left transition duration-1000"
                }`}
            ></span>
            <span
                className={`bg-black w-6 h-[3px] block mb-[4px] rounded-sm ${
                    hamburger
                        ? "transform scale-0 opacity-0 transition duration-1000"
                        : "transform scale-100 opacity-100 transition duration-1000"
                }`}
            ></span>
            <span
                className={`bg-black w-6 h-[3px] block mb-[4px] rounded-sm ${
                    hamburger
                        ? "transform origin-top-left -rotate-45 transition duration-1000 -translate-x-px translate-y-px"
                        : "transform origin-top-left transition duration-1000"
                }`}
            ></span>
        </label>
    );
};

export default Hamburger;
