import "./index.css";

interface IProps {
  error?: any;
}

export const ErrorMessage = ({ error }: IProps) => {
  return (
    <div className="error-message" role="alert">
      {error?.message ||
        "An unknown error has occurred. Please try again and if problem persist contact us."}
    </div>
  );
};
