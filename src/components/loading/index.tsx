import "./index.css";

interface IProps {
  message?: string;
}

export const Loading = ({ message = "Loading..." }: IProps) => (
  <div className="loader">
    {message} <div className="loader__spinner"></div>
  </div>
);
