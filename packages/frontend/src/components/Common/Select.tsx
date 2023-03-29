import { ChangeEvent } from 'react';

interface SelectProps {
  value: string;
  options: {
    label: string;
    value: string;
  }[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: React.FC<SelectProps> = ({ value, options, onChange }) => {
  return (
    <select className="select" value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
