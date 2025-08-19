
import React from 'react';
export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className='', ...rest }) => (
  <div className={['bg-white border border-slate-200 shadow-sm', className].join(' ')} {...rest} />
);
export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className='', ...rest }) => (
  <div className={['p-4', className].join(' ')} {...rest} />
);
export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className='', ...rest }) => (
  <div className={['p-4 pt-0', className].join(' ')} {...rest} />
);
export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className='', ...rest }) => (
  <div className={['p-4 pt-0', className].join(' ')} {...rest} />
);
