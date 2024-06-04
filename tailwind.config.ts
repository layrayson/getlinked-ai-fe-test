import { AppColors } from "./src/lib/theme/appColor";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": AppColors.primary[100],
        "primary-200": AppColors.primary[200],
        "primary-300": AppColors.primary[300],
        "primary-500": AppColors.primary[500],
        "blueGray-50": AppColors.blueGray[50],
        "blueGray-300": AppColors.blueGray[300],
        "blueGray-700": AppColors.blueGray[700],
        "blue-900": AppColors.blue[900],
        "red-500": AppColors.red[500],
        white: AppColors.white,
        black: AppColors.black,
      },
    },
  },
  plugins: [],
};
export default config;
