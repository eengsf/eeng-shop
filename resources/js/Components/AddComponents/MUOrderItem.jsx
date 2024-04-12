const MUOrderItem = ({ totalOrders }) => {
    return totalOrders.map((totalOrder, index) => {
        const order_item = JSON.parse(totalOrder.order_item_value);

        return (
            <div
                key={index}
                className="flex justify-between w-full gap-3 p-3 border border-slate-300 rounded-lg"
            >
                <div className="flex flex-1 flex-col gap-3 pe-3">
                    {order_item.map((item, index) => {
                        return (
                            <div key={index} className="flex gap-3 w-full">
                                <figure className="sm:w-1/12 w-1/4">
                                    <img
                                        src={`images/${item.product.image}`}
                                        alt="hero"
                                        className="w-full h-full object-cover"
                                    />
                                </figure>
                                <div className="sm:w-11/12 w-3/4">
                                    <h1 className="font-bold ">
                                        {item.product.name}
                                    </h1>
                                    <i className="text-sm">
                                        {item.product.category}
                                    </i>
                                </div>
                            </div>
                        );
                    })}
                    <div className="flex w-full justify-between items-center">
                        <div className="">
                            <div className="flex sm:flex-row flex-col">
                                <h1 className="">
                                    Total pesanan: $ {totalOrder.total_price}/{" "}
                                </h1>
                                <h1>{order_item.length} produk</h1>
                            </div>
                            <i className="text-sm">
                                {totalOrder.status === "pending"
                                    ? "Pesanan masih dalam proses"
                                    : "Pesanan selesai"}
                            </i>
                        </div>
                        <div className="flex sm:flex-row flex-col gap-3 justify-center">
                            <button
                                className={`sm:text-base text-sm py-2 px-4 rounded-lg ${
                                    totalOrder.status === "pending"
                                        ? "bg-slate-300"
                                        : "bg-green-500"
                                } `}
                            >
                                Terima
                            </button>
                            <button className="sm:text-base text-sm bg-red-500 py-2 px-4 rounded-lg">
                                Batalkan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
};

export default MUOrderItem;
