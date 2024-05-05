import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { handleCategory, handleSeacrh } from "@/store/slice/counterSlice";
import { router, usePage } from "@inertiajs/react";

const Aside = () => {
    const notif = usePage().props;
    const [search, setSearch] = useState(false);
    const [valueSort, setValueSort] = useState("");

    const { menClothing, womenClothing, jewelery, electronics } = useSelector(
        (state) => state.counterSlice
    );
    const dispath = useDispatch();

    const handleClickSearch = () => {
        setSearch(true);
    };
    const handleClickCross = () => {
        setSearch(false);
    };

    const handleClickSort = (value) => {
        setValueSort(value);
        let hasil = value.toLowerCase().replace(/[\s-]/g, "");
        router.get(route(`welcome.${hasil}`));
    };

    return (
        <>
            <button
                onClick={handleClickSearch}
                className={`${
                    search
                        ? "opacity-0 transition-all duration-700"
                        : "opacity-100 transition-all duration-700"
                } fixed 2md:hidden left-0 top-24 bg-slate-300 p-3 rounded-r-md z-10`}
            >
                <FaSearch size={20} />
            </button>
            <aside
                className={` bg-white flex 2md:opacity-100 2md:translate-x-0 fixed top-24 2md:left-auto 2md:static flex-col w-56 h-[450px] rounded-lg shadow-lg z-10 ${
                    search
                        ? "translate-x-0 transition-all duration-700 opacity-100"
                        : "opacity-0 -translate-x-full transition-all duration-700"
                }`}
            >
                <div className="flex justify-between bg-slate-300 px-3 py-3 rounded-t-md">
                    <h1 className="text-2xl font-bold">Filter</h1>
                    <button
                        onClick={handleClickCross}
                        className="2md:hidden block"
                    >
                        <FaTimes size={22} />
                    </button>
                </div>
                <div className=" flex flex-col gap-2 px-3 py-3">
                    <label htmlFor="search" className="font-semibold">
                        Seacrh
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Find by title"
                            onChange={(e) =>
                                dispath(handleSeacrh(e.target.value))
                            }
                            className="h-9 rounded-md"
                        />
                        <CiSearch
                            size={20}
                            className="absolute right-2 top-2 cursor-pointer"
                        />
                    </div>
                </div>
                <div className=" flex flex-col gap-2 px-3 py-3">
                    <hr />
                    <h1 className="font-semibold">Category</h1>
                    <div className="flex gap-2 items-center">
                        <input
                            type="checkbox"
                            name="men-clothing"
                            id="men-clothing"
                            checked={menClothing}
                            onChange={(e) =>
                                dispath(handleCategory(e.target.name))
                            }
                            className="cursor-pointer"
                        />
                        <label htmlFor="men-clothing" id="men-clothing">
                            Men's Clothing
                        </label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input
                            type="checkbox"
                            name="woman-clothing"
                            id="woman-clothing"
                            checked={womenClothing}
                            onChange={(e) =>
                                dispath(handleCategory(e.target.name))
                            }
                            className="cursor-pointer"
                        />
                        <label htmlFor="woman-clothing" id="woman-clothing">
                            Woman's Clothing
                        </label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input
                            type="checkbox"
                            name="jewelery"
                            id="jewelery"
                            checked={jewelery}
                            onChange={(e) =>
                                dispath(handleCategory(e.target.name))
                            }
                            className="cursor-pointer"
                        />
                        <label htmlFor="jewelery" id="jewelery">
                            Jewelery
                        </label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input
                            type="checkbox"
                            name="electronics"
                            id="electronics"
                            checked={electronics}
                            onChange={(e) =>
                                dispath(handleCategory(e.target.name))
                            }
                            className="cursor-pointer"
                        />
                        <label htmlFor="electronics" id="electronics">
                            Electronic
                        </label>
                    </div>
                </div>
                <div className=" flex flex-col px-3">
                    <hr />
                    <div className="dropdown dropdown-end">
                        <div className="my-2">
                            <h1 className="font-semibold">Sort</h1>
                        </div>
                        <div tabIndex={0} role="button" className="relative">
                            <input
                                type="text"
                                name="sort"
                                id="sort"
                                placeholder={
                                    notif.label ? notif.label : "Random"
                                }
                                disabled
                                className="h-9 rounded-md cursor-pointer"
                            />
                            <IoIosArrowDown
                                size={20}
                                className="absolute right-2 top-2 cursor-pointer"
                            />
                        </div>
                        <ul
                            tabIndex={0}
                            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-[200px]"
                        >
                            <li>
                                <button
                                    onClick={() =>
                                        handleClickSort("A-Z Selections")
                                    }
                                >
                                    A-Z Selections
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() =>
                                        handleClickSort("Z-A Selections")
                                    }
                                >
                                    Z-A Selections
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() =>
                                        handleClickSort("Highest Priced")
                                    }
                                >
                                    Highest Priced
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() =>
                                        handleClickSort("Lowest Priced")
                                    }
                                >
                                    Lowest Priced
                                </button>
                            </li>
                            {/* <li>
                                <button
                                // onClick={() => handleClickSort("Top Rated")}
                                >
                                    Top Rated
                                </button>
                            </li>
                            <li>
                                <button
                                // onClick={() =>
                                //     handleClickSort("Most Reviews")
                                // }
                                >
                                    Most Reviews
                                </button>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Aside;
