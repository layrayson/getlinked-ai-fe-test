import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};
export const Section = ({ children, className = "" }: Props) => {
  return <div className={"max-w-1149px mx-auto " + className}>{children}</div>;
};
