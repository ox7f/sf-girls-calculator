interface Props {
  message: string;
}

export const ErrorMessage: React.FC<Props> = ({ message }) => {
  if (!message) {
    return null;
  }

  return (
    <div className="toast toast--primary">
      <h4 className="toast__title">Something went wrong!</h4>
      <p>{message}</p>
    </div>
  );
};
