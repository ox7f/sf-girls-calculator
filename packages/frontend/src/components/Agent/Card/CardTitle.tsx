import { ClassEnum } from 'sf-girls-calculator-calculator';
import { ClassTag } from '../../../utils';

interface CardTitleProps {
  name: string;
  title: string;
  class: ClassEnum;
}

const CardTitle: React.FC<CardTitleProps> = ({ name, title, class: className }) => {
  return (
    <div className="card__mobile-title">
      <div className="content pl-2 pr-2">
        <div className="tile">
          <div className="tile__container row">
            <div className="col">
              <p className="tile__title">{name}</p>
              <p className="tile__subtitle">{title}</p>
            </div>
          </div>
          <div className="col pt-1">
            <div className={`tag tag--sm ${ClassTag[className]}`}>{className}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTitle;
