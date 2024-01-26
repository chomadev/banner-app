import { useState } from 'react';
import { Input } from './ui/input';

interface TechnologyCheckboxProps {
  technology: string;
  onChange: (technology: string, isChecked: boolean) => void;
}

const TechnologyCheckbox: React.FC<TechnologyCheckboxProps> = ({ technology, onChange }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    onChange(technology, !checked);
  };

  return (
    <div>
      <label className="flex items-center space-x-2">
        <Input className="w-4 h-4" id="skill1" name="skill1" type="checkbox"
          checked={checked} onChange={handleChange}
        />
        <span>{technology}</span>
      </label>
    </div>
  );
};

export default TechnologyCheckbox;
