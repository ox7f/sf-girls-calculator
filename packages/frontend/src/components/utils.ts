import { Agent, Agents, EvoNode, HistoryType, ResultType } from '@sf-girls-calculator/calculator';
import { AgentItem, AgentNode } from '../atoms';

export enum ClassTag {
  Artillery = 'tag--danger',
  Gunner = 'tag--info',
  Striker = 'tag--warning',
  Support = 'tag--success'
}

export enum TabEnum {
  Stats = 'Stats',
  Bio = 'Bio',
  Skill = 'Skill',
  EvoTree = 'Evo Tree'
}

export type ViewName = 'calculator' | 'teamfinder';

export interface InputConfig {
  label: string;
  min?: number;
  step?: number;
  abbrTitle?: string;
}

export const inputConfig: Record<string, InputConfig> = {
  attackSpeed: { label: 'Attack Speed' },
  normalAttack: { label: 'Normal Attack' },
  skillDamage: { label: 'Skill Damage' },
  criticalRate: { label: 'Critical Rate', step: 0.01, abbrTitle: 'for reference: 100% = 1' },
  criticalDamage: { label: 'Critical Damage', step: 0.01, abbrTitle: 'for reference: 100% = 1' }
};

export const agentIsSelected = (selectedAgentNames: string[], agentName: string) =>
  selectedAgentNames.includes(agentName);

export const isLimitOfSelectionReached = (viewName: ViewName, selectedAgentsLength: number) =>
  selectedAgentsLength === (viewName === 'calculator' ? 10 : 20);

export const addAgentToSelectedList = (selectedAgentNames: string[], agentName: string) => [
  ...selectedAgentNames,
  agentName
];

export const removeAgentFromSelectedList = (selectedAgents: string[], agentName: string) =>
  selectedAgents.filter((agent) => agent !== agentName);

export const getColorFromString = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += ('00' + value.toString(16)).substr(-2);
  }
  return color;
};

export const prepareGraphData = (result: ResultType) => {
  const data: Array<HistoryType[]> = [];

  for (const [index, agent] of result.team.entries()) {
    data[index] = [];

    for (const event of agent.history) {
      data[index].push({ ...event, time: event.time / 1000 });
    }
  }

  return data;
};

export const createWrapper = (wrapperId: string) => {
  const wrapper = document.createElement('div');
  wrapper.setAttribute('id', wrapperId);
  document.body.appendChild(wrapper);
  return wrapper;
};

export const getAllParents = (node: EvoNode): AgentNode[] => {
  const parents: AgentNode[] = [];
  let parent = node.parent;

  while (parent) {
    parents.push({ name: parent.name, level: parent.level });
    parent = parent.parent;
  }

  return parents;
};

export const getAllChildren = (node: EvoNode): AgentNode[] => [
  { name: node.name, level: node.level },
  ...node.children.flatMap(getAllChildren)
];

export const overwriteEvoTree = (agent: AgentItem): EvoNode[] => {
  const defaultAgent = Agents.Agents.find((a) => a.name === agent.name);

  if (!defaultAgent) {
    return [];
  }

  const iterateNodes = (nodes: EvoNode[], agentNodes: AgentNode[]) => {
    for (const node of nodes) {
      const matchingNode = agentNodes.find((n) => n.name === node.name);

      if (matchingNode) {
        node.level = matchingNode.level;
      }

      if (node.children.length > 0) {
        iterateNodes(node.children, agentNodes);
      }
    }
  };

  const initAgent = new Agent(defaultAgent);
  iterateNodes(initAgent.nodes, agent.nodes);

  return initAgent.nodes;
};
