import { ChangeEvent } from 'react';

type Option = {
  label: string;
  value: string;
};

interface Props {
  value: string;
  options: Option[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: React.FC<Props> = ({ value, options, onChange }) => {
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
