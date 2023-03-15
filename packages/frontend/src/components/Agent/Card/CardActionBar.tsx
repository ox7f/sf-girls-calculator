import { Button } from '../../Common';

interface CardActionBarProps {
  isSelected: boolean;
  edit: () => void;
  select: () => void;
}

const CardActionBar: React.FC<CardActionBarProps> = ({ isSelected, edit, select }) => {
  return (
    <div className="card__action-bar u-center">
      {isSelected && <Button text="Selected" type="btn-success" onClick={select} />}
      {!isSelected && <Button text="Select" type="btn-transparent" onClick={select} />}

      <Button text="Edit" type="btn-transparent" onClick={edit} />
    </div>
  );
};

export default CardActionBar;
