import { ChangeEvent, useState } from 'react';
import './range.css';
interface RangeSliderProps {
  min: number;
  max: number;
  onMinValueChange?: (value: number) => void;
  onMaxValueChange?: (value: number) => void;
}

function RangeSlider({
  max,
  min,
  onMaxValueChange = () => {},
  onMinValueChange = () => {},
}: RangeSliderProps) {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  // Dynamic gap: 1% of the total range
  const gap = (max - min) * 0.01;

  const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (maxValue - value >= gap) {
      setMinValue(value);
      onMinValueChange(value);
    }
  };

  const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value - minValue >= gap) {
      setMaxValue(value);
      onMaxValueChange(value);
    }
  };

  const minPercent = ((minValue - min) / (max - min)) * 100;
  const maxPercent = ((maxValue - min) / (max - min)) * 100;

  return (
    <div style={{ position: 'relative', height: '60px' }}>
      {/* Track background */}
      <div className="range-track-background" />

      {/* Active track */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: `${minPercent}%`,
          right: `${100 - maxPercent}%`,
          height: '4px',
          background: 'var(--primary)',
          borderRadius: '2px',
          transform: 'translateY(-50%)',
        }}
      />

      {/* Min range input */}
      <input
        type="range"
        min={min}
        max={max}
        value={minValue}
        onChange={handleMinChange}
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          transform: 'translateY(-50%)',
          width: '100%',
          height: '4px',
          background: 'transparent',
          pointerEvents: 'none',
          appearance: 'none',
          WebkitAppearance: 'none',
          zIndex: 3,
        }}
        className="range-input"
      />

      {/* Max range input */}
      <input
        type="range"
        min={min}
        max={max}
        value={maxValue}
        onChange={handleMaxChange}
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          transform: 'translateY(-50%)',
          width: '100%',
          height: '4px',
          background: 'transparent',
          pointerEvents: 'none',
          appearance: 'none',
          WebkitAppearance: 'none',
          zIndex: 4,
        }}
        className="range-input"
      />
    </div>
  );
}

export default RangeSlider;
