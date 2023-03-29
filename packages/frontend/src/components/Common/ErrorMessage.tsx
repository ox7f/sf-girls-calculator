interface ErrorProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorProps> = ({ message = '' }) => {
  return message ? (
    <div className="toast toast--primary">
      <h4 className="toast__title">Something went wrong!</h4>
      <p>{message}</p>
    </div>
  ) : null;
};
