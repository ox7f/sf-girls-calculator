import { ClassEnum, EvoNodes, NewAgent, NewEvoNode, NewStats } from '@sf-girls-calculator/calculator';
import { AgentItem, AgentNode, AgentStats } from './index';

type EvoNodeItem = {
  name: string;
  level: number;
  children: EvoNodeItem[];
};

export function convertStats({ baseSkillDamage, castTime, projectileNumber, ...rest }: NewStats): AgentStats {
  return rest;
}

export function convertNode({ name, children }: NewEvoNode): AgentNode[] {
  const nodes = children?.flatMap(convertNode) ?? [];
  return [
    {
      name,
      level: 0
    },
    ...nodes
  ];
}

export function convertAgentItem({ name, stats, nodes }: NewAgent, index: number): AgentItem {
  return {
    index,
    name,
    stats: convertStats(stats),
    nodes: nodes.flatMap(convertNode)
  };
}

export function convertNodeToItem(node: NewEvoNode): EvoNodeItem {
  const children = node.children?.map(convertNodeToItem) ?? [];
  return {
    name: node.name,
    level: 0,
    children
  };
}

export function transformNodes(nodes: NewEvoNode[]): EvoNodeItem[] {
  return nodes.map(convertNodeToItem);
}

export function getClassEvoNodes(className: ClassEnum): NewEvoNode[] {
  const nodesMap = {
    [ClassEnum.ARTILLERY]: EvoNodes.Artillery_Nodes,
    [ClassEnum.GUNNER]: EvoNodes.Gunner_Nodes,
    [ClassEnum.STRIKER]: EvoNodes.Striker_Nodes,
    [ClassEnum.SUPPORT]: EvoNodes.Support_Nodes
  };
  return nodesMap[className] ?? [];
}
