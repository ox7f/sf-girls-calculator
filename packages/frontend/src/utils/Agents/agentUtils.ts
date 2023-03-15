export enum ClassTag {
  Artillery = 'tag--danger',
  Gunner = 'tag--info',
  Striker = 'tag--warning',
  Support = 'tag--success'
}

export const isSelected = (selected: string[], name: string) => {
  return selected.includes(name);
};

export const isLimitReached = (viewName: string, length: number) => {
  return (viewName === 'calculator' && length === 6) || (viewName === 'teamfinder' && length === 20);
};

export const addToSelected = (selected: string[], name: string) => {
  return [...selected, name];
};

export const removeFromSelected = (selected: string[], name: string) => {
  return selected.filter((n) => n !== name);
};
