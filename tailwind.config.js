/** @type {import('tailwindcss').Config} */
module.exports = {
  // berisi tambahkan jalur ke semua file template atau panggil semua file berikut
  // ./ berarti berada di folder yg sama lalu panggil folder src lalu pengaruhi semua file yang ekstensi nya: html dan js
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

