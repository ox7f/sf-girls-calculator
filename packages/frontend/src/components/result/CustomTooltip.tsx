import { TooltipProps } from 'recharts';
import { ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { HistoryActionTypeEnum, EffectTypeEnum, HistoryType } from '@sf-girls-calculator/calculator';

export const CustomTooltip: React.FC<TooltipProps<ValueType, string>> = ({ active, payload }) => {
  if (!active || !payload) return null;

  const getInfoText = (event: HistoryType) => {
    const actions = [];

    for (const action of event.actions) {
      let tooltip = '';

      if (action.effectType === EffectTypeEnum.NONE) {
        tooltip = `${action.attackMode} ${action.type} ${action.damage}`;
      } else if (action.type === HistoryActionTypeEnum.USE_SKILL || action.type == HistoryActionTypeEnum.REMOVE) {
        tooltip = `${action.type} (${action.effectType})`;
      } else if (action.effectType === EffectTypeEnum.DOT || action.effectType === EffectTypeEnum.DAMAGE) {
        tooltip = `${action.effectType} ${action.damage}`;
      }

      if (action.bonus && action.bonus.length > 0) {
        tooltip += ` (${action.bonus.join(', ')})`;
      }

      actions.push(tooltip);
    }

    return <small>{actions.join(', ')}</small>;
  };

  const createTooltip = (color = '', name = '', event: HistoryType) => {
    return (
      <div key={name}>
        <p style={{ color }}>
          <strong>{`${name}: ${event.totalDamage} `}</strong>
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
