/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://img.freepik.com/premium-photo/cooking-food-background-with-herbs-olive-oil-spices_136595-1062.jpg?w=360')",
      },
    },
  },
  plugins: [],
}

