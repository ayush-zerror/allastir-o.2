/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: { min: "0px", max: "639px" }, // 0px - 639px
        md: { min: "640px", max: "767px" }, // 640px - 767px
        lg: { min: "768px", max: "1023px" }, // 768px - 1023px
        xl: { min: "1024px", max: "1279px" }, // 1024px - 1279px
        xxl: { min: "1280px", max: "1535px" }, // 1280px - 1535px
      
        // sm: { max: "370px" },               // Up to 370px
        // md: { min: "371px", max: "555px" }, // 371px - 555px
        // lg: { min: "556px", max: "740px" }, // 556px - 740px
        // xl: { min: "741px", max: "925px" }, // 741px - 925px
        // xxl: { min: "926px", max: "1110px" }, // 926px - 1110px
        // xxxl: { min: "1111px" },            // 1111px and above
      },
    },
  },
  plugins: [],
};