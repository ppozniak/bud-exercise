import { ReactNode } from "react";
import "./index.css";

interface IProps {
  children: ReactNode;
}

export const Container = ({ children }: IProps) => {
  return <div className="container">{children}</div>;
};
