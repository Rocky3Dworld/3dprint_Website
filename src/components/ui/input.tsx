
import React from 'react';
type Props = React.InputHTMLAttributes<HTMLInputElement>;
export const Input: React.FC<Props> = (props) => (
  <input {...props} className={['w-full border rounded-xl px-3 py-2 outline-none focus:ring focus:ring-slate-200', props.className||''].join(' ')} />
);
export default Input;
