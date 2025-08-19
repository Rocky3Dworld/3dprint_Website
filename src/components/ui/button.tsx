
import React from 'react';
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default'|'outline', size?: 'lg'|'icon' };
export const Button: React.FC<Props> = ({ variant='default', size, className='', ...rest }) => {
  const base = 'inline-flex items-center justify-center rounded-2xl px-4 py-2 font-medium shadow-sm transition border';
  const v = variant==='outline' ? 'bg-white border-slate-300 hover:bg-slate-50' : 'bg-slate-900 text-white border-slate-900 hover:bg-slate-800';
  const s = size==='lg' ? 'px-5 py-3 text-base' : size==='icon' ? 'h-9 w-9 p-0' : '';
  return <button className={[base,v,s,className].join(' ')} {...rest} />;
};
export default Button;
