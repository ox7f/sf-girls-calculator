export type Rune = {
  stat_1: string;
  stat_2: string;
  stat_3: string;
  [key: string]: string;
};

export type RuneSet = {
  type_1: Rune;
  type_2: Rune;
  type_3: Rune;
  [key: string]: Rune;
};

export type RuneData = {
  type_1: Rune[];
  type_2: Rune[];
  type_3: Rune[];
  [key: string]: Rune[];
};
