import Aside from "@/Components/AddComponents/Aside";
import Card from "@/Components/AddComponents/Card";
import DetailProduct from "@/Components/AddComponents/DetailProduct";
import Navbar from "@/Components/AddComponents/Navbar";
import { Head, usePage } from "@inertiajs/react";
import { useSelector } from "react-redux";
import ShoppingCart from "./ShoppingCart";

export default function Welcome({ auth }) {
    const products = usePage().props.products;
    const orders = usePage().props.orders;

    const { detailProduct, shoppingCart } = useSelector(
        (state) => state.counterSlice
    );

    return (
        <div className="bg-slate-50">
            <Head title="Welcome" />
            <Navbar auth={auth} />

            <div
                className={`flex 2md:flex-row flex-col justify-center gap-5 max-w-6xl mx-auto text-black my-24 `}
            >
                <Aside />
                <main
                    className={`grid 2lg:grid-cols-4 2md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-3`}
                >
                    <Card products={products} />
                </main>
            </div>
            {detailProduct && <DetailProduct products={products} />}
            {shoppingCart && (
                <ShoppingCart orders={orders} viewcart="welcome" />
            )}
        </div>
    );
}
