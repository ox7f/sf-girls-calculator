/* eslint-disable @typescript-eslint/no-unused-vars */
import { Agent, Fight } from '../../index';

export class AbstractEffect {
  add(agent: Agent, fight: Fight) {
    // implement logic to add effect
  }

  activate(agent: Agent, fight: Fight) {
    // implement logic to activate effect
  }

  deactivate(agent: Agent, fight: Fight) {
    // implement logic to deactivate effect
  }

  manage(agent: Agent, fight: Fight) {
    // implement logic to manage effect
  }
}
