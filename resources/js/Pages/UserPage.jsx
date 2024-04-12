import AsideUser from "@/Components/AddComponents/AsideUser";
import MainUser from "@/Components/AddComponents/MainUser";
import Navbar from "@/Components/AddComponents/Navbar";
import { Head } from "@inertiajs/react";
import ShoppingCart from "./ShoppingCart";
import { usePage } from "@inertiajs/react";
import { useSelector } from "react-redux";

const UserPage = ({ auth }) => {
    const { shoppingCart } = useSelector((state) => state.counterSlice);
    const orders = usePage().props.orders;
    const totalOrders = usePage().props.totalOrders;
    return (
        <>
            <Head title="Welcome" />
            <Navbar auth={auth} />

            <div
                className={`flex 2md:flex-row flex-col 2md:justify-center gap-5 max-w-6xl mx-auto text-black my-24`}
            >
                <AsideUser auth={auth} />
                <MainUser auth={auth} totalOrders={totalOrders} />
            </div>
            {shoppingCart && <ShoppingCart orders={orders} viewcart="user" />}
        </>
    );
};

export default UserPage;
