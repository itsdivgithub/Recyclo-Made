module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                plant: "url('/plant.jpg')",
                pap: "url('/pap.png')",
                button: "url('/button.png')",
                board: "url('/board.png')",
                dice: "url('/dice.png')"
            }),
        },
    },
    plugins: [],
}
