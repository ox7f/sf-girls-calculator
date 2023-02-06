import { Targets as TargetsData } from 'sf-girls-calculator-calculator';
import { Target } from './index';

const Targets: React.FC = () => {
  const targets = [];

  for (const [key, values] of Object.entries(TargetsData)) {
    targets.push({ key, values });
  }

  return (
    <article>
      {targets.map((target) => (
        <Target key={target.key} {...target.values} />
      ))}
    </article>
  );
};

export default Targets;
