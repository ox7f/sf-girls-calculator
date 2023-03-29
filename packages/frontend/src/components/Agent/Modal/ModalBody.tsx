import { useAtomValue } from 'jotai';
import { ChangeEvent, useState } from 'react';
import { ModalInput } from './index';
import { AgentItem, AgentListAtom } from '../../../atoms';
import { EvoTree } from '../EvoTree';

interface ModalBodyProps {
  agent: AgentItem;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface InputConfig {
  label: string;
  step?: number;
  abbrTitle?: string;
}

enum TabEnum {
  stats = 'Stats',
  bio = 'Bio',
  skill = 'Skill',
  evo_tree = 'Evo Tree'
}

const ModalBody: React.FC<ModalBodyProps> = ({ agent, onChange }) => {
  const [currentTab, setCurrentTab] = useState<TabEnum>(TabEnum.stats);
  const { bio, skill } = useAtomValue(AgentListAtom).find((a) => a.name === agent.name) ?? {
    bio: 'No bio - will add it later',
    skill: { description: 'No skill description - will add it later' }
  };

  const inputConfig: Record<string, InputConfig> = {
    attack_speed: { label: 'Attack Speed' },
    normal_attack: { label: 'Normal Attack' },
    skill_damage: { label: 'Skill Damage' },
    critical_rate: { label: 'Critical Rate', step: 0.01, abbrTitle: 'for reference: 100% = 1' },
    critical_damage: { label: 'Critical Damage', step: 0.01, abbrTitle: 'for reference: 100% = 1' }
  };

  const renderBody = () => {
    switch (currentTab) {
      case TabEnum.stats:
        return Object.entries(inputConfig).map(([name, { label, step, abbrTitle }]) => (
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
        ));
      case TabEnum.bio:
        return <p>{bio}</p>;
      case TabEnum.skill:
        return <p>{skill.description}</p>;
      case TabEnum.evo_tree:
        return <EvoTree />;
    }
  };

  return (
    <div className="modal-body" style={{ minHeight: '700px' }}>
      <div className="r">
        <h3 className="font-alt font-light u-text-center">{agent.name}</h3>
      </div>

      <div className="tab-container tabs-fill">
        <ul>
          {Object.values(TabEnum).map((tab) => (
            <li key={tab} className={tab === currentTab ? 'selected' : ''} onClick={() => setCurrentTab(tab)}>
              <div className="tab-item-content">{tab}</div>
            </li>
          ))}
        </ul>
      </div>

      {renderBody()}
    </div>
  );
};

export default ModalBody;
