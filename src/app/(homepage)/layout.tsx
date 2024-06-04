import Header from "@/components/shared/Header";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <div>
      <div>
        <div className="fixed top-0 w-full">
          <Header />
        </div>
        <div className="h-98" />
      </div>
      {children}
    </div>
  );
};

export default Layout;
