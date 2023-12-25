/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    extend: {
      colors : {
        "m-dark-blue" : "hsl(217, 19%, 35%)",
        "m-des-blue" : "hsl(214, 17%, 51%)",
        "m-gra-blue" : "hsl(212, 23%, 69%)",  
        "m-light-blue" : "hsl(210, 46%, 95%)",
      }
    },
  },
  plugins: [],
}

