import { useState } from "react";

const MainUserProfile = ({ auth }) => {
    const [edit, setEdit] = useState(false);
    const handleEdit = () => {
        setEdit(!edit);
    };
    return (
        <div className="flex flex-col gap-5 p-5 w-full border border-slate-200 rounded-lg shadow-lg">
            <div className="flex justify-between">
                <h1 className="font-bold text-2xl">Profile</h1>
                <button
                    onClick={handleEdit}
                    className="px-5 py-2 border border-slate-300 rounded-lg hover:bg-slate-200"
                >
                    Edit
                </button>
            </div>
            <form className="flex flex-col gap-5">
                <div className="flex items-center 2lg:w-[37%] sm:w-[50%] w-full  justify-between">
                    <label htmlFor="name">Nama</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={auth.user.name}
                        autoComplete="name"
                        disabled={!edit}
                        className="rounded-lg border-slate-300 ms-5"
                    />
                </div>
                <div className="flex items-center 2lg:w-[37%] sm:w-[50%] w-full  justify-between">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={auth.user.email}
                        autoComplete="email"
                        disabled={!edit}
                        className="rounded-lg border-slate-300 ms-5"
                    />
                </div>
                <div className="flex items-center 2lg:w-[37%] sm:w-[50%] w-full  justify-between">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value="**********"
                        autoComplete="current-password"
                        disabled={!edit}
                        className="rounded-lg border-slate-300 ms-5"
                    />
                </div>
                <div className="flex items-center 2lg:w-[37%] sm:w-[50%] w-full  justify-between">
                    <label htmlFor="email">Address</label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        value={auth.user.address ? auth.user.address : " "}
                        autoComplete="address"
                        disabled={!edit}
                        className="rounded-lg border-slate-300 ms-5"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        disabled={!edit}
                        className={`px-5 py-2 rounded-lg text-white  ${
                            edit
                                ? "bg-blue-500 hover:bg-blue-950"
                                : "bg-slate-300"
                        }`}
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MainUserProfile;
