import React from 'react';

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
}

export const Slider: React.FC<SliderProps> = ({ value, onChange, min, max }) => {
  return (
    <div className="relative">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <div className="absolute -top-4 right-0 text-sm text-gray-500">
        {value}
      </div>
    </div>
  );
}; 