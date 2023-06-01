import { NewEvoNode, NewSkill, NewStats } from '../interfaces';
import { ClassEnum, CupSizeEnum, OrganizationEnum, RarityEnum } from '../../enums';

export interface NewAgent {
  index: number;
  name: string;
  title: string;
  bio: string;
  rarity: RarityEnum;
  organization: OrganizationEnum;
  cupSize: CupSizeEnum;
  class: ClassEnum;
  stats: NewStats;
  skill: NewSkill;
  nodes: NewEvoNode[];
}
