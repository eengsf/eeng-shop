import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            screens: {
                "2lg": "1140px",
                "2md": "925px",
            },
        },
    },

    plugins: [forms, require("daisyui")],
    daisyui: {
        darkTheme: "light", // name of one of the included themes for dark mode
        base: false, // applies background color and foreground color for root element by default
    },
};
