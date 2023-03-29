import { ClassEnum, EvoNodes, NewEvoNode } from '@sf-girls-calculator/calculator';
import { EvoNodeItem } from './index';

export const convertNodeToItem = (node: NewEvoNode): EvoNodeItem => {
  const children = node.children?.map((child) => convertNodeToItem(child)) || [];

  return {
    name: node.name,
    level: 0,
    children
  };
};

export const transformNodes = (nodes: NewEvoNode[]) => {
  return nodes.map((node) => convertNodeToItem(node));
};

export const getClassEvoNodes = (className: ClassEnum) => {
  switch (className) {
    case ClassEnum.Artillery:
      return EvoNodes.Artillery_Nodes;
    case ClassEnum.Gunner:
      return EvoNodes.Gunner_Nodes;
    case ClassEnum.Striker:
      return EvoNodes.Striker_Nodes;
    case ClassEnum.Support:
      return EvoNodes.Support_Nodes;
  }
};
