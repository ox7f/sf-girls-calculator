import { ChangeEvent } from 'react';

type optionType = {
  label: string;
  value: string;
};

interface SelectInterface {
  options: optionType[];
  value: string;
  defaultLabel: string;
  onChangeHandler: (event: ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
  placeholder?: string;
}

const Select: React.FC<SelectInterface> = ({
  options,
  value,
  defaultLabel,
  onChangeHandler,
  label = '',
  placeholder = ''
}: SelectInterface) => {
  return (
    <>
      <label>{label}</label>

      <select className="select" placeholder={placeholder} value={value} onChange={onChangeHandler}>
        <option disabled value={''}>
          {defaultLabel}
        </option>

        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
