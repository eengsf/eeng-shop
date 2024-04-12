import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inputSeacrh: "",
    shoppingCart: false,
    detailProduct: false,
    detailProductData: "",
    categories: [],
    menClothing: false,
    womenClothing: false,
    jewelery: false,
    electronics: false,
    hamburger: false,
    asideUserAccount: "profile",
    // quantitykit: 1,
};

export const counterSlice = createSlice({
    name: "inputSeacrh",
    initialState,
    reducers: {
        handleSeacrh: (state, action) => {
            state.inputSeacrh = action.payload;
        },
        handleShoppingCart: (state) => {
            state.shoppingCart = !state.shoppingCart;
        },
        handleDetailProduct: (state, action) => {
            state.detailProduct = !state.detailProduct;
            state.detailProductData = action.payload;
        },
        handleCategory: (state, action) => {
            if (action.payload === "men-clothing") {
                if (!state.menClothing) {
                    state.categories.push("men's clothing");
                } else {
                    state.categories = state.categories.filter(
                        (category) => category !== "men's clothing"
                    );
                }
                state.menClothing = !state.menClothing;
            }

            if (action.payload === "woman-clothing") {
                if (!state.womenClothing) {
                    state.categories.push("women's clothing");
                } else {
                    state.categories = state.categories.filter(
                        (category) => category !== "women's clothing"
                    );
                }
                state.womenClothing = !state.womenClothing;
            }

            if (action.payload === "jewelery") {
                if (!state.jewelery) {
                    state.categories.push("jewelery");
                } else {
                    state.categories = state.categories.filter(
                        (category) => category !== "jewelery"
                    );
                }
                state.jewelery = !state.jewelery;
            }

            if (action.payload === "electronics") {
                if (!state.electronics) {
                    state.categories.push("electronics");
                } else {
                    state.categories = state.categories.filter(
                        (category) => category !== "electronics"
                    );
                }
                state.electronics = !state.electronics;
            }
        },
        handleHamburger: (state) => {
            state.hamburger = !state.hamburger;
        },
        handleLayout: (state, action) => {
            state.hamburger = action.payload;
        },
        handleAsideUserAccount: (state, action) => {
            state.asideUserAccount = action.payload;
        },
        // handleQuantity: (state, action) => {
        //     state.quantitykit = action.payload;
        // },
    },
});

export const {
    handleSeacrh,
    handleDetailProduct,
    handleCategory,
    handleShoppingCart,
    handleHamburger,
    handleLayout,
    handleAsideUserAccount,
    // handleQuantity,
} = counterSlice.actions;
