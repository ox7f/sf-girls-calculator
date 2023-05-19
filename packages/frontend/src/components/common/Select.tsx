import { ChangeEvent, FC } from 'react';

type SelectProps = {
  value: string;
  options: {
    label: string;
    value: string;
  }[];
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
};

export const Select: FC<SelectProps> = ({ value, options, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
