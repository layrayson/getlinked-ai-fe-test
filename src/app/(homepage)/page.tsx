import SystemCheck from "@/components/home/SystemCheck";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Start assessment`,
  description: `Start your assessment`,
};
const Home = () => {
  return (
    <div>
      <div className="mt-6">
        <SystemCheck />
      </div>
    </div>
  );
};

export default Home;
