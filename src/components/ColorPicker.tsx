import { useState } from 'react';
import { ChromePicker, ColorResult } from 'react-color';

interface ColorPickerProps {
  label: string;
  color: string;
  onChange: (color: ColorResult) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ label, color, onChange }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  return (
    <div>
      <label>{label}</label>
      <div
        style={{ background: color, width: '36px', height: '14px', borderRadius: '2px', cursor: 'pointer' }}
        onClick={() => setDisplayColorPicker(!displayColorPicker)}
      />
      {displayColorPicker && (
        <div style={{ position: 'absolute', zIndex: '2' }}>
          <div
            style={{ position: 'fixed', top: '0px', right: '0px', bottom: '0px', left: '0px' }}
            onClick={() => setDisplayColorPicker(false)}
          />
          <ChromePicker color={color} onChange={onChange} />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
