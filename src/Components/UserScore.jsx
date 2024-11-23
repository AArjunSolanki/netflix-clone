import React from "react";
import "../assets/styles/circularProgressWithLabel.scss";

function CircularProgressWithLabel({ value }) {
  const percentage = (value / 10) * 100;
  const roundedValue = Math.round(value);

  return (
    <div className="circular-progress">
      <svg className="circular-progress__circle" viewBox="0 0 36 36">
        <circle
          className="circular-progress__background"
          cx="18"
          cy="18"
          r="16"
        />
        <circle
          className="circular-progress__progress"
          cx="18"
          cy="18"
          r="16"
          style={{
            strokeDasharray: `${percentage} 100`,
          }}
        />
      </svg>
      <div className="circular-progress__label">
        <span>{`${roundedValue}/10`}</span>
      </div>
    </div>
  );
}

export default CircularProgressWithLabel;
