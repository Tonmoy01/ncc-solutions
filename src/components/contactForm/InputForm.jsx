// const InputForm = ({ type, id, name, value, onChange, className }) => {
//   return (
//     <input
//       type={type}
//       id={id}
//       name={name}
//       value={value}
//       onChange={onChange}
//       className={className}
//     />
//   );
// };
// export default InputForm;

import React from 'react';

const InputForm = ({
  type,
  id,
  name,
  value,
  onChange,
  className,
  label,
  error,
}) => {
  return (
    <div>
      <label htmlFor={id} className='block text-sm font-medium text-gray-700'>
        {label}{' '}
        {error ? (
          <span className='text-sm text-red-500'> (required)</span>
        ) : (
          <span className='text-gray-400'> (required)</span>
        )}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`${className} ${error ? 'border-red-500' : ''}`}
      />
      {error && <p className='text-sm text-red-500'>{error}</p>}
    </div>
  );
};

export default InputForm;
