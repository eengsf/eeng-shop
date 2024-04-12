import { Link, router } from "@inertiajs/react";

const Products = (props) => {
    console.log(props.products);
    const data = props.products;
    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this product?")) {
            router.delete(route("products.destroy", id));
        }
    };
    return (
        <div>
            {data.map((product) => (
                <div key={product.id} className="bg-slate-300 flex gap-3 p-3">
                    <h1>{product.name}</h1>
                    <h1>{product.description}</h1>
                    <h1>{product.price}</h1>
                    <img
                        src={`images/${product.image}`}
                        alt=""
                        width={100}
                        height={100}
                    />
                    <Link href={route("products.edit", product.id)}>Edit</Link>
                    <button onClick={() => handleDelete(product.id)}>
                        Delete
                    </button>
                </div>
            ))}
            <button onClick={() => router.post(route("home.logout"))}>
                Logout
            </button>
        </div>
    );
};

export default Products;
