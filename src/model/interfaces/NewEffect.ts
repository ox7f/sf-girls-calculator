import { EffectFunctionType } from "../types";

export interface NewEffect {
  begin?: number;
  duration?: number;
  apply: EffectFunctionType;
  remove: EffectFunctionType;
}
