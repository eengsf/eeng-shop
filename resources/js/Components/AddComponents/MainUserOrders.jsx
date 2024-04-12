import MUOrderItem from "./MUOrderItem";

const MainUserOrders = ({ totalOrders }) => {
    return (
        <div className="flex flex-col w-full gap-5 p-5 border border-slate-200 rounded-lg shadow-lg">
            <div className="flex">
                <h1 className="font-bold text-2xl">Orders</h1>
            </div>
            <div className="flex flex-col w-full gap-3">
                <MUOrderItem totalOrders={totalOrders} />
            </div>
        </div>
    );
};

export default MainUserOrders;
