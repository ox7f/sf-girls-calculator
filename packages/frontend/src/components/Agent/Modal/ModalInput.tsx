import { ChangeEvent } from 'react';

interface ModalInputProps {
  name: string;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  step?: number;
  placeholder?: string;
  abbrTitle?: string;
}

const ModalInput: React.FC<ModalInputProps> = ({
  name,
  label,
  value,
  onChange,
  step = 1,
  placeholder = '',
  abbrTitle = null
}) => (
  <div className="input-control">
    <label className="font-bold">
      {label}
      {abbrTitle && (
        <abbr style={{ marginLeft: '5px' }} title={abbrTitle}>
          ?
        </abbr>
      )}
    </label>
    <input type="number" step={step} placeholder={placeholder} name={name} value={value} onChange={onChange} />
  </div>
);

export default ModalInput;
