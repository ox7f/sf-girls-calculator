import { ChangeEvent } from 'react';

type optionType = {
  label: string;
  value: string;
};

interface SelectI {
  options: optionType[];
  value: string;
  firstOption: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectI> = ({ options, value, firstOption, onChange }: SelectI) => {
  return (
    <select className="select" value={value} onChange={onChange}>
      <option disabled value={''}>
        {firstOption}
      </option>

      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
