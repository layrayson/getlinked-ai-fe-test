import SystemCheck from "@/components/home/SystemCheck";
import Header from "@/components/shared/Header";

const Home = () => {
  const progress = 40;
  const radius = 5;
  const strokeWidth = 1;
  const diameter = radius * 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  return (
    <div>
      <div className="mt-6">
        <SystemCheck />
      </div>
    </div>
  );
};

export default Home;
