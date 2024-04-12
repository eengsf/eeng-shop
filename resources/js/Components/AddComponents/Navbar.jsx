import { Link, router } from "@inertiajs/react";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { handleShoppingCart } from "@/store/slice/counterSlice";

const Navbar = ({ auth }) => {
    const dispath = useDispatch();

    return (
        <>
            <div className="navbar fixed top-0 bg-white shadow-lg text-black z-20 sm:px-5 px-1">
                <div className="flex-1">
                    <a href="/" className="btn btn-ghost text-xl">
                        E-Commerce
                    </a>
                </div>
                <div className="flex-none me-3 gap-3">
                    {auth.user ? (
                        <div className="flex sm:gap-10 gap-3">
                            <button
                                onClick={() => dispath(handleShoppingCart())}
                                className="flex sm:gap-2 gap-1"
                            >
                                <FiShoppingCart size={20} />
                                <h1>cart</h1>
                            </button>

                            <div className="dropdown dropdown-end">
                                <div tabIndex={0}>
                                    <div className="flex sm:gap-2 gap-1 cursor-pointer">
                                        <FaRegUser size={20} />
                                        <h1>{auth.user.name}</h1>
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                                >
                                    <li>
                                        <a href={route("user.index")}>
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a>Settings</a>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() =>
                                                router.post(
                                                    route("home.logout")
                                                )
                                            }
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <>
                            <Link href={route("login")} className="">
                                Login
                            </Link>

                            <Link href={route("register")} className="">
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Navbar;
