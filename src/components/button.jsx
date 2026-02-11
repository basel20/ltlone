import React from 'react';

export const ButtonPrimary = ({width , title, color, BGcolor, hoverColor, onClick, height = 'h-12'}) => {

  return (
    <button onClick={onClick} className={`${width} ${height} ${BGcolor} rounded-2xl ${color} font-semibold  hover:${hoverColor}`}>
        {title}
    </button>
  );
};
