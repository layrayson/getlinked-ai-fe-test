import { AppColors } from "./src/lib/theme/appColor";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary-100": AppColors.primary[100],
      "primary-200": AppColors.primary[200],
      "primary-300": AppColors.primary[300],
      "primary-400": AppColors.primary[400],
      "primary-500": AppColors.primary[500],
      "blueGray-50": AppColors.blueGray[50],
      "blueGray-300": AppColors.blueGray[300],
      "blueGray-700": AppColors.blueGray[700],
      "blue-900": AppColors.blue[900],
      "red-500": AppColors.red[500],
      white: AppColors.white,
      black: AppColors.black,
    },
    extend: {
      spacing: {
        "30px": "30px",
        "43px": "43px",
        "62px": "62px",
        "63px": "63px",
        "98px": "98px",
        "168px": "168px",
        "178px": "178px",
        "198px": "198px",
        "264px": "264px",
        "832px": "832px",
        "1149px": "1149px",
      },
      borderRadius: {
        "10px": "10px",
        "20px": "20px",
      },
      lineHeight: {
        "25px": "25px",
        "22px": "22px",
      },
    },
  },
  plugins: [],
};
export default config;
