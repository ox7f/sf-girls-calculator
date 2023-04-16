import { EvoNode as EvoNodeModel } from '@sf-girls-calculator/calculator';

interface Props {
  node: EvoNodeModel;
  update: (node: EvoNodeModel) => void;
}

export const EvoNode: React.FC<Props> = ({ node, update }) => {
  const clickHandler = () => {
    node.levelUp();
    update(node);
  };

  const getDataText = () =>
    `${node.name
      .split(' ')
      .map((word) => (/^(I|II|III|IV)$/.test(word) ? word : word.charAt(0)))
      .join('')} ${node.level}`;

  const renderChildren = (): React.ReactNode =>
    node.children.map((child) => <EvoNode node={child} update={update} key={child.name} />);

  return (
    <div className="u-flex-column-reverse u-center m-1 ">
      <div
        style={{ fontSize: '1rem' }}
        className="avatar avatar--l text-gray-000 tooltip"
        data-text={getDataText()}
        data-tooltip={node.name}
        onClick={clickHandler}
      />
      <div className="u-flex u-flex-row">{renderChildren()}</div>
    </div>
  );
};
