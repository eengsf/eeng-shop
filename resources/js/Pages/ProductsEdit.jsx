import { router } from "@inertiajs/react";
import { useState } from "react";

const ProductsEdit = (props) => {
    // const data = props.products;
    // const [name, setName] = useState(data.name);
    // const [description, setDescription] = useState(data.description);
    // const [price, setPrice] = useState(data.price);

    const {
        id,
        name: initialName,
        description: initialDescription,
        price: initialPrice,
    } = props.products;
    const [name, setName] = useState(initialName);
    const [description, setDescription] = useState(initialDescription);
    const [price, setPrice] = useState(initialPrice);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            description: description,
            price: price,
        };

        router.put(route("products.update", id), data);
    };
    return (
        <div>
            <h1 className="mb-5">Edit sini bro</h1>
            <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className="flex flex-col gap-3"
            >
                <label htmlFor="name" id="name">
                    Name:
                </label>
                <input
                    type="text"
                    value={name}
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="description" id="description">
                    Description:
                </label>
                <textarea
                    value={description}
                    id="description"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label htmlFor="price" id="price">
                    Price:
                </label>
                <input
                    type="number"
                    value={price}
                    id="price"
                    onChange={(e) => setPrice(e.target.value)}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ProductsEdit;
