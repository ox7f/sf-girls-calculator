import { Agent, Fight } from '../../classes';

export abstract class AbstractEffect {
  abstract activate(agent: Agent, fight: Fight): void;
  abstract add(agent: Agent, fight: Fight): void;
  abstract deactivate(agent: Agent, fight: Fight): void;
  abstract manage(agent: Agent, fight: Fight): void;
}
