import { FaRegCircleUser } from "react-icons/fa6";
import { MdStar } from "react-icons/md";

const MUReview = ({ auth }) => {
    return (
        <div className="flex sm:flex-row flex-col justify-between gap-3 p-3 border border-slate-300 rounded-lg">
            <div className="flex flex-1 flex-col gap-3 pe-3">
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <FaRegCircleUser size={20} />
                        <h1>{auth.user.name}</h1>
                        <div className="flex">
                            <MdStar size={16} className="text-yellow-500" />
                            <MdStar size={16} className="text-yellow-500" />
                            <MdStar size={16} className="text-yellow-500" />
                            <MdStar size={16} className="text-yellow-500" />
                            <MdStar size={16} className="text-yellow-500" />
                        </div>
                    </div>
                    <i className="text-sm">4 hari yang lalu</i>
                </div>
                <div className="flex flex-col">
                    <div className="flex">
                        <figure className="w-1/5">
                            <img
                                src="images/hero.png"
                                alt="hero"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="w-4/5 ">
                            <h1 className="font-bold text-justify">
                                lorem ipsum dolor sit amet consectetur lorem
                                ipsum dolor sit amet consectetur
                            </h1>
                        </div>
                    </div>
                    <div>
                        <p className="text-justify">
                            Ini review dari saya lorem ipsum dolor sit amet
                            consectetur lorem ipsum dolor sit amet consectetur
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3 justify-center">
                <button className="bg-blue-500 py-2 px-4 rounded-lg">
                    Update
                </button>
            </div>
        </div>
    );
};

export default MUReview;
