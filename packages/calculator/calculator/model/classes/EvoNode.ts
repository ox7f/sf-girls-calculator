import { EvoNodeFunctionType, NewEvoNode } from '../index';

const MAX_LEVEL = 5;

export class EvoNode {
  name: string;
  affects: string;
  children: EvoNode[];
  level: number;
  parent: EvoNode | null;
  rate: number;
  locked: (node: EvoNode) => boolean;
  apply: EvoNodeFunctionType;

  constructor({ name, apply, locked, affects = '', children = [], level = 0, rate = 0 }: NewEvoNode, parent?: EvoNode) {
    this.name = name;
    this.affects = affects;
    this.children = children.map((child) => new EvoNode(child, this));
    this.level = level;
    this.parent = parent ?? null;
    this.rate = rate;
    this.apply = apply;
    this.locked = locked;
  }

  levelUp() {
    if (this.level >= MAX_LEVEL) return this.resetLevel();

    this.level++;

    // update the parent property of each child node
    for (const child of this.children) {
      child.parent = this;
    }
  }

  resetLevel() {
    this.level = 0;

    // reset the level of each child node recursively
    for (const child of this.children) {
      child.resetLevel();
    }
  }
}
