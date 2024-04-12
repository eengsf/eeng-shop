import MUReview from "./MUReview";

const MainUserReviews = ({ auth }) => {
    return (
        <div className="flex flex-col gap-5 p-5 w-full border border-slate-200 rounded-lg shadow-lg">
            <div className="flex justify-between">
                <h1 className="font-bold text-2xl">Reviews</h1>
            </div>
            <div className="flex flex-col gap-3">
                <MUReview auth={auth} />
                <MUReview auth={auth} />
                <MUReview auth={auth} />
                <MUReview auth={auth} />
                <MUReview auth={auth} />
            </div>
        </div>
    );
};

export default MainUserReviews;
