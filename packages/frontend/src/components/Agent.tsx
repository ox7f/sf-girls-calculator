import { NewAgent } from 'sf-girls-calculator-calculator';
import { Card } from './UI';

const Agent: React.FC<NewAgent> = (agent: NewAgent) => {
  return <Card header={agent.name} body={`${agent.skill.name}: ${agent.skill.description}`} footer={agent.class} />;
};

export default Agent;
