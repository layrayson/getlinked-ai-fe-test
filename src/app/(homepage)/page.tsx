import SystemCheck from "@/components/home/SystemCheck";
import { Section } from "@/components/shared/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Start assessment`,
  description: `Start your assessment`,
};
const Home = () => {
  return (
    <div className="h-screen relative">
      <div className="mt-6">
        <SystemCheck />
      </div>
      <Section className="mt-112px mb-66px">
        <div className="flex gap-x-2 items-center  ">
          <div>
            <p className="text-blueGray-300 text-sm">POWERED BY</p>
          </div>
          <div>
            <p className="text-blue-900 font-medium text-lg">GetLinked.AI</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
