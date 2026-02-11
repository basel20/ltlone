import React from 'react';

export const TextareaPrimary = ({width = 'w-full', height, title, type, onChange, value, name, placeholder, error}) => {
  return(
    <div className={`${width} flex flex-col items-start gap-1`}>
        <h6 className='pl-2'>{title}</h6>
        <textarea
        className={`w-full ${height} px-3 py-2 rounded-2xl border-[1px] border-dotted border-[#4E6766] focus:border-[2px] focus:outline-none focus:ring-0 focus:border-[#E69500]`}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        rows={4}
        onChange={onChange}/>
        {error && <p className="pl-2 text-red-500 text-sm">{error}</p>}
    </div>
  )
}

const InputPrimary = ({width = 'w-full', height, title, type, onChange, value, name, placeholder, error}) => {
  return (
    <div className={`${width} flex flex-col items-start gap-1`}>
        <h6 className='pl-2'>{title}</h6>
        <input
        className={`w-full ${height} px-3 rounded-2xl border-[1px] border-dotted border-[#4E6766] focus:border-[2px] focus:outline-none focus:ring-0 focus:border-[#E69500]`}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}/>
        {error && <p className="pl-2 text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default InputPrimary;
