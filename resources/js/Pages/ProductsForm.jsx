import { router } from "@inertiajs/react";
import { useState } from "react";

const ProductsForm = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            description: description,
            price: price,
            image: image,
        };

        router.post(route("products.store"), data);
        setName("");
        setDescription("");
        setPrice("");
        setImage("");
    };
    return (
        <div>
            <h1 className="mb-5">Products</h1>
            <form
                onSubmit={handleSubmit}
                method="POST"
                encType="multipart/form-data"
                className="flex flex-col gap-3"
            >
                <label htmlFor="name" id="name">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="input w-full max-w-xs bg-white border border-black"
                />
                <label htmlFor="description" id="description">
                    Description
                </label>
                <input
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className="input w-full max-w-xs bg-white border border-black"
                />
                <label htmlFor="price" id="price">
                    Price
                </label>
                <input
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Price"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    className="input w-full max-w-xs bg-white border border-black"
                />
                <label htmlFor="image" id="image">
                    Image
                </label>
                <input
                    type="file"
                    name="image"
                    id="image"
                    placeholder="Image"
                    onChange={(e) => setImage(e.target.files[0])}
                />

                <button
                    onClick={handleSubmit}
                    className="btn btn-active btn-primary w-full max-w-xs"
                >
                    Primary
                </button>
            </form>
        </div>
    );
};

export default ProductsForm;
