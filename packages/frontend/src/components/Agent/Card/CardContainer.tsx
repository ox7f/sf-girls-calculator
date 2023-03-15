interface CardContainerProps {
  name: string;
}

const CardContainer: React.FC<CardContainerProps> = ({ name }) => {
  return (
    <div className="card__container">
      <div
        className="card__image"
        style={{
          backgroundSize: `${
            ['Pan'].includes(name)
              ? '60%'
              : ['Amikam', 'Chia', 'Feme', 'Iizuna', 'Kaja', 'Karry', 'Pan', 'Rei JK', 'Shiko'].includes(name)
              ? '80%'
              : '120%'
          }`,
          backgroundPosition: 'center',
          backgroundImage: `url(agents/${name.replace(' ', '')}.png)`
        }}
      ></div>
    </div>
  );
};

export default CardContainer;
