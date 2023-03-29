import { NewEvoNode, NewSkill, NewStats } from './index';
import { ClassEnum, OrganizationEnum, CupSizeEnum } from '../../enums/index';

export interface NewAgent {
  index: number;
  name: string;
  title: string;
  bio: string;
  organization: OrganizationEnum;
  cup_size: CupSizeEnum;
  class: ClassEnum;
  stats: NewStats;
  skill: NewSkill;
  nodes: NewEvoNode[];
}
