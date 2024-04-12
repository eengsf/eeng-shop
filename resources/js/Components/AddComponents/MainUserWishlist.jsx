import MUWishlist from "./MUWishlist";

const MainUserWishlist = ({ auth }) => {
    return (
        <div className="flex flex-col gap-5 p-5 w-full border border-slate-200 rounded-lg shadow-lg">
            <div className="flex justify-center">
                <h1 className="font-bold text-2xl">Wishlist</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
                <MUWishlist auth={auth} />
                <MUWishlist auth={auth} />
                <MUWishlist auth={auth} />
                <MUWishlist auth={auth} />
                <MUWishlist auth={auth} />
                <MUWishlist auth={auth} />
            </div>
        </div>
    );
};

export default MainUserWishlist;
