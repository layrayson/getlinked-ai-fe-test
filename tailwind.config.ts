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
      "red-100": AppColors.red[100],
      "red-500": AppColors.red[500],
      "red-700": AppColors.red[700],

      white: AppColors.white,
      whiteSmoke: AppColors.whiteSmoke,
      black: AppColors.black,
    },
    extend: {
      spacing: {
        "2px": "2px",
        "3px": "3px",
        "9.86px": "9.86px",
        "13.74px": "13.74px",
        "18px": "18px",
        "19px": "19px",
        "27.5px": "27.5px",
        "30px": "30px",
        "34px": "34px",
        "35px": "35px",
        "43px": "43px",
        "50px": "50px",
        "62px": "62px",
        "63px": "63px",
        "71px": "71px",
        "75px": "75px",
        "98px": "98px",
        "140px": "140px",
        "168px": "168px",
        "178px": "178px",
        "198px": "198px",
        "207px": "207px",
        "264px": "264px",
        "335px": "335px",
        "832px": "832px",
        "1149px": "1149px",
      },
      borderRadius: {
        "5px": "5px",
        "7px": "7px",
        "9x": "9px",
        "10px": "10px",
        "18px": "18px",
        "20px": "20px",
      },
      lineHeight: {
        "25px": "25px",
        "22px": "22px",
      },
      fontSize: {
        "10px": "10px",
      },
      borderWidth: {
        "3px": "3px",
      },
    },
  },
  plugins: [],
};
export default config;
