import { EvoNode as EvoNodeClass } from '@sf-girls-calculator/calculator';
import { useAtom, useAtomValue } from 'jotai';
import { useMemo } from 'react';

import { Button } from '../common';
import { EvoNode } from './EvoNode';
import { getAllChildren, getAllParents, overwriteEvoTree } from '../utils';
import { AgentDB, AgentNameAtom } from '../../atoms';

export const EvoTree: React.FC = () => {
  const agentName = useAtomValue(AgentNameAtom);
  const [agent, setAgent] = useAtom(AgentDB.item(agentName));

  if (!agent) {
    return null;
  }

  const nodes = useMemo(() => overwriteEvoTree(agent), [agent]);

  const updateNode = (node: EvoNodeClass) => {
    const newNodes = getAllParents(node).concat(getAllChildren(node));

    setAgent({
      ...agent,
      nodes: agent.nodes.map((node) => {
        const matchingNode = newNodes.find((newNode) => newNode.name === node.name);
        return matchingNode ? matchingNode : node;
      })
    });
  };

  const updateNodesLevel = (level: number) => {
    setAgent({ ...agent, nodes: agent.nodes.map((node) => ({ ...node, level })) });
  };

  return (
    <>
      <div className="content u-text-center pt-3">
        <div className="u-flex u-center u-overflow-auto" style={{ flexWrap: 'nowrap', justifyContent: 'normal' }}>
          {nodes.map((node) => (
            <EvoNode key={node.name} node={node} update={updateNode} />
          ))}
        </div>
      </div>

      <div className="btn-group btn-group-fill">
        <Button text="Max" onClick={() => updateNodesLevel(5)} />
        <Button text="Reset" onClick={() => updateNodesLevel(0)} />
      </div>
    </>
  );
};
