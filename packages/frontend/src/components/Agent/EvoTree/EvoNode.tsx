import { EvoNode as EvoNodeType } from '@sf-girls-calculator/calculator';

interface NodeProps {
  node: EvoNodeType;
  update: (node: EvoNodeType) => void;
}

const EvoNode: React.FC<NodeProps> = ({ node, update }) => {
  const clickHandler = () => {
    if (node.locked(node.parent ? node.parent : node)) return;
    node.levelUp();
    update(node);
  };

  const getDataText = () => {
    const words = node.name.split(' ');
    return `${words.map((word) => (/^(I|II|III|IV)$/.test(word) ? word : word.charAt(0))).join('')} ${node.level}`;
  };

  return (
    <div className="u-flex-column-reverse u-center m-1 ">
      <div
        style={{ fontSize: '1rem' }}
        className="avatar avatar--l text-gray-000 tooltip"
        data-text={getDataText()}
        data-tooltip={node.name}
        onClick={clickHandler}
      />

      <div className="u-flex u-flex-row">
        {node.children.map((childNode) => (
          <EvoNode node={childNode} update={update} key={childNode.name} />
        ))}
      </div>
    </div>
  );
};

export default EvoNode;
