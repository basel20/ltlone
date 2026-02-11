import React, { useState } from 'react';

const DropList = ({ title, data = [], width, BGcolor, color = "text-white", hoverColor, onSelect }) => {
  const [open, setOpen] = useState(false);
  const [searchTitle, setSearchTitle] = useState(title);

  const toggleDropdown = () => setOpen(!open);

  const handleSelect = (item) => {
    setSearchTitle(item);
    setOpen(false);
    if (onSelect) onSelect(item);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className={`${width} h-12  ${BGcolor} rounded-2xl ${color} font-semibold hover:${hoverColor} transition`}
      >
        {searchTitle}
      </button>

      {open && (
        <ul className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-20">
          {data.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropList;
