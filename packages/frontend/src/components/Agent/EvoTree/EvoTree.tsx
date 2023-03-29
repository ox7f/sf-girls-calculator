import { useAtom, useAtomValue } from 'jotai';
import { EvoNode as EvoNodeType } from '@sf-girls-calculator/calculator';
import { EvoNode } from './index';
import { AgentEvoTreeDB, AgentListAtom, AgentNameAtom } from '../../../atoms';

const EvoTree: React.FC = () => {
  const agentName = useAtomValue(AgentNameAtom);
  const [agentList, setAgentList] = useAtom(AgentListAtom);
  const [agentNodes, setAgentNodes] = useAtom(AgentEvoTreeDB.item(agentName));
  const agent = agentList.find((agent) => agent.name === agentName);

  if (!agent) return null;

  const updateNode = (node: EvoNodeType) => {
    setAgentList((prev) => {
      const newAgentList = [...prev];
      const newAgent = newAgentList.find((agent) => agent.name === agentName);

      if (!newAgent) return prev;

      newAgent.nodes = newAgent.nodes.map((n) => {
        if (n.name === node.name) return node;
        return n;
      });

      return newAgentList;
    });
    // TODO: update node in db
    // setAgentNodes((prev) => {
    //   if (!prev) return prev;
    //   const newNodes = [...prev.nodes];
    //   const idx = newNodes.findIndex((n) => n.name === node.name);
    //   newNodes[idx] = node;
    //   return newNodes;
    // });
  };

  return (
    <div className="u-flex u-center u-overflow-auto" style={{ flexWrap: 'nowrap', justifyContent: 'normal' }}>
      {agent.nodes.map((node) => (
        <EvoNode node={node} update={updateNode} key={node.name} />
      ))}
    </div>
  );
};

export default EvoTree;
