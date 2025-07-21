module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        'float-circle': 'floatCircle 6s ease-in-out infinite',
      },
      keyframes: {
        floatCircle: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(10px, -10px)' },
      },
    },
      colors: {
        'gris' : '#1D1616',
        'oscuro' : '#fcfcfcff',
        'rojo_f' : '#8E1616',
        'rojo_c' : '#D84040',
        'blanco' : '#EEEEEE',
        'gris_c' : '#1d1d1dff',
        'form_d' : '#cfcfcfff'
      }
    },
  },
  plugins: [],
}
