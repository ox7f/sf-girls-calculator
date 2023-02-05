import { NewTarget } from 'sf-girls-calculator-calculator';
import { Card } from './UI';

const Target: React.FC<NewTarget> = (target: NewTarget) => {
  return (
    <Card
      header={target.name}
      body={`Time: ${target.duration}s, Health:${target.health}`}
      footer={`Critical Resistance: ${target.critical_resistance || 0}`}
    />
  );
};

export default Target;
