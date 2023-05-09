import { FC } from 'react';
import { EvoNode as EvoNodeModel } from '@sf-girls-calculator/calculator';
import { getEvoNodeTooltip, getTreeNumber } from '../utils';

type EvoNodeProps = {
  node: EvoNodeModel;
  update: (node: EvoNodeModel) => void;
};

export const EvoNode: FC<EvoNodeProps> = ({ node, update }) => {
  const treeNumber = getTreeNumber(node);

  return (
    <div className={`u-flex-column-reverse u-center level-${treeNumber}-container`}>
      <div
        style={{
          borderRadius: '10%',
          fontSize: '1rem',
          fontWeight: '500',
          height: '4rem',
          width: '4rem',
          textShadow: '1px 1px 5px rgba(0, 0, 0, 1)',
          backgroundImage: `url(evoNodes/${node.name.replace(/\s/g, '')}.webp)`,
          backgroundPosition: 'center',
          backgroundSize: '100%'
        }}
        className={`avatar avatar--l text-white hover-grow tooltip tooltip--bottom level-${treeNumber}-item evo-node`}
        data-text={getEvoNodeTooltip(node)}
        data-tooltip={`${node.name} (Level: ${node.level})`}
        onClick={() => {
          node.levelUp();
          update(node);
        }}
      />
      <div className="u-flex u-flex-row">
        {node.children.map((child) => (
          <EvoNode key={child.name} node={child} update={update} />
        ))}
      </div>
    </div>
  );
};
