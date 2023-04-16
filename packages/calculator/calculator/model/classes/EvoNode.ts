import { ApplyFunction, ApplyParams, ApplyResult, NewEvoNode } from '../../model';

const MAX_LEVEL = 5;

export class EvoNode {
  name: string;
  children: EvoNode[];
  level: number;
  parent: EvoNode | null;
  apply: ApplyFunction;

  constructor({ name, children = [], level = 0, apply = () => ({}) }: NewEvoNode, parent: EvoNode | null = null) {
    this.name = name;
    this.children = children.map((child) => new EvoNode(child, this));
    this.level = level;
    this.parent = parent;
    this.apply = apply;
  }

  applyNodeEffects(params: ApplyParams, effects: ApplyResult = {}) {
    const { fight, agent } = params;
    const result = this.apply(params);

    for (const [key, value] of Object.entries(result)) {
      const prevValue = effects[key] || 0;
      effects[key] = prevValue + (value || 0);
    }

    this.children.forEach((child) => child.applyNodeEffects({ fight, agent, node: child }, effects));

    return effects;
  }

  levelUp() {
    if (this.level >= MAX_LEVEL) {
      this.resetLevel();
      return;
    }

    this.level++;

    this.children.forEach((child) => {
      child.parent = this;
    });

    this.parent?.maxLevel();
  }

  maxLevel() {
    this.level = MAX_LEVEL;
    this.parent?.maxLevel();
  }

  resetLevel() {
    this.level = 0;
    this.children.forEach((child) => child.resetLevel());
  }
}
