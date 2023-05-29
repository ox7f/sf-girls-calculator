import { EffectParams } from '../../types';

export abstract class AbstractEffect {
  abstract activate(params: EffectParams): void;
  abstract add(params: EffectParams): void;
  abstract deactivate(params: EffectParams): void;
  abstract manage(params: EffectParams): void;
}
