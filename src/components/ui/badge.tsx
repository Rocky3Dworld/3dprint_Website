
import React from 'react';
export const Badge: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({ className='', ...rest }) => (
  <span className={['inline-flex items-center rounded-full bg-slate-100 text-slate-700 px-2 py-0.5 text-xs', className].join(' ')} {...rest} />
);
