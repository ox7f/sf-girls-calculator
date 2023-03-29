interface CardBodyProps {
  bio?: string;
}

const CardBody: React.FC<CardBodyProps> = ({ bio }) => {
  return (
    <div className="card__body content" style={{ width: '90%' }}>
      <p>{bio ?? 'No Bio - will add it later'}</p>
    </div>
  );
};

export default CardBody;
