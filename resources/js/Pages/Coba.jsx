const { usePage } = require("@inertiajs/react");

const Coba = () => {
    const notif = usePage().props;
    console.log(notif);
    return (
        <>
            {/* <p>{notif}</p> */}
            <h1>fuad</h1>
        </>
    );
};

export default Coba;
