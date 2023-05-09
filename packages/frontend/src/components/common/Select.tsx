import { ChangeEvent, FC } from 'react';

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  value: string;
  options: Option[];
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
};

export const Select: FC<SelectProps> = ({
  value,
  options,
  onChange = () => console.log('Please provide a onChange function.')
}) => {
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
