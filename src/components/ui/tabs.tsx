
import React, { createContext, useContext } from 'react';
type TabsCtx = { value: string; onValueChange: (v:string)=>void };
const Ctx = createContext<TabsCtx | null>(null);
export const Tabs: React.FC<{ value:string; onValueChange:(v:string)=>void; className?:string; children:React.ReactNode; }> = ({value,onValueChange,className='',children}) => (
  <div className={className}><Ctx.Provider value={{value,onValueChange}}>{children}</Ctx.Provider></div>
);
export const TabsList: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({className='',...rest}) => (
  <div className={['flex gap-2 flex-wrap', className].join(' ')} {...rest} />
);
export const TabsTrigger: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { value:string }> = ({value, className='', children, ...rest}) => {
  const ctx = useContext(Ctx)!;
  const active = ctx.value===value;
  return <button onClick={()=>ctx.onValueChange(value)} className={['px-3 py-1.5 rounded-full border', active?'bg-slate-900 text-white border-slate-900':'bg-white border-slate-300 hover:bg-slate-50', className].join(' ')} {...rest}>{children}</button>;
};
export const TabsContent: React.FC<React.HTMLAttributes<HTMLDivElement> & { value:string }> = ({value, className='', children, ...rest}) => {
  const ctx = useContext(Ctx)!;
  if (ctx.value !== value) return null;
  return <div className={className} {...rest}>{children}</div>;
};
