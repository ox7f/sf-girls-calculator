import { NewEvoNode, NewSkill, NewStats } from '../interfaces';
import { ClassEnum, CupSizeEnum, OrganizationEnum } from '../../enums';

export interface NewAgent {
  index: number;
  name: string;
  title: string;
  bio: string;
  organization: OrganizationEnum;
  cupSize: CupSizeEnum;
  class: ClassEnum;
  stats: NewStats;
  skill: NewSkill;
  nodes: NewEvoNode[];
}
