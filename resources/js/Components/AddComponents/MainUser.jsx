import { useSelector } from "react-redux";
import MainUserProfile from "./MainUserProfile";
import MainUserOrders from "./MainUserOrders";
import MainUserReviews from "./MainUserReviews";
import MainUserWishlist from "./MainUserWishlist";
import MainUserSetting from "./MainUserSetting";

const MainUser = ({ auth, totalOrders }) => {
    const { asideUserAccount } = useSelector((state) => state.counterSlice);
    return (
        <div className="flex-1 w-full">
            {asideUserAccount === "profile" && <MainUserProfile auth={auth} />}
            {asideUserAccount === "orders" && (
                <MainUserOrders totalOrders={totalOrders} />
            )}
            {asideUserAccount === "reviews" && <MainUserReviews auth={auth} />}
            {asideUserAccount === "wishlist" && (
                <MainUserWishlist auth={auth} />
            )}
            {asideUserAccount === "setting" && <MainUserSetting auth={auth} />}
        </div>
    );
};

export default MainUser;
