import { HistoryType } from '@sf-girls-calculator/calculator';

type Props = {
  logs: HistoryType[];
};

// TODO:
export const Logs: React.FC<Props> = ({ logs }) => {
  return (
    <div style={{ maxHeight: '100px', overflowY: 'auto' }}>
      {logs.map(({ time, totalDamage, actions }) => (
        <div key={time} style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '10px' }}>{time}s</span>
          <span style={{ marginRight: '10px' }}>Total: {totalDamage}</span>
          {actions.map(({ attackMode, damage, effectType, type, bonus }, index) => (
            <span key={index} style={{ marginRight: '10px', fontSize: '12px' }}>
              {type} {attackMode} {damage} {effectType} {bonus}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};
