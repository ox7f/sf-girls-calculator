import { ChangeEvent } from 'react';
import { ModalInput } from './index';
import { AgentItem } from '../../../atoms';

interface ModalBodyProps {
  agent: AgentItem;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface InputConfig {
  label: string;
  step?: number;
  abbrTitle?: string;
}

// TODO: add tabs (bio/skill/stats)
const ModalBody: React.FC<ModalBodyProps> = ({ agent, onChange }) => {
  const inputConfig: Record<string, InputConfig> = {
    attack_speed: { label: 'Attack Speed' },
    normal_attack: { label: 'Normal Attack' },
    skill_damage: { label: 'Skill Damage' },
    critical_rate: { label: 'Critical Rate', step: 0.01, abbrTitle: '100% = 1' },
    critical_damage: { label: 'Critical Damage', step: 0.01, abbrTitle: '100% = 1' },
    projectile_number: { label: 'Projectile Number' },
    cast_time: { label: 'Cast Time (seconds)' }
  };

  return (
    <div className="modal-body">
      <div className="r">
        <h3 className="font-alt font-light u-text-center">{agent.name}</h3>
      </div>

      {Object.entries(inputConfig).map(([name, { label, step, abbrTitle }]) => (
        <ModalInput
          key={name}
          name={name}
          label={label}
          value={`${agent[name]}`}
          onChange={onChange}
          step={step}
          placeholder={label}
          abbrTitle={abbrTitle}
        />
      ))}
    </div>
  );
};

export default ModalBody;
