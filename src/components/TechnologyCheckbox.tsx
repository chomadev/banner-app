import { useState } from 'react';

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
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        {technology}
      </label>
    </div>
  );
};

export default TechnologyCheckbox;
