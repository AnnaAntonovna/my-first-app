/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#204075",
        "primary-50": "#F1F5FB",
        "primary-100": "#E3EBF7",
        "primary-200": "#C7D7F0",
        "primary-300": "#ABC2E8",
        "primary-600": "#3061AF",
        "primary-700": "#285192",
        "primary-900": "#183058",

        secondary: "#2B89A8",
        "secondary-50": "#F3FAFC",
        "secondary-100": "#E7F4F9",
        "secondary-200": "#CEE9F2",
        "secondary-300": "#B6DFEC",
        "secondary-400": "#9ED4E6",
        "secondary-500": "#79C4DC",
        "secondary-600": "#34A4CA",
        "secondary-700": "#2B89A8",
        "secondary-800": "#236D86",
        "secondary-900": "#1A5265",

        tertiary: "#EAB54C",
        "tertiary-50": "#FDF8EF",
        "tertiary-100": "#FBF2DE",
        "tertiary-200": "#F7E4BE",
        "tertiary-300": "#F4D79D",
        "tertiary-400": "#F0C97D",
        "tertiary-500": "#EAB54C",
        "tertiary-600": "#C48A17",
        "tertiary-700": "#A37313",
        "tertiary-800": "#825C0F",
        "tertiary-900": "#62450B",

        danger: "#B0233A",
        "danger-50": "#FCF2F4",
        "danger-100": "#FAE5E9",
        "danger-200": "#F5CCD3",
        "danger-300": "#F0B2BD",
        "danger-400": "#EB99A6",
        "danger-500": "#E37285",
        "danger-600": "#D42A46",
        "danger-700": "#B0233A",
        "danger-800": "#8D1C2F",
        "danger-900": "#6A1523",

        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },

      backgroundColor: {
        mainColor: "#FBF8F9",
        secondaryColor: "#F0F0F0",
        blackOverlay: "rgba(0, 0 ,0 ,0.7)",
        grayOverlay: "rgba(0, 0 ,0 ,0.1)",
      },

      width: {
        190: "190px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        656: "656px",
        880: "880px",
        508: "508px",
      },
      height: {
        80: "80px",
        340: "340px",
        370: "370px",
        420: "420px",
        510: "510px",
        600: "600px",
        685: "685px",
        800: "800px",
        "90vh": "90vh",
      },
      flex: {
        0.7: "0.7 1 0%",
      },
      maxHeight: {
        370: "370px",
      },
      minWidth: {
        210: "210px",
        350: "350px",
        620: "620px",
      },

      animation: {
        "slide-in": "slide-in 0.5s ease-out",
        "slide-fwd":
          " slide-fwd 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },

      cursor: {
        "zoom-in": "zoom-in",
        pointer: "pointer",
      },

      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(-200px)",
            transform: "translateX(-200px)",
          },
          "100%": {
            "-webkit-transform": "translateX(0px)",
            transform: "translateX(0px)",
          },
        },

        "slide-fwd": {
          "0%": {
            "-webkit-transform": "translateZ(0px)",
            transform: "translateZ(0px)",
          },
          "100%": {
            "-webkit-transform": "translateZ(160px)",
            transform: "translateZ(160px)",
          },
        },
      },

      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },

      screens: {
        xs: "450px",
        mscreen: "750px",
      },

      backgroundImage: {},
    },
  },
  plugins: [],
};
