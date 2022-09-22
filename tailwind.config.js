/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      lsm: '578px',
      md: '768px',
      mm: '800px',
      lg: '936px',
      blg: '1190px',
      xlg: '1150px',
      xxlg: '1242px',
      xx: '1340px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', serif",
        montserrat: "'Montserrat', sans-serif",
      },
      width: {
        800: "800px",
        700: "700px",
        98: "432px",
        500: "500px",
        617: "617px",
      },
      maxWidth: {
        98: "432px",
        617: "617px",
        85: "351px",
      },
      height: {
        98: "432px",
      },
      padding: {
        22: "88px",
      },
      margin: {
        98: "391px",
        34: "137px",
      },
      colors: {
        blue: "#0051B4",
        lightBlue: "#D2EDFF",
        darkBlue: "#001465",
        brown: "#535653",
        darkBrown: "#111511",
        gray: "#F0F4F0",
        lightGray: '#EBEBEB',
      },
      boxShadow: {
        '1': '0px 16px 24px 2px rgba(0, 0, 0, 0.14)',
        '2': '0px 12px 17px 2px rgba(0, 0, 0, 0.14)',
      },
    },
  },
  // plugins: [require('@tailwindcss/forms')],
}
