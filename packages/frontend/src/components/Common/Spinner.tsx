interface SpinnerProps {
  loading: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="animated loading hide-text">
      <p>...</p>
    </div>
  );
};

export default Spinner;
