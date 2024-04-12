const TotalShoppingCart = ({ orders }) => {
    let totalPrice = 0;
    orders.forEach((order) => {
        totalPrice += parseFloat(order.price * order.quantity);
    });
    return (
        <div className="flex flex-col w-full h-[40%] p-3 gap-4 bg-slate-200 items-center rounded-lg">
            <div>
                <h1 className="text-xl font-bold">Shopping Summary</h1>
            </div>
            <div className="flex flex-col gap-3 2lg:w-1/2 2md:w-3/4 sm:w-1/2 w-full">
                <div className="flex justify-between">
                    <h1>Total ({orders.length} items) :</h1>
                    <h1>$ {totalPrice.toFixed(2)}</h1>
                </div>
                <span className="w-full h-[1px] bg-black"></span>
                <div className="flex justify-between">
                    <h1>Voucher :</h1>
                    <h1>$ 0</h1>
                </div>
                <span className="w-full h-[1px] bg-black"></span>
                <div className="flex justify-between">
                    <h1>Total Price :</h1>
                    <h1>$ {totalPrice.toFixed(2)}</h1>
                </div>
            </div>
        </div>
    );
};

export default TotalShoppingCart;
