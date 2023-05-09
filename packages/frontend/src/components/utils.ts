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

export function agentIsSelected(selectedAgentNames: string[], agentName: string): boolean {
  return selectedAgentNames.includes(agentName);
}

export function isLimitOfSelectionReached(viewName: ViewName, selectedAgentsLength: number): boolean {
  return selectedAgentsLength === (viewName === 'calculator' ? 7 : 20);
}

export function addAgentToSelectedList(viewName: ViewName, selectedAgentNames: string[], agentName: string): string[] {
  return isLimitOfSelectionReached(viewName, selectedAgentNames.length)
    ? selectedAgentNames
    : [...selectedAgentNames, agentName];
}

export function removeAgentFromSelectedList(selectedAgents: string[], agentName: string): string[] {
  return selectedAgents.filter((agent) => agent !== agentName);
}

export function getColorFromString(str: string): string {
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
}

export function prepareGraphData(result: ResultType): Array<HistoryType[]> {
  const data: Array<HistoryType[]> = [];

  for (const [index, agent] of result.team.entries()) {
    data[index] = [];

    for (const event of agent.history) {
      data[index].push({ ...event, time: event.time / 1000 });
    }
  }

  return data;
}

export function createWrapper(wrapperId: string) {
  const wrapper = document.createElement('div');
  wrapper.setAttribute('id', wrapperId);
  document.body.appendChild(wrapper);
  return wrapper;
}

export function getAllNodes(nodes: EvoNode[]): AgentNode[] {
  return nodes.flatMap(getAllNodeChildren);
}

export function getAllNodeParents(node: EvoNode): AgentNode[] {
  const parents: AgentNode[] = [];
  let parent = node.parent;

  while (parent) {
    parents.push({ name: parent.name, level: parent.level });
    parent = parent.parent;
  }

  return parents;
}

export function getAllNodeChildren(node: EvoNode): AgentNode[] {
  return [{ name: node.name, level: node.level }, ...node.children.flatMap(getAllNodeChildren)];
}

export function overwriteEvoTree(agent: AgentItem): EvoNode[] {
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
}

export function getTreeNumber(node: EvoNode) {
  if (!node.parent) {
    return 0;
  }

  return 1;
}

export function getEvoNodeTooltip(node: EvoNode) {
  return `${node.name
    .split(' ')
    .map((word) => (/^(I|II|III|IV)$/.test(word) ? word : word.charAt(0)))
    .join('')} ${node.level}`;
}
