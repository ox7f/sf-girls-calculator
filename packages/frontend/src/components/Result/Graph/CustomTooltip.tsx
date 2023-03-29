import { TooltipProps } from 'recharts';
import { ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { ActionEnum, EffectTypeEnum, HistoryType } from '@sf-girls-calculator/calculator';

const CustomTooltip: React.FC<TooltipProps<ValueType, string>> = ({ active, payload }) => {
  if (!active || !payload) return null;

  const getInfoText = (event: HistoryType) => {
    const actions = [];

    for (const action of event.actions) {
      let tooltip = '';

      if (action.effect_type === EffectTypeEnum.None) {
        tooltip = `${action.attack_mode} ${action.type} ${action.damage}`;
      } else if (action.type === ActionEnum.Apply || action.type == ActionEnum.Remove) {
        tooltip = `${action.type} (${action.effect_type})`;
      } else if (action.effect_type === EffectTypeEnum.DOT || action.effect_type === EffectTypeEnum.Damage) {
        tooltip = `${action.effect_type} ${action.damage}`;
      }

      actions.push(tooltip);
    }

    return <small>{actions.join(', ')}</small>;
  };

  const createTooltip = (color = '', name = '', event: HistoryType) => {
    return (
      <div key={name}>
        <p style={{ color }}>
          <strong>{`${name}: ${event.total_damage} `}</strong>
          {getInfoText(event)}
        </p>
      </div>
    );
  };

  return (
    <div className="agent-graph-tooltip" style={{ backgroundColor: 'white', opacity: 0.8 }}>
      <p>{payload[0].payload.time}s </p>
      {payload.map((data) => {
        const { color, name, payload: event } = data;
        return createTooltip(color, name, event);
      })}
    </div>
  );
};

export default CustomTooltip;
