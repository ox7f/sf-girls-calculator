import { calculate_team, Agents, Targets } from 'sf-girls-calculator-calculator';

const Result: React.FC = () => {
  const calculate = () => {
    const result = calculate_team([Agents.Yuki], Targets.Dummy_Stage_4);
    console.log(
      'calculate',
      result.team.map((agent) => agent.damage_dealt)
    );
  };

  return (
    <article>
      <button type="submit" onClick={calculate}>
        Calculate
      </button>
    </article>
  );
};

export default Result;
